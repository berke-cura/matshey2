import { useState, useEffect } from "react";
import styles from "@/styles/Section1.module.css";

export default function Section1() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const totalCards = 5;

  useEffect(() => {
    // Set loaded state to true after initial render
    setIsLoaded(true);
  }, []);

  // Auto-sliding feature
  useEffect(() => {
    const interval = setInterval(() => {
      nextCard();
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const nextCard = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % totalCards);
  };

  const prevCard = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + totalCards) % totalCards);
  };

  const goToCard = (index) => {
    setActiveIndex(index);
  };

  return (
    <section id="section1" className={styles.section}>
      <div
        className={styles.cardContainer}
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {Array.from({ length: totalCards }).map((_, index) => (
          <div key={index} className={styles.card}>
            Section 1{String.fromCharCode(97 + index)}
          </div>
        ))}
      </div>
      <button className={`${styles.arrow} ${styles.leftArrow}`} onClick={prevCard}>
        &#9664;
      </button>
      <button className={`${styles.arrow} ${styles.rightArrow}`} onClick={nextCard}>
        &#9654;
      </button>
      <div className={styles.navButtons}>
        {Array.from({ length: totalCards }).map((_, index) => (
          <button
            key={index}
            className={`${styles.navButton} ${index === activeIndex && isLoaded ? styles.active : ""}`}
            onClick={() => goToCard(index)}
          />
        ))}
      </div>
    </section>
  );
}
