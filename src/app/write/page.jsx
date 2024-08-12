"use client"
import React, { useState } from 'react'
import styles from "./writePage.module.css"
import Image from 'next/image'

const WritePage = () => {
    const [open, setOpen] = useState(false)
    const toggle = () => {
        setOpen(!open)
    }
    console.log(open)
    return (
        <div className={styles.container}>
            <input type="text" placeholder='Title' />
            <div className={styles.editor}>
                <button className={styles.button} onClick={toggle}>
                    <Image src="/plus.png" alt='plus' width={16} height={16} />
                </button>
                {open && <div className={styles.buttons} >
                    <button className={styles.button}>
                        <Image src="/plus.png" alt='plus' width={16} height={16} />
                    </button>
                    <button className={styles.button}>
                        <Image src="/plus.png" alt='plus' width={16} height={16} />
                    </button>
                    <button className={styles.button}>
                        <Image src="/plus.png" alt='plus' width={16} height={16} />
                    </button>
                </div>}
            </div>
        </div>
    )
}

export default WritePage
