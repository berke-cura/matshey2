import styles from "@/styles/Contact.module.css";

export default function Contact() {
  return (
    <section id="section5" className={styles.section}>
      <div className={styles.contactContainer}>
        <div className={styles.contactInfo}>
          <h2>İletişim Bilgilerimiz</h2>
          <p>İçerenköy Mah. Eryılmazlar Sok. Kemal Bey İş Hanı No: 2 Kat:2</p>
          <p>Ataşehir/İSTANBUL</p>
          <p>0 (216) 912 30 95</p>
          <p>destek@mathsey.com</p>
        </div>
        <div className={styles.contactForm}>
          <h2>Daha fazla bilgi alın</h2>
          <form>
            <label htmlFor="name">Adınız - Soyadınız*</label>
            <input type="text" id="name" name="name" required />
            
            <label htmlFor="phone">Telefon numarası*</label>
            <input type="tel" id="phone" name="phone" required />
            
            <label htmlFor="email">E-Posta Adresiniz*</label>
            <input type="email" id="email" name="email" required />
            
            <label htmlFor="class">Sınıf</label>
            <input type="text" id="class" name="class" />
            
            <label htmlFor="message">Mesajınız</label>
            <textarea id="message" name="message"></textarea>
            
            <button type="submit">Gönder</button>
          </form>
        </div>
      </div>
    </section>
  );
}
