import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from "@/styles/Navbar.module.css";
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const handleRouteChange = () => {
      setActiveSection('');
      setIsMenuOpen(false); // Close menu on route change
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    if (router.pathname === '/') {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      };

      const handleIntersect = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (id === 'section1' || id === 'section2') {
              setActiveSection('section1'); // Set to section1 to represent "ANASAYFA"
            } else {
              setActiveSection(id);
            }
          }
        });
      };

      const observer = new IntersectionObserver(handleIntersect, options);

      const sections = document.querySelectorAll('section');
      sections.forEach((section) => observer.observe(section));

      return () => {
        sections.forEach((section) => observer.unobserve(section));
      };
    } else {
      setActiveSection('');
    }
  }, [router.pathname]);

  const smoothScrollTo = (targetPosition) => {
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 500; // Adjust this value for the speed of the scroll
    let start = null;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const progressPercentage = Math.min(progress / duration, 1);
      window.scrollTo(0, startPosition + distance * progressPercentage);
      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };

  const handleScroll = (sectionId) => {
    if (typeof window !== 'undefined') {
      const section = document.getElementById(sectionId);
      const navbarHeight = 50; // Adjust this value if your navbar height is different
      if (section) {
        const targetPosition = section.getBoundingClientRect().top + window.scrollY - navbarHeight;
        smoothScrollTo(targetPosition);
      }
    }
  };

  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    setIsMenuOpen(false); // Close menu on link click
    if (router.pathname === '/') {
      if (sectionId) {
        handleScroll(sectionId);
      } else {
        smoothScrollTo(0); // Smoothly scroll to the top of the page
      }
    } else {
      router.push(`/#${sectionId ? sectionId : ''}`).then(() => {
        if (sectionId) {
          handleScroll(sectionId);
        } else {
          smoothScrollTo(0);
        }
      });
    }
  };

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsMenuOpen(false);
        setIsClosing(false);
      }, 300); // Duration of the slideOut animation
    } else {
      setIsMenuOpen(true);
    }
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.logoDiv}>
        <Image className={styles.logo} src="/logo.png" alt="Mathsey Logo" width={200} height={100} />
      </div>
      <div className={styles.menuIcon} onClick={toggleMenu}>
        {isMenuOpen ? '✖' : '☰'}
      </div>
      <ul className={`${styles.buttonContainer} ${isMenuOpen ? styles.showMenu : ''} ${isClosing ? styles.hideMenu : ''}`}>
        <a
          href="#"
          onClick={(e) => handleLinkClick(e)}
          className={(activeSection === 'section1' || activeSection === '' && router.pathname === '/') ? styles.active : ''}
        >
          ANASAYFA
        </a>
        <a
          href="#"
          onClick={(e) => handleLinkClick(e, 'section3')}
          className={activeSection === 'section3' ? styles.active : ''}
        > İÇERİK</a>
        <a
          href="#"
          onClick={(e) => handleLinkClick(e, 'section4')}
          className={activeSection === 'section4' ? styles.active : ''}
        > ÜRÜNLER</a>
        <Link href="/bayilik" className={router.pathname === '/bayilik' ? styles.active : ''}>BAYİLİK
        </Link>
        <Link href="/okullara-ozel" className={router.pathname === '/okullara-ozel' ? styles.active : ''}>OKULLARA ÖZEL
        </Link>
        <a
          href="#"
          onClick={(e) => handleLinkClick(e, 'contactForm')}
          className={activeSection === 'contactForm' ? styles.active : ''}
        > İLETİŞİM</a>
        <Link className={styles.satin} href="/satn-al">
          SATIN AL
        </Link>
        <Link
          href="https://lms.mathsey.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.sistem}
        >
          SİSTEME GİRİŞ
        </Link>
        <div className={styles.socialsMobile}>
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
      </ul>

      <div className={`${styles.socials} ${isMenuOpen ? styles.hideSocials : ''}`}>
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
