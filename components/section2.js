import styles from "@/styles/Section2.module.css";

export default function Section2() {
  return (
    <section id="section2" className={styles.section}>
      <div className={styles.content}>
        <h2 className={styles.title}>
          <span>'Mathsey Matematik Robotu' ile Kişiye Özel Temel Matematik Çözümleri</span>
        </h2>
        <p className={styles.subtitle}>
          Mathsey Matematik tu; Matematik Röntgeni tecrübesi ve yapay zeka yardımıyla öğrencinin matematik temelinin dijital analizini yapar, eksiklerine uygun video programı hazırlayan ve öğrenciye özel mentorla takibini yaparak başarıya ulaştıran “Kişiye Özel Matematik Çözümü”dür.
        </p>
        <div className={styles.features}>
          <div className={styles.feature}>
            <img src="../yapayzeka.png" alt="Icon 1" className={styles.icon} />
            <h3>Nokta Atışı Analiz</h3>
            <p>
              Mathsey; gücünü Matematik Röntgeni’nden alan ve yapay zeka ile desteklenen analizi sayesinde matematik temelindeki eksikleri nokta atışı tespit eder!
            </p>
          </div>
          <div className={styles.feature}>
            <img src="../egitimraporu.png" alt="Icon 2" className={styles.icon} />
            <h3>Yapay Zekayla Özel Dersler</h3>
            <p>
              Yapay zeka, yapılan analiz sonucuna göre tespit edilen eksikler için sana özel bir sıralamayla program oluşturur ve adım adım süreci düzenler.
            </p>
          </div>
          <div className={styles.feature}>
            <img src="../mentor.png" alt="Icon 3" className={styles.icon} />
            <h3>Yakın Mentor Takibi</h3>
            <p>
              Tüm süreçte takibini yapacak mentorun, başarıya ulaşman için seni izler, iletişime geçer ve yönlendirir.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
