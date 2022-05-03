import styles from './Team.module.css'
import React from "react"
import Link from 'next/link';
import Image from 'next/image';

export const Team:React.FC =  () => {
    return(
        <div className={styles.team} >
            <h1 id="team">Наша команда</h1>
            <div className={styles.carouselAvatar} style={{marginTop: "15%"}}>
                <div className={styles.person}>
                    <img className={styles.avatar}  src="/images/Ilya.png"/>
                    <img className={styles.ilArrow} src="/images/arrow.svg"/>
                    <div className={styles.ilText}>
                        <h2>Это Илья.</h2>
                        <div>
                            Илья - Unity разработчик.  <br/>
                            Здесь он, чтобы реализовать <br/>
                            техническую часть квеста
                        </div>
                    </div>
                </div>
                <div className={styles.person}>
                    <img  className={styles.avatar}  src="/images/Michael.png"/>
                    <img className={styles.miArrow} src="/images/arrow.svg"/>
                    <div className={styles.miText}>
                        <h2>Это Миша.</h2>
                        <div>
                            Миша - AR разработчик. Здесь он, <br/>
                            чтобы реализовать механики <br/>
                            дополненной реальности
                        </div>
                    </div>
                </div>
                <div className={styles.person + " " + styles.danya} >
                    <img className={styles.avatar}  src="/images/Danil.png"/>
                    <img className={styles.denArrow} src="/images/arrow.svg"/>
                    <div className={styles.denText}>
                        <h2>Это Даня.</h2>
                        <div>
                            Даня - SMM менеджер. Здесь он <br/>
                            чтобы осуществить продажи <br/>
                            квестов
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}