"use client"
import React, { useState } from 'react'
import styles from "./comments.module.css"
import Image from 'next/image'
import Link from 'next/link'
import { NextResponse } from 'next/server'
import { useSession } from 'next-auth/react'
import useSWR from 'swr'

const fetcher = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    if (!res.ok) {
        const error = new Error(data.message)
        throw error
    }
    return data;
}

const Comments = ({ postSlug }) => {
    const status = useSession()
    console.log(status)

    const { data, mutate, isLoading } = useSWR(`http://localhost:3000/api/comments?postSlug=${postSlug}
        
        `, fetcher)

    const [desc, setDesc] = useState("")
    const handleSubmit = async () => {
        await fetch("/api/comments", {
            method: "POST",
            body: JSON.stringify({ desc, postSlug })
        })
        mutate()
    }
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Comments</h1>
            {
                status === "authenticated" ? (
                    <div className={styles.commentBlock}>
                        <textarea onChange={(e) => setDesc(e.target.value)} name="txtComment" id="txtComment" className={styles.comment} placeholder='Write a comment...' />
                        <button className={styles.button} onClick={handleSubmit}>Send</button>
                    </div>
                ) : (
                    <Link className={styles.notAuth} href="/login">Login to write a comment...</Link>
                )
            }
            {isLoading ? "Loading..." : data?.map(item => {
                return (
                    <div key={item.id} className={styles.userComment}>
                        <div className={styles.user}>
                            {item?.user?.image && <div className={styles.userImgContainer}>
                                <Image src={item.user.image} alt='photo' className={styles.userImage} fill />
                            </div>}
                            <div className={styles.userTextContainer}>
                                <span className={styles.username}>{item.user.name}</span>
                                <span className={styles.date}>{item?.createdAt.substring(0, 10)}</span>
                            </div>

                        </div>
                        <div className={styles.commentText}>
                            {item?.desc}
                        </div>
                    </div>)
            })}
        </div>
    )
}

export default Comments
