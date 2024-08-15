import styles from './categoryList.module.css';
import Link from 'next/link';
import Image from 'next/image';

const fetchData = async () => {
    const res = await fetch('http://localhost:3000/api/categories', { cache: 'no-store' });
    if (!res.ok) {
        throw new Error('Failed to fetch');
    }
    return res.json();
};

const CategoryList = async () => {

    const data = await fetchData()

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Popular Categories</h1>
            <div className={styles.categories}>
                {data?.map((item) => (
                    <Link key={item._id} href={`/blog?cat=${item.slug}`} className={`${styles.category} ${styles[item.title]}`}>
                        {item.img && <Image
                            src={item.img}
                            alt={item.img}
                            width={32}
                            height={32}
                            className={styles.image}
                        />}
                        {item.title}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CategoryList;
