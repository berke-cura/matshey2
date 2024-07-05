import React from 'react';
import styles from "@/styles/Navbar.module.css";
import Link from 'next/link';
import Image from 'next/image';



const Navbar = () => {
  return (
    <nav className={styles.nav}>
        <div className={styles.logoDiv}>
        <Image className={styles.logo} src="/logo.png" alt="Mathsey Logo" width={200} height={100} />
        </div>
      <ul className={styles.buttonContainer}>
        <Link href="/">ANASAYFA</Link>
        <Link href="/">İÇERİK</Link>
        <Link href="/">ÜRÜNLER</Link>
        <Link href="/bayilik">BAYİLİK</Link>
        <Link href="/okullara-ozel">OKULLARA ÖZEL</Link>
        <Link className={styles.satin} href="/satn-al">SATIN AL</Link>
        <Link
            href="https://lms.mathsey.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.sistem}
          >SİSTEME GİRİŞ</Link>
                </ul>

      <div className={styles.socials}>
        <Link href="https://www.instagram.com/mathseycom/" target="_blank">
          <Image src="/instagram.png" alt="Instagram" width={30} height={30} />
        </Link>
        <Link href="https://www.youtube.com/channel/UCl1Oerk2QXHb0y91W10aIBQ" target="_blank">
          <Image src="/youtube.png" alt="YouTube" width={45} height={30} />
        </Link>
        <Link href="https://www.linkedin.com/company/mathsey-matematik-robotu/" target="_blank">
          <Image src="/linkedin.png" alt="LinkedIn" width={30} height={30} />
        </Link>
      </div>

    </nav>
  );
};

export default Navbar;
