import React, { useState, useEffect } from 'react';
import styles from '@/styles/ScrollToTop.module.css';

const ScrollToTop = () => {


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };


  return (
    <div className={styles.scrollToTop}>
      {(
        <button onClick={scrollToTop} className={styles.arrowButton}>
          ↑
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
