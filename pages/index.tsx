import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kandrac - Personal web</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Vitajte</h1>

        <p className={styles.description}>
          Toto je web, ktorý slúži primárne pre moje osobné vzdelávanie sa v oblasti tvorby
          webových aplikácií vo frameworku <a href="https://nextjs.org/">Next.js</a>
        </p>

        <div className={styles.grid}>
          <Link href="/timeline" className={styles.card}>
            <h2>Časová Os &rarr;</h2>
            <p>Ako vznikal tento projekt</p>
          </Link>
          <Link href="/monaco" className={styles.card}>
            <h2>Monaco &rarr;</h2>
            <p>VS Code editor vo webovom prehliadači</p>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
