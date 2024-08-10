import React from 'react'
import styles from "./cardList.module.css"
import Pagination from '../pagination/Pagination'
import Image from 'next/image'
import Card from '../card/Card'

const CardList = () => {
    return (
        <div className={styles.container}>
            <div className={styles.container}>
                <Card />
            </div>
            <Pagination />
        </div>
    )
}

export default CardList
