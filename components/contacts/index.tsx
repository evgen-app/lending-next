import styles from './Contacts.module.css'
import React, { useState } from "react"
import Link from 'next/link';
import Image from 'next/image';
import axios from "axios"

// const nodemailer = require("nodemailer");
// async function main(textMail:string){
//     let transporter = nodemailer.createTransport({
//             host: "smtp.yandex.ru",
//             port: 465,
//             secure: true, 
//             auth: {
//             user: "vasilifibonachi@yandex.ru", 
//             pass: "8uP5HzwE_NMBgCj" 
//             }
//         });

//         let info = await transporter.sendMail({
//             from: 'vasilifibonachi@yandex.ru', 
//             to: "firesieht@mail.ru", 
//             subject: "Проверка почты",
//             text: textMail, 
//         });

//         console.log("Message sent: %s", info.messageId);
// }


export const Contacts : React.FC = () =>{
    let [name, setName] = useState("")
    let [email, setEmail] = useState("")
    let [message, setMessage] = useState("")
    const validateEmail = (email:string) =>{
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        return pattern.test(email)

    }

   const formSend = (e:any) =>{
        e.preventDefault();
        if (name != null && validateEmail(email) && message != null){
            console.log({name, email, message})
            axios.get("https://mail-sender-pyc.herokuapp.com/send-mail", {params:{name:name, message:message, email:email}})
            alert("Данные отправлены, мы с вами свяжемся")
        }
        else{
            alert("Форма введена некорректно")
        }
    }


    return(
        <div className={styles.contacts} id="contacts">
        <h1>Связь с нами</h1>
        <form className={styles.questForm} onSubmit={formSend}>
            <div className={styles.formWrapper}>
                <input onChange={(e)=>setName(e.target.value)} type="text" className={styles.inp} placeholder="Имя"/>
                <input onChange={(e)=>setEmail(e.target.value)} type="email" className={styles.inp} placeholder="E-mail"/>
            </div>
            <textarea className={styles.inp} onChange={(e)=>setMessage(e.target.value)} rows={10} cols={45} placeholder="Комментарий"></textarea>
            <input type="submit" value="Отправить" className={styles.btn} style={{width: "100%"}}/>
        </form>
    </div>
    );
}