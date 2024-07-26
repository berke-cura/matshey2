import styles from "@/styles/Card.module.css";
import Image from "next/image";

const Card = ({ image, title, subtitle, description, price }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.image} />
      </div>
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <h3 className={styles.subtitle}>{subtitle}</h3>}
      <div className={styles.description}>
        {description.split('\n').map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
      <p className={styles.price}>{price} TL</p>
      <button className={styles.button}>Satın Al</button>
    </div>
  );
};

export default Card;
