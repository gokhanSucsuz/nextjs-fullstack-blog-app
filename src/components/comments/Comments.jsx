import React from 'react'
import styles from "./comments.module.css"
import Image from 'next/image'
import Link from 'next/link'

const Comments = () => {
    const status = "autenticated"
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
            <hr />
            <div className={styles.userComment}>
                <div className={styles.user}>
                    <div className={styles.userImgContainer}>
                        <Image src="/logo.png" alt='photo' className={styles.userImage} fill />
                    </div>
                    <div className={styles.userTextContainer}>
                        <span className={styles.username}>Gökhan SUÇSUZ</span>
                        <span className={styles.date}>11.08.2024</span>
                    </div>

                </div>
                <div className={styles.commentText}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, dignissimos.
                </div>
            </div>
            <hr />
            <div className={styles.userComment}>
                <div className={styles.user}>
                    <div className={styles.userImgContainer}>
                        <Image src="/logo.png" alt='photo' className={styles.userImage} fill />
                    </div>
                    <div className={styles.userTextContainer}>
                        <span className={styles.username}>Gökhan SUÇSUZ</span>
                        <span className={styles.date}>11.08.2024</span>
                    </div>

                </div>
                <div className={styles.commentText}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing.
                </div>
            </div>
            <hr />
            <div className={styles.userComment}>
                <div className={styles.user}>
                    <div className={styles.userImgContainer}>
                        <Image src="/logo.png" alt='photo' className={styles.userImage} fill />
                    </div>
                    <div className={styles.userTextContainer}>
                        <span className={styles.username}>Gökhan SUÇSUZ</span>
                        <span className={styles.date}>11.08.2024</span>
                    </div>

                </div>
                <div className={styles.commentText}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dolor quos omnis deleniti obcaecati. Veritatis nesciunt at assumenda explicabo ut neque harum illo hic dolore adipisci numquam accusamus aliquam necessitatibus ratione, nostrum cumque voluptates voluptate dignissimos incidunt fugit itaque. Fuga officiis atque necessitatibus eos assumenda voluptatum suscipit sunt dolorum ab.
                </div>
            </div>
            <hr />
            <div className={styles.userComment}>
                <div className={styles.user}>
                    <div className={styles.userImgContainer}>
                        <Image src="/logo.png" alt='photo' className={styles.userImage} fill />
                    </div>
                    <div className={styles.userTextContainer}>
                        <span className={styles.username}>Gökhan SUÇSUZ</span>
                        <span className={styles.date}>11.08.2024</span>
                    </div>

                </div>
                <div className={styles.commentText}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam eveniet atque, dolorum fuga eligendi corporis ullam! Dicta.
                </div>
            </div>
        </div>
    )
}

export default Comments
