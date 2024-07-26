// okullara-ozel.js
import Head from "next/head";
import { Open_Sans } from "next/font/google";
import styles from "@/styles/Okul.module.css";
import Image from "next/image";

const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>MATHSEY | Kurumsal</title>
        <meta name="description" content="Empowering K-12 students with high-quality online math course videos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={`${styles.main} ${openSans.className}`}>
        <div id="section1" className={styles.section} style={{ backgroundColor: '#ffccfc' }}>
          <div className={styles.content}>
          <div className={styles.logoDiv}>
            <Image className={styles.logo} src="/logo.png" alt="Mathsey Logo" width={200} height={100} />
          </div>
          <p>Öğrencilerin matematik başarısını <b>2,5 kat* artıran Mathsey Matematik Robotu,</b> kurumsal çözümleriyle şimdi okullarda!</p>
          <p2>8-9-10-11 VE 12. SINIF ÖĞRENCİLERİ İÇİN!</p2>
          </div>
        </div>
        <div id="section2" className={styles.section2} style={{ backgroundColor: '#fbd8be' }}>
          <div className={styles.content}>
            <h1><b>Okullar ve Eğitim Kurumları için başarıya götüren çok avantajlı çözümler!</b></h1>
            <p>Mathsey Temel Matematik Çözüm Programı + Her 100 öğrenciniz için bir öğretmeninize Mentor Eğitimi (Eğitim ücretsiz verilecektir.)</p>
            <h2>Ücretlendirme</h2>
            <p>1-10 Öğrenci: <b>40.000 ₺</b></p>
            <p>11-100 Öğrenci: <b>120.000 ₺</b></p>
            <p>101-500 Öğrenci: <b>200.000 ₺</b></p>
            <p>501-1000 Öğrenci: <b>320.000 ₺</b></p>
            <p>Belirtilen fiyatlara KDV dahil değildir.</p>
          </div>
        </div>
        <div id="section3" className={styles.section3} style={{ backgroundColor: '#fff' }}>
          <div className={styles.content}>
            <div className={styles.text}>
              <h1>Türkiye&apos;de ilk ve tek!</h1>
              <p><b>Öğrencilerinizin tüm temel matematik eksiklerini hızla ve eksiksiz kapatın!</b></p>
              <p>Türkiye&apos;nin 73 ilinde ve dünyada 7 ülkede, öğrenci ve velilerine %100&apos;e yakın memnuniyetle hizmet veren Matematik Röntgeni&apos;nin dijital ürünü olan Mathsey Matematik Robotu ile öğrencilerinizin tüm temel matematik eksiklerini hızla ve eksiksiz kapatın!</p>
            </div>
            <div className={styles.image}>
              <img src="/kurumsalK.png" alt="Student with books" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
