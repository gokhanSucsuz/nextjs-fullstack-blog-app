import React from 'react'
import styles from "./singlePage.module.css"
import Menu from '@/components/Menu/Menu'
import Image from 'next/image'
import Comments from '@/components/comments/Comments'

const SinglePage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.txtContainer}>
                    <h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
                    <div className={styles.user}>
                        <div className={styles.userImgContainer}>
                            <Image src="/logo.png" alt='photo' className={styles.userImage} fill />
                        </div>
                        <div className={styles.userTextContainer}>
                            <span className={styles.username}>Gökhan SUÇSUZ</span>
                            <span className={styles.date}>11.08.2024</span>
                        </div>
                    </div>
                </div>
                <div className={styles.imgContainer}>
                    <Image src="/p1.jpeg" alt='photo' className={styles.image} fill />
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.desc}>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ea, ad sunt harum unde, quidem neque eius aliquid qui reiciendis voluptatum voluptates consequatur veritatis autem magnam iure facere quaerat hic! Veritatis nihil nobis ab impedit earum modi iure molestias temporibus voluptate, quas rem optio praesentium velit ipsam veniam, accusantium cum inventore saepe blanditiis sit. Velit ducimus perferendis nihil illo autem ea quo facere debitis alias dolorem, perspiciatis minima inventore repudiandae voluptate nulla delectus deleniti fugit blanditiis soluta quaerat nobis quis sed? Maiores eaque impedit hic molestiae repellendus eos, reiciendis officia corrupti odio, delectus, aut vel itaque non exercitationem aliquid? Animi.
                        </p>
                        <h2 className={styles.txtTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ea, ad sunt harum unde, quidem neque eius aliquid qui reiciendis voluptatum voluptates consequatur veritatis autem magnam iure facere quaerat hic! Veritatis nihil nobis ab impedit earum modi iure molestias temporibus voluptate, quas rem optio praesentium velit ipsam veniam, accusantium cum inventore saepe blanditiis sit. Velit ducimus perferendis nihil illo autem ea quo facere debitis alias dolorem, perspiciatis minima inventore repudiandae voluptate nulla delectus deleniti fugit blanditiis soluta quaerat nobis quis sed? Maiores eaque impedit hic molestiae repellendus eos, reiciendis officia corrupti odio, delectus, aut vel itaque non exercitationem aliquid? Animi.
                        </p>
                        <h2 className={styles.txtTitle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ea, ad sunt harum unde, quidem neque eius aliquid qui reiciendis voluptatum voluptates consequatur veritatis autem magnam iure facere quaerat hic! Veritatis nihil nobis ab impedit earum modi iure molestias temporibus voluptate, quas rem optio praesentium velit ipsam veniam, accusantium cum inventore saepe blanditiis sit. Velit ducimus perferendis nihil illo autem ea quo facere debitis alias dolorem, perspiciatis minima inventore repudiandae voluptate nulla delectus deleniti fugit blanditiis soluta quaerat nobis quis sed? Maiores eaque impedit hic molestiae repellendus eos, reiciendis officia corrupti odio, delectus, aut vel itaque non exercitationem aliquid? Animi.
                        </p>
                    </div>
                    <div className={styles.comment}>
                        <Comments />
                    </div>
                </div>
                <Menu />
            </div>

        </div>
    )
}

export default SinglePage