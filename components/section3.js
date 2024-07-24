import { useRef } from "react";
import styles from "@/styles/Section3.module.css";

export default function Section3() {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    containerRef.current.scrollBy({
      left: -containerRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({
      left: containerRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  const cards = [
    {
      title: "Dijital Analiz",
      image: "../yapayzeka.png",
      text: "Yapay zeka destekli dijital analiz ile öğrencinin matematik temelindeki eksikleri nokta atışı tespit edilir."
    },
    {
      title: "Ders Videoları",
      image: "../dersvideo.png",
      text: "Analiz sonucunda algoritma yardımıyla, öğrencinin eksikliği olan konular, en etkili olacak sırayla sisteme atanır."
    },
    {
      title: "Ara Pekiştirme Egzersizleri",
      image: "../egzersiz.png",
      text: "Matematik öğreniminin en önemli unsuru “aktif katılım”ı sağlamak için her videonun sonunda pekiştirme egzersizleriyle öğrenme desteklenir."
    },
    {
      title: "Ara Ölçme Testleri",
      image: "../araolcme.png",
      text: "Video eğitim içeriğinin anlaşılma seviyesinin ölçüldüğü bu testte, öğrencinin eksikliği varsa aynı, yoksa bir sonraki eğitim başlığına yönlendirilir."
    },
    {
      title: "İstasyon Ölçme Testleri",
      image: "../istasyon.png",
      text: "Öğrenci seviyesi ve durumuna göre Mentoru tarafından yönlendirilen, ihtiyaç olması halinde uygulanan konu bazlı testlerdir."
    },
    {
      title: "Son Analiz",
      image: "../ogrenme.png",
      text: "Video Eğitimlerini tamamlayan öğrencinin son durum değerlendirmesi için başta uygulanan analiz seviyesinde yapılan ölçümdür."
    },
    {
      title: "Rehberlik Videoları",
      image: "../rehber.png",
      text: "Öğrenciye rehberlik eden; plan, program ve strateji hazırlığında verimli olacak yöntemler sunan videolardır."
    },
    {
      title: "Mentor Takibi",
      image: "../mentor.png",
      text: "Mathsey Mentorluk hizmeti, öğrenciye yol arkadaşlığı yapar. Öğrencinin başarıya ulaşması için takip eden mentor; maksimum fayda sağlaması için yönlendirmelerde bulunur."
    },
    {
      title: "Gelişim Değerlendirme Raporu",
      image: "../egitimraporu.png",
      text: "İlk ve son analizdeki başarı durumu, uygulandıysa İstasyon Analiz sonuçları yüzdesel olarak paylaşılır. Öğrencinin eğitim sürecinin özetini sunar."
    }
  ];

  return (
    <section id="section3" className={styles.section}>
      <div className={styles.cardsTitle}>
        Matematikte başarıya taşıyacak her şey BİR ARADA!
      </div>
      
      <div className={styles.cardsText}>
      8-9-10-11-12. sınıf öğrencileri ve mezunlar için geliştirilmiş Mathsey Matematik Robotu ile;
      Matematik temelinde bulunan tüm eksikleri tamamla, sana özel profesyonel mentor takibi ile ilerle ve başarıya ulaş!      </div>

      <div className={styles.gridContainer} ref={containerRef}>
        {cards.map((card, index) => (
          <div className={styles.card} key={index}>
            <img src={`/images/${card.image}`} alt={card.title} className={styles.cardImage} />
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardText}>{card.text}</p>
          </div>
        ))}
      </div>
      <button className={`${styles.scrollButton} ${styles.left}`} onClick={scrollLeft}>
        &lt;
      </button>
      <button className={`${styles.scrollButton} ${styles.right}`} onClick={scrollRight}>
        &gt;
      </button>
    </section>
  );
}
