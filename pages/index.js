import Head from "next/head";
import { Open_Sans } from "next/font/google";
import Section1 from "@/components/section1";
import Section2 from "@/components/section2";
import Section3 from "@/components/section3";
import Section4 from "@/components/section4";
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
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </main>
    </>
  );
}
