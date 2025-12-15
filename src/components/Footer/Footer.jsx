import React from "react";
import Link from "next/link";
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer-container']}>

        {/* Horaires */}
        <div className={styles['footer-column']}>
          <h2>Horaires</h2>

          <div className={styles['horaires-section']}>
            <ul>
              <li>lundi 09h – 13h30 / 14h30 – 18h</li>
              <li>mardi 09h – 13h30 / 14h30 – 18h</li>
              <li>mercredi 09h – 13h30 / 14h30 – 18h30</li>
              <li>jeudi Fermé</li>
              <li>vendredi 09h – 13h30 / 14h30 – 18h30</li>
            </ul>
          </div>
        </div>

        {/* Coordonnées */}
        <div className={styles['footer-column']}>
          <h2>Coordonnées</h2>
          <p>Cabinet d'orthodontie du Dr Capucine LUCAS</p>
          <p>Adresse. 4, boulevard du Trieux - 35740 PACE</p>
        </div>
      </div>

      <div className={styles['footer-bottom']}>
        <p>
          © {new Date().getFullYear()} Docteure Capucine LUCAS – Orthodontiste &nbsp;|&nbsp;
          <Link href="/legal-notice">Mentions légales</Link>
        </p>
      </div>

    </footer>
  );
}

export default Footer;
