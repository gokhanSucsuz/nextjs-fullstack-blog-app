"use client"
import Image from "next/image"
import styles from "./themeToggle.module.css"
import { useContext } from "react"
import { ThemeContext } from "@/context/ThemeContext"

const ThemeToggle = () => {
    const { theme, toggle } = useContext(ThemeContext)


    return (
        <div className={styles.container} onClick={toggle} style={
            theme === "dark" ? { backgroundColor: "white" } : { backgroundColor: "#0f172a" }
        }>
            <Image src="/moon.png" alt="moon" height={20} width={20} />
            <div className={styles.ball} style={theme === "dark"
                ? { left: 1, background: "#0f172a" }
                : { right: 1, background: "white" }}></div>
            <Image src="/sun.png" alt="sun" height={20} width={20} />
        </div>
    )
}

export default ThemeToggle
