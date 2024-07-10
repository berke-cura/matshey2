import styles from "@/styles/Section3.module.css";

export default function Section3() {
  return (
    <section id="section3" className={styles.section}>
      <div className={styles.gridContainer}>
        <div className={styles.card}>Dijital Analiz</div>
        <div className={styles.card}>Ders Videoları</div>
        <div className={styles.card}>Ara Pekiştirme Egzersizleri</div>
        <div className={styles.card}>Ara Ölçme Testleri</div>
        <div className={styles.card}>İstasyon Ölçme Testleri</div>
        <div className={styles.card}>Son Analiz</div>
        <div className={styles.card}>Rehberlik Videoları</div>
        <div className={styles.card}>Mentor Takibi</div>
        <div className={styles.card}>Gelişim Değerlendirme Raporu</div>
      </div>
    </section>
  );
}
