import React from "react"
import styles from './Ring.module.css'

export const Rings:React.FC = () =>{
    return(
        <div>
            <img className={styles.ring} style={{left: "-50px", top:"0px"}} src="/images/ring.svg"/>
            <img className={styles.ring} style={{right: "-50px", top:"0px", width: "20%"}} src="/images/ring.svg"/>
            <img className={styles.ring} style={{right: "50%", top:"350px", width: "40%"}} src="/images/ring.svg"/>
            <img className={styles.ring} style={{right: "-100px", top:"750px", width: "35%"}} src="/images/ring.svg"/>
            <img className={styles.ring} style={{left: "-10px", top:"900px", width: "10%"}} src="/images/ring.svg"/>
            <img className={styles.ring} style={{right: "100px", top:"1500px", width: "25%"}} src="/images/ring.svg" />
            <img className={styles.ring} style={{left: "-100px", top:"1700px", width: "30%"}} src="/images/ring.svg"/>
            <img className={styles.ring} style={{right: "60%", top:"2500px", width: "20%"}} src="/images/ring.svg"/>
        </div>
        
    )
}