// section1.js

import { useState, useEffect } from "react";
import styles from "@/styles/Section1.module.css";

export default function Section1() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const totalCards = 10;

  const sections = [
    { title: "Matematikte Başarılı Olamıyorsan SORUN SENDE DEĞİL!", description: "", videoUrl: "https://www.youtube.com/embed/EXr9X6WAt1c?si=2qh2iK6Bd5W8oFiH?autoplay=1" },
    { title: "Title 2", description: "Description for section 2", videoUrl: "https://www.youtube.com/embed/example2" },
    { title: "Title 3", description: "Description for section 3", videoUrl: "https://www.youtube.com/embed/example3" },
    { title: "Title 4", description: "Description for section 4", videoUrl: "https://www.youtube.com/embed/example4" },
    { title: "Title 5", description: "Description for section 5", videoUrl: "https://www.youtube.com/embed/example5" },
    { title: "Title 6", description: "Description for section 6", videoUrl: "https://www.youtube.com/embed/example6" },
    { title: "Title 7", description: "Description for section 7", videoUrl: "https://www.youtube.com/embed/example7" },
    { title: "Title 8", description: "Description for section 8", videoUrl: "https://www.youtube.com/embed/example8" },
    { title: "Title 9", description: "Description for section 9", videoUrl: "https://www.youtube.com/embed/example9" },
    { title: "Title 10", description: "Description for section 10", videoUrl: "https://www.youtube.com/embed/example10" },
  ];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextCard();
    }, 10000);
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
        {sections.map((section, index) => (
          <div key={index} className={`${styles.card} ${styles[`card${index + 1}`]}`}>
            <div className={styles.textBox}>
              <h2>{section.title}</h2>
              <p>{section.description}</p>
            </div>
            <div className={styles.videoBox}>
              <iframe
                width="100%"
                height="100%"
                src={section.videoUrl}
                title={`YouTube video ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
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
        {sections.map((_, index) => (
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
