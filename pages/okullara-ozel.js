// Home.js
import Head from "next/head";
import { Open_Sans } from "next/font/google";
import styles from "@/styles/Home.module.css";

const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export default function Home() {
  return (
    <>

      <main className={`${styles.main} ${openSans.className}`}>
        <div id="section1" className={styles.section} style={{ backgroundColor: '#ffccfc' }}>
          <p>OKULLARA ÖZEL</p>
        </div>

      </main>
    </>
  );
}
