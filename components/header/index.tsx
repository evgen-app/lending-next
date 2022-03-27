
import Link from 'next/link'
import styles from './Header.module.css'
import react from "react"

export const Header:React.FC = () =>{
    return(
        <div className={styles.header}>
        <Link  href="#main">
            <a className={styles.link} style={{color: "#000 !important", marginLeft: "25px"}}>
                Главная
            </a>
        </Link>
        <Link href="#buy">
            <a className={styles.link}>
                Купить квест
            </a>
        </Link>
        <Link  href="#team">
            <a className={styles.link}>
                Наша команда
            </a>
        </Link>
        <Link  href="#contacts">
            <a className={styles.link}>
                Связь с нами
            </a>
        </Link>
    </div>
    )
}