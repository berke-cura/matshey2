import styles from "@/styles/Section4.module.css";
import Card from "./card";

const cardData = [
  {
    image: "/cozumPaketi.png",
    title: "MATHSEY Matematik Robotu",
    subtitle: "MATEMATİK ÇÖZÜM PAKETİ",
    description: "1 Dijital Temel Matematik Analizi\nProfesyonel Mentor Takibi\nEksikliğe Göre Tanımlanan Videolar\nAra Pekiştirme Dokümanları\nAra Ölçme Sınavları\nRehberlik Videoları",
    price: "4000"
  },
  {
    image: "/dijAnaliz.png",
    title: "MATHSEY",
    subtitle: "DİJİTAL MATEMATİK ANALİZİ",
    description: "",
    price: "1000"
  }
  // Add more card objects as needed
];

export default function Section4() {
  return (
    <section id="section4" className={styles.section}>
      <h2 className={styles.title}>Mathsey&apos;nin Matematikte Başarıya Taşıyan Ürünleri</h2>
      <div className={styles.cardContainer}>
        {cardData.map((card, index) => (
          <Card
          key={index}
          image={card.image}
          title={card.title}
          subtitle={card.subtitle}
          description={card.description}
          price={card.price}
        />
        ))}
      </div>
    </section>
  );
}
