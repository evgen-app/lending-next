import styles from './Main.module.css'
import React from "react"
import Link from 'next/link';
export const Main:React.FC = () =>{
    return(
        <div className={styles.main} id="main">
            <h1 >AR Quest</h1>
            <h2 style={{"textAlign":"center"}}>Квесты прямо в вашем доме!</h2>
            <Link  href="#buy" >
                <a className={styles.inRow}>
                    Далее <img src="/images/arrowUp.svg"/>
                </a>
            </Link>
        </div>
    );
}