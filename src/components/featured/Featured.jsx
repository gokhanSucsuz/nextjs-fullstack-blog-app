import React from 'react'
import styles from "./featured.module.css"
import Image from 'next/image'

const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b>Hey, myBlog dev here!</b><br />
                Discover my stories and creative ideas.
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src="/p1.jpeg" alt='image' fill className={styles.image} />
                </div>
                <div className={styles.txtContainer}>
                    <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet.</h1>
                    <p className={styles.postDesc}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat et cupiditate vel minima libero aspernatur ratione, nisi asperiores consectetur delectus?
                    </p>
                    <button className={styles.button}>Read More...</button>
                </div>
            </div>
        </div>
    )
}

export default Featured
