import React from 'react'
import styles from "./cardList.module.css"
import Pagination from '../pagination/Pagination'
import Image from 'next/image'
import Card from '../card/Card'

const fetchData = async (page, cat) => {
    const res = await fetch(`http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`, { cache: 'no-store' });
    if (!res.ok) {
        throw new Error('Failed to fetch');
    }
    return res.json();
};

const CardList = async ({ page, cat }) => {
    const { posts, count } = await fetchData(page, cat)

    const POST_PER_PAGE = 2;

    const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count
    const hasPrev = POST_PER_PAGE * (page - 1) > 0

    return (
        <div className={styles.container}>
            <div className={styles.containerCard}>
                <h1 className={styles.title}>Recent Posts</h1>
                {posts?.map((item, index) =>
                    <div key={index}>
                        <Card item={item} />
                    </div>
                )}
            </div>
            <div className={styles.containerPagination}>
                <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
            </div>
        </div>
    )
}

export default CardList
