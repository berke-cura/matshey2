// Home.js
import Head from "next/head";
import { Open_Sans } from "next/font/google";
import styles from "@/styles/Home.module.css";

const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>MATSHEY | Matematik Robotu</title>
        <meta name="description" content="Empowering K-12 students with high-quality online math course videos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={`${styles.main} ${openSans.className}`}>
        <div id="section1" className={styles.section} style={{ backgroundColor: '#ffcccc' }}>
          <p>BAYİLİK</p>
        </div>

      </main>
    </>
  );
}
