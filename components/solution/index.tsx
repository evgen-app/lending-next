import styles from './Solution.module.css'
import React from "react"
import Link from 'next/link';

export const Solution:React.FC = () =>{
    return(
        <div className={styles.solution} id="buy"  >
        <h1 >Что мы предлагаем</h1>
        <h2 >Приедем к вам - соберем квест</h2>
        <div className={styles.carousel} >
            <div className={styles.card}>
                <h2 style={{alignSelf: "center"}}>Спаси корабль</h2>
                <div>Вы-пилот корабля, вам надо спасти <br/> корабль и доставить ценный груз на <br/>  другую планету.</div>
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
                <button className={styles.btn}>Подробнее</button>
                <button className={styles.btn}>купить</button>

            </div>
            <div className={styles.card} style={{justifyContent: "center"}}>
                Coming soon...
            </div>
        </div>
    </div>  
    );
}