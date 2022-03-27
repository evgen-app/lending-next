import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Header } from '../components/header'
import { Modal } from '../components/modal'
import { Main } from '../components/main'
import { Solution } from '../components/solution'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>AR Quest - квест у вас дома</title>
        <meta name="description" content="AR квест с дополненной реальностью"/>
        <link rel="icon" href="/icon.ico" />
      </Head>

      <main>
        <Header></Header>
        <div className={styles.content}>
          <Main></Main>
          <Solution></Solution>

        </div>
      </main>
    </div>
  )
}

export default Home
