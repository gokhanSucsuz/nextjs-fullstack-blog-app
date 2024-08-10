import Link from 'next/link'
import React from 'react'
import styles from "./menuPosts.module.css"
import Image from 'next/image'

const MenuPosts = ({ withImage }) => {
    return (
        <div className={styles.items}>
            <Link href="/" className={styles.item}>
                {withImage && (<div className={styles.imgContainer}>
                    <Image className={styles.image} src="/p1.jpeg" alt='logo' fill />
                </div>)}
                <div className={styles.txtContainer}>
                    <div className={styles.category}>TRAVEL</div>
                    <div className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, placeat?</div>
                    <div className={styles.date}>Gökhan SUÇSUZ - 10.08.2024</div>

                </div>
            </Link>
            <Link href="/" className={styles.item}>
                {withImage && (<div className={styles.imgContainer}>
                    <Image className={styles.image} src="/p1.jpeg" alt='logo' fill />
                </div>)}
                <div className={styles.txtContainer}>
                    <div className={styles.category}>TRAVEL</div>
                    <div className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, placeat?</div>
                    <div className={styles.date}>Gökhan SUÇSUZ - 10.08.2024</div>

                </div>
            </Link>
            <Link href="/" className={styles.item}>
                {withImage && (<div className={styles.imgContainer}>
                    <Image className={styles.image} src="/p1.jpeg" alt='logo' fill />
                </div>)}
                <div className={styles.txtContainer}>
                    <div className={styles.category}>TRAVEL</div>
                    <div className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, placeat?</div>
                    <div className={styles.date}>Gökhan SUÇSUZ - 10.08.2024</div>

                </div>
            </Link>
            <Link href="/" className={styles.item}>
                {withImage && (<div className={styles.imgContainer}>
                    <Image className={styles.image} src="/p1.jpeg" alt='logo' fill />
                </div>)}
                <div className={styles.txtContainer}>
                    <div className={styles.category}>TRAVEL</div>
                    <div className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, placeat?</div>
                    <div className={styles.date}>Gökhan SUÇSUZ - 10.08.2024</div>
                </div>
            </Link>
        </div>
    )
}

export default MenuPosts
