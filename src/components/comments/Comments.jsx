"use client"
import React from 'react'
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

    const { data, isLoading } = useSWR(`http://localhost:3000/api/comments?postSlug=${postSlug}
        
        `, fetcher)
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Comments</h1>
            {
                status === "autenticated" ? (
                    <div className={styles.commentBlock}>
                        <textarea name="txtComment" id="txtComment" className={styles.comment} placeholder='Write a comment...'></textarea>
                        <button className={styles.button}>Send</button>
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
