import React from 'react';
import styles from "@/styles/Footer.module.css";
import Image from 'next/image';
import ScrollToTop from './scrollToTop.js';

const Footer = () => {
  return (
    <footer className={styles.footer} id="footer">
      <ScrollToTop />
      <div className={styles.topSection}>
        <ul className={styles.links}>
          <li><a href="#">MESAFELİ SATIŞ SÖZLEŞMESİ</a></li>
          <li><a href="#">TESLİMAT VE İADE</a></li>
          <li><a href="#">HAKKIMIZDA</a></li>
          <li><a href="#">GİZLİLİK POLİTİKASI</a></li>
        </ul>
      </div>
      <div className={styles.middleSection}>
        <Image className={styles.logo} src="/footer.png" alt="Payment Logos" width={360} height={27} />
      </div>
      <div className={styles.bottomSection}>
        <p className={styles.footerText}>MATHSEY powered by MATEMATİK RÖNTGENİ</p>
      </div>
    </footer>
  );
};

export default Footer;
