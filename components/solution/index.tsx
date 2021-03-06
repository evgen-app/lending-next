import styles from './Solution.module.css'
import React from "react"
import Link from 'next/link';

interface SolutionIE{
    onAboutClick: () => void
    onBuyClick?: ()=> void
}

export const Solution:React.FC<SolutionIE> = (props) =>{
    return(
        <div className={styles.solution} id="buy">
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
                <button onClick={()=>props.onAboutClick()} className={styles.btn}>Подробнее</button>
               <Link href={"#contacts"}>
                <button className={styles.btn}>купить</button>

               </Link>

            </div>
            <div className={styles.card + " " + styles.cardVisible} style={{justifyContent: "center"}}>
                Coming soon...
            </div>
        </div>
    </div>  
    );
}