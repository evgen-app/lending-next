import styles from './Footer.module.css'
import React from "react"
import Link from 'next/link';

export const MyFooter: React.FC = () =>{
    return(
        <footer className={styles.footer}>
            <div className={styles.copyright}>© PYC Пуртов Михаил, Василенко Илья, Лунев Даниил</div>
            <Link href="https://instagram.com">
                <a>
                    <img className={styles.socMedia} src="/images/inst.svg"/>
                </a>
            </Link>
            <Link href="https://youtube.com">
                <a>
                    <img className={styles.socMedia} src="/images/yt.svg"/>
                </a>
            </Link>
            <Link href="https://vk.com">
                <a>
                    <img className={styles.socMedia} src="/images/vk.svg"/>
                </a>
            </Link>
        </footer>
    );
}