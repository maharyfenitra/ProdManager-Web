// components/Navbar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import styles from './navbar.module.css';

export function Navbar({links} : { links: LinkType[]}) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleResize = () => {
      // Ferme le menu si la largeur de l'écran dépasse 768px
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    // Vérifie aussi au chargement si on est en desktop
    if (window.innerWidth > 768) {
      setIsMenuOpen(false);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      setIsAnimating(true);
      // Force le recalcul des styles pour que l'animation se déclenche
      setTimeout(() => {
        if (menuRef.current) {
          menuRef.current.style.maxHeight = `${menuRef.current.scrollHeight}px`;
        }
      }, 10);
    } else {
      if (menuRef.current) {
        menuRef.current.style.maxHeight = '0';
        // Attend la fin de l'animation avant de désactiver le flag
        setTimeout(() => setIsAnimating(false), 300);
      }
    }
  }, [isMenuOpen]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <span className={styles.logo}>ProManager</span>
        
        {/* Menu Desktop */}
        <ul className={styles.desktopMenu}>
          {links.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className={pathname === link.href ? styles.activeLink : styles.navLink}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Bouton Hamburger */}
        <button 
          className={styles.menuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isMenuOpen}
        >
          <div className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerOpen : ''}`}>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
          </div>
        </button>

        {/* Menu Mobile */}
        <ul 
          ref={menuRef}
          className={`${styles.mobileMenu} ${isMenuOpen || isAnimating ? styles.mobileMenuVisible : ''}`}
          aria-hidden={!isMenuOpen}
        >
          {links.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className={pathname === link.href ? styles.activeLink : styles.navLink}
                onClick={handleLinkClick}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export type LinkType = {
    href: string;
    label: string;
  };