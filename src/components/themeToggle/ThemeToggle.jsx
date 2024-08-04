import Image from "next/image"
import styles from "./themeToggle.module.css"

const ThemeToggle = () => {
    return (
        <div className={styles.container}>
            <Image src="/moon.png" alt="moon" height={14} width={14} />
            <div className={styles.ball}></div>
            <Image src="/sun.png" alt="sun" height={14} width={14} />
        </div>
    )
}

export default ThemeToggle
