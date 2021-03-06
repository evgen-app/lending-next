import type { NextPage } from 'next'
import Head from 'next/head'
import { useState,useEffect } from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Header } from '../components/header'
import { Modal } from '../components/modal'
import { Main } from '../components/main'
import { Solution } from '../components/solution'
import { Team } from '../components/team'
import { Contacts } from '../components/contacts'
import { MyFooter } from '../components/footer'
import { Rings } from '../components/rings'
import { MobileHeader } from '../components/mobile header'
const Home: NextPage = () => {
  let [showModal, setShowModal] = useState(false)
  const [width, setWidth] = useState(0)
  useEffect(() => {
    setWidth(window.innerWidth);
  });
  return (
    <div className={styles.container}>
      <Head>
        <title>AR Quest - квест у вас дома</title>
        <meta name="description" content="AR квест с дополненной реальностью"/>
        <link rel="icon" href="/icon.ico" />
      </Head>

      <main>
        <Header></Header>
        <MobileHeader></MobileHeader>
        <Modal setShow={(a:boolean)=>setShowModal(a)} show={showModal}></Modal>
        <div className={styles.content}>
          <Main></Main>
          <Solution onAboutClick={()=> setShowModal(!showModal)}></Solution>
          <Team></Team>
          <Contacts></Contacts>
          <MyFooter></MyFooter>
        </div>
        <Rings></Rings>
      </main>
    </div>
  )
}

export default Home
