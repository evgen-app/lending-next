
import Link from 'next/link'
import styles from './mobileHeader.module.css'
import react, {useState} from "react"

export const MobileHeader:React.FC = () =>{
    const [open, setOpen] = useState(false)
    return(
        <div className={styles.mobileHeader}>
            <div className={styles.mainMenu}>
                <button className={styles.btn} onClick={() => setOpen(!open)}>
                    <img  className={styles.img   + (open? " " + styles.open:"")} src="/images/header.svg"/>
                </button>
                <div className={styles.text}>AR квест</div>
            </div>

            { open?
            <div className={styles.menu}>
                <Link  href="#main" >
                    <a  onClick={() => setOpen(!open)} className={styles.link} style={{color: "#000 !important"}}>
                        Главная
                    </a>
                </Link>
                <Link href="#buy">
                    <a onClick={() => setOpen(!open)} className={styles.link}>
                        Купить квест
                    </a>
                </Link>
                <Link  href="#team">
                    <a onClick={() => setOpen(!open)} className={styles.link}>
                        Наша команда
                    </a>
                </Link>
                <Link  href="#contacts">
                    <a onClick={() => setOpen(!open)} className={styles.link}>
                        Связь с нами
                    </a>
                </Link>
            </div> : null
            }


    </div>
    )
}