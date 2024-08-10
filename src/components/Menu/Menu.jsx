import React from 'react'
import styles from "./menu.module.css"
import Link from 'next/link'
import Image from 'next/image'

const Menu = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.subTitle}>{"What's hot"}</h2>
            <h1 className={styles.title}>Most Popular</h1>
            <div className={styles.items}>
                <Link href="/" className={styles.item}>
                    <div className={styles.imgContainer}>
                        <Image className={styles.image} src="/p1.jpeg" alt='logo' fill />
                    </div>
                    <div className={styles.txtContainer}>
                        <div className={styles.category}>TRAVEL</div>
                        <div className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, placeat?</div>
                        <div className={styles.date}>Gökhan SUÇSUZ - 10.08.2024</div>

                    </div>
                </Link>
                <Link href="/" className={styles.item}>
                    <div className={styles.imgContainer}>
                        <Image className={styles.image} src="/p1.jpeg" alt='logo' fill />
                    </div>
                    <div className={styles.txtContainer}>
                        <div className={styles.category}>TRAVEL</div>
                        <div className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, placeat?</div>
                        <div className={styles.date}>Gökhan SUÇSUZ - 10.08.2024</div>

                    </div>
                </Link>
                <Link href="/" className={styles.item}>
                    <div className={styles.imgContainer}>
                        <Image className={styles.image} src="/p1.jpeg" alt='logo' fill />
                    </div>
                    <div className={styles.txtContainer}>
                        <div className={styles.category}>TRAVEL</div>
                        <div className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, placeat?</div>
                        <div className={styles.date}>Gökhan SUÇSUZ - 10.08.2024</div>

                    </div>
                </Link>
                <Link href="/" className={styles.item}>
                    <div className={styles.imgContainer}>
                        <Image className={styles.image} src="/p1.jpeg" alt='logo' fill />
                    </div>
                    <div className={styles.txtContainer}>
                        <div className={styles.category}>TRAVEL</div>
                        <div className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, placeat?</div>
                        <div className={styles.date}>Gökhan SUÇSUZ - 10.08.2024</div>

                    </div>
                </Link>
            </div>

        </div>
    )
}

export default Menu
