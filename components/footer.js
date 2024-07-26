import React, { useState, useEffect } from 'react';
import styles from '@/styles/Footer.module.css';
import Image from 'next/image';
import ScrollToTop from './scrollToTop.js';
import mesafeliSatisSozlesmesi from '../content/mesafeliSatisSozlesmesi';
import teslimatVeIade from '../content/teslimatVeIade';
import hakkimizda from '../content/hakkimizda';
import gizlilik from '../content/gizlilik';




const Footer = () => {
  const [activePopup, setActivePopup] = useState(null);

  const showPopup = (popupId) => {
    setActivePopup(popupId);
  };

  const hidePopup = () => {
    setActivePopup(null);
  };

  const handleClickOutside = (event) => {
    if (event.target.className === styles.popupOverlay) {
      hidePopup();
    }
  };

  useEffect(() => {
    if (activePopup) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activePopup], [handleClickOutside]);

  return (
    <footer className={styles.footer} id="footer">
      <ScrollToTop />
      <div className={styles.topSection}>
        <ul className={styles.links}>
          <li><a onClick={() => showPopup('popup1')}>MESAFELİ SATIŞ SÖZLEŞMESİ</a></li>
          <li><a onClick={() => showPopup('popup2')}>TESLİMAT VE İADE</a></li>
          <li><a onClick={() => showPopup('popup3')}>HAKKIMIZDA</a></li>
          <li><a onClick={() => showPopup('popup4')}>GİZLİLİK POLİTİKASI</a></li>
        </ul>
      </div>
      <div className={styles.middleSection}>
        <Image className={styles.logo} src="/footer.png" alt="Payment Logos" width={360} height={27} />
      </div>
      <div className={styles.bottomSection}>
        <p className={styles.footerText}>MATHSEY powered by MATEMATİK RÖNTGENİ</p>
      </div>

      {activePopup && (
        <Popup id={activePopup} hidePopup={hidePopup} />
      )}
    </footer>
  );
};

const Popup = ({ id, hidePopup }) => {
  let content;
  switch (id) {
    case 'popup1':
      content = mesafeliSatisSozlesmesi;
      break;
    case 'popup2':
      content = teslimatVeIade;
      break;
    case 'popup3':
      content = hakkimizda;
      break;
    case 'popup4':
      content = gizlilik;
      break;
    default:
      content = '';
  }

  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popup}>
        <button className={styles.closeButton} onClick={hidePopup}>X</button>
        <div className={styles.popupContent} dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};

export default Footer;
