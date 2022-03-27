import styles from './Contacts.module.css'
import React from "react"
import Link from 'next/link';
import Image from 'next/image';

export const Contacts : React.FC = () =>{
    return(
        <div className={styles.contacts} id="contacts">
        <h1>Связь с нами</h1>
        <form className={styles.questForm}>
            <div className={styles.formWrapper}>
                <input type="text" className={styles.inp} placeholder="Имя"/>
                <input type="email" className={styles.inp} placeholder="E-mail"/>
            </div>
            <textarea className={styles.inp} rows={10} cols={45} placeholder="Комментарий"></textarea>
            <input type="submit" value="Отправить" className={styles.btn} style={{width: "100%"}}/>
        </form>
    </div>
    );
}