import Head from 'next/head'
import { NavBar } from '../components/NavBar'
import { useInitialData } from '../hooks/useInitialData'
import styles from '../styles/Home.module.css'

export default function Home() {

  const { initialData } =useInitialData()
  const { storeName } = initialData



  return (
    <div className={styles.container}>
      <Head>
        <title>Tienda Mia</title>
        <meta name="description" content="New store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <NavBar storeName={storeName} />       
      </main>
    </div>
  )
}
