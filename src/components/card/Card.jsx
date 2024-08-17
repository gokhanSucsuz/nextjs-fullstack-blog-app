import React from 'react'
import styles from "./card.module.css"
import Image from 'next/image'
import Link from 'next/link'


const Card = ({ key, item }) => {

    return (
        <>
            <div className={styles.post} key={key}>
                {item.img && <div className={styles.imgContainer}>
                    <Image src={item.img} alt='image' fill className={styles.image} />

                </div>}
                <div className={styles.txtContainer}>
                    <div className={styles.detail}>
                        <span className={styles.date}>
                            {item.createdAt.substring(0, 10)}

                        </span>
                        <span className={styles.category}>
                            {item.catSlug.toUpperCase()}
                        </span>
                    </div>
                    <Link href={`/posts/${item.slug}`}>
                        <h1 className={styles.postTitle}>{item.title}</h1>
                    </Link>
                    <p className={styles.postDesc}>
                        {item.desc.substring(0, 60)}
                    </p>
                    <Link href={`/posts/${item.slug}`} className={styles.button}>Read More</Link>
                </div>
            </div>
        </>

    )
}

export default Card
