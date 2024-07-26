// Home.js
import Head from "next/head";
import { Roboto } from "next/font/google";
import styles from "@/styles/Bayi.module.css";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>MATSHEY | Matematik Robotu</title>
        <meta name="description" content="Empowering K-12 students with high-quality online math course videos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={`${styles.main} ${roboto.className}`}>
        <div id="section1" className={styles.section1} >
          <h1>Gücüne güç kattığımız bayilerimiz arasına katılın!</h1>
          <p>Hızla büyüyen e-öğrenme ekosisteminde aktif rol almak isteyenleri Mathsey Matematik Robotu Bayisi olmaya davet ediyoruz.</p>
        </div>
        <div id="section2" className={styles.section2} >
          <h2>Neden Mathsey Bayisi Olmalıyım?</h2>
          <div className={styles.features}>
            <div className={styles.feature}>
              <img src="../gelir.png" alt="Yüksek Gelir" className={styles.icon} />
              <p>Yüksek Gelir</p>
            </div>
            <div className={styles.feature}>
              <img src="../stoksuz.png" alt="Stoksuz Satış" className={styles.icon} />
              <p>Stoksuz Satış</p>
            </div>
            <div className={styles.feature}>
              <img src="../sürekli.png" alt="Sürekli Büyüyen E-Öğrenme Ekosistemi" className={styles.icon} />
              <p>Sürekli Büyüyen E-Öğrenme Ekosistemi</p>
            </div>
            <div className={styles.feature}>
              <img src="../sistem.png" alt="Sistemiyle Türkiye’de İlk ve Tek" className={styles.icon} />
              <p>Sistemiyle Türkiye’de İlk ve Tek</p>
            </div>
          </div>
        </div>
        <div id="section3" className={styles.section3} >
        <h2>Mathsey Matematik Robotu nedir?</h2>
        <p2>Türkiye’nin 77 ilinde ve dünyada 8 ülkede, öğrenci ve velilerine %100’e yakın memnuniyetle hizmet veren Matematik Röntgeni’nin geliştirdiği, öğrencinin matematik temelindeki eksikleri “Öğrenciye Özel Dijital Analiz ve Programla” hızla ve eksiksiz kapatan bir video eğitim paketidir.</p2>
          <div className={styles.features}>
            <div className={styles.feature}>
              <img src="../dijital.png" alt="Yüksek Gelir" className={styles.icon} />
              <p>Dijital Analizle Eksikleri Nokta Atışı Tespit</p>
            </div>
            <div className={styles.feature}>
              <img src="../hizla.png" alt="Stoksuz Satış" className={styles.icon} />
              <p>Yapay Zeka ile Özelleşen Dersler</p>
            </div>
            <div className={styles.feature}>
              <img src="../mentorTa.png" alt="Sürekli Büyüyen E-Öğrenme Ekosistemi" className={styles.icon} />
              <p>Mentor Takibi</p>
            </div>
          </div>
        </div>
        <div id="section4" className={styles.section4} >
          <p>BAYİLİK-4</p>
        </div>
      </main>
    </>
  );
}
