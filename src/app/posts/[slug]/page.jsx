import React from 'react'
import styles from "./singlePage.module.css"
import Menu from '@/components/Menu/Menu'
import Image from 'next/image'
import Comments from '@/components/comments/Comments'

const fetchData = async (slug) => {
    const res = await fetch(`http://localhost:3000/api/posts/${slug}`,
        { cache: 'no-store' });
    if (!res.ok) {
        throw new Error('Failed to fetch');
    }
    return res.json();
};

const SinglePage = async ({ params }) => {
    const { slug } = params;
    const data = await fetchData(slug)
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.txtContainer}>
                    <h1 className={styles.title}>{data?.title}</h1>
                    <div className={styles.user}>
                        {data?.user.image &&
                            <div className={styles.userImgContainer}>
                                <Image src={data.user.image} alt='photo' className={styles.userImage} fill />
                            </div>}
                        <div className={styles.userTextContainer}>
                            <span className={styles.username}>{data?.user.name}</span>
                            <span className={styles.date}>{data?.user.createdAt.substring(0, 10)}</span>
                        </div>
                    </div>
                </div>
                {data?.img && <div className={styles.imgContainer}>
                    <Image src={data.img} alt='photo' className={styles.image} fill />
                </div>}
            </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.desc} dangerouslySetInnerHTML={{ __html: data?.desc }} />
                    <div className={styles.comment}>
                        <Comments postSlug={slug} />
                    </div>
                </div>
                <Menu />
            </div>

        </div>
    )
}

export default SinglePage