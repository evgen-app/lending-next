import Link from 'next/link'
import styles from './Modal.module.css'
import react, { useState } from "react"
import Image from 'next/image'

export const Modal:React.FC<{show:boolean, setShow:(a:boolean)=>void }> = (props) =>{


    return(
            <div className={styles.modal} style={{display:props.show? "flex":"none"}} id="questInfo">
                <div className={styles.modalCard}>
                    <button id="modalButton" className={styles.modalButton} onClick={()=>props.setShow(false)}>
                        <img src="/images/cross.svg"/>
                    </button>
                    <h1>Спаси корабль</h1>
                    <div>
                        <div className={styles.card_grade}>
                            <div>Сложность:</div>
                            <div>
                                <img src="/images/star.svg"/>
                                <img src="/images/star.svg"/>
                                <img src="/images/star.svg"/>
                            </div>
                        </div>
                        <div className={styles.card_grade}>
                            <div>Сюжет:</div>
                            <div>
                                <img src="/images/star.svg"/>
                            </div>
                        </div>
                    </div>
                    <h2>Описание</h2>
                    <div>
                        Вы - пилот корабля, вам надо спасти корабль и <br/>
                        доставить ценный груз на другую планету. Погрузитесь<br/>
                        в интересный мир стимпанка и ощутите себя в роли<br/>
                        пилота. Сначала полет идет по плану...но дальше на<br/>
                        корабле начинаются странные вещи...<br/>
                    </div>
                    <h2>Информация</h2>
                    <div>
                        Мы работаем по г. Санкт-Петербургу. Квест расчитан на<br/>
                        детей и подростков 10-16 лет. Длительность 50-60 минут.<br/>
                        Цены зависят от групп:<br/>
                        <ul>
                            <li>Группа 2-4 человек - 2000р</li>
                            <li>Группа 4-6 человек - 3000р</li>
                            <li>Группа 6-8 человек - 3500р</li>
                        </ul>
                    </div>
                    <h2>Фото</h2>
                    <img className={styles.img} src="/images/mockups.png"/>
                </div>
            </div> 
    );
}