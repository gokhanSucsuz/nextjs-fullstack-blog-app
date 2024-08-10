import React from 'react'
import styles from "./card.module.css"
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'


const Card = () => {

    return (
        <>
            <h1 className={styles.title}>Recent Posts</h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src="/p1.jpeg" alt='image' fill className={styles.image} />
                </div>
                <div className={styles.txtContainer}>
                    <div className={styles.detail}>
                        <span className={styles.date}>
                            08.08.2024 -
                        </span>
                        <span className={styles.category}>
                            CULTURE
                        </span>
                    </div>
                    <Link href="/">
                        <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet.</h1>
                    </Link>
                    <p className={styles.postDesc}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat et cupiditate vel minima libero aspernatur ratione, nisi asperiores consectetur delectus?...
                    </p>
                    <Link href="/" className={styles.button}>Read More</Link>
                </div>
            </div>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src="/p1.jpeg" alt='image' fill className={styles.image} />
                </div>
                <div className={styles.txtContainer}>
                    <div className={styles.detail}>
                        <span className={styles.date}>
                            08.08.2024 -
                        </span>
                        <span className={styles.category}>
                            CULTURE
                        </span>
                    </div>
                    <Link href="/">
                        <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet.</h1>
                    </Link>
                    <p className={styles.postDesc}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat et cupiditate vel minima libero aspernatur ratione, nisi asperiores consectetur delectus?...
                    </p>
                    <Link href="/" className={styles.button}>Read More</Link>
                </div>
            </div>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src="/p1.jpeg" alt='image' fill className={styles.image} />
                </div>
                <div className={styles.txtContainer}>
                    <div className={styles.detail}>
                        <span className={styles.date}>
                            08.08.2024 -
                        </span>
                        <span className={styles.category}>
                            CULTURE
                        </span>
                    </div>
                    <Link href="/">
                        <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet.</h1>
                    </Link>
                    <p className={styles.postDesc}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat et cupiditate vel minima libero aspernatur ratione, nisi asperiores consectetur delectus?...
                    </p>
                    <Link href="/" className={styles.button}>Read More</Link>
                </div>
            </div>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src="/p1.jpeg" alt='image' fill className={styles.image} />
                </div>
                <div className={styles.txtContainer}>
                    <div className={styles.detail}>
                        <span className={styles.date}>
                            08.08.2024 -
                        </span>
                        <span className={styles.category}>
                            CULTURE
                        </span>
                    </div>
                    <Link href="/">
                        <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet.</h1>
                    </Link>
                    <p className={styles.postDesc}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat et cupiditate vel minima libero aspernatur ratione, nisi asperiores consectetur delectus?...
                    </p>
                    <Link href="/" className={styles.button}>Read More</Link>
                </div>
            </div>
        </>

    )
}

export default Card
