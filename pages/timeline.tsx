import styles from "../styles/Home.module.css";
import Head from "next/head";
import Image from "next/image";

export default function Timeline() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Timeline</title>
            </Head>

            <main className={styles.main}>
                30.11.2022 - Vytvorenie troch statickych stranok - Index, Timeline a minimalistický Monaco sample
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
