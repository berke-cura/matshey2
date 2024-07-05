import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>MATSHEY | Matematik Robotu</title>
        <meta name="description" content="Empowering K-12 students with high-quality online math course videos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>

        <div className={styles.intro}>
          <p>intro page</p>
        </div>

        <div className={styles.contents}>
        <p>second page</p>

        </div>

        <div className={styles.contentsGrid}>
        <p>asdf</p>
        <p>asdf</p>
        <p>asdf</p>
        <p>asdf</p>
        </div>

        <div className={styles.productsGrid}>
        <p>asdf</p>
        <p>asdf</p>
        <p>asdf</p>
        <p>asdf</p>
        </div>


      </main>
    </>
  );
}
