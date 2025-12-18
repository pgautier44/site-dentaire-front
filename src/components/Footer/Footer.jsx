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

          {/* Horaires */}
          <div className={styles['horaires-section']}>
            <ul className={styles.horairesList}>
              <li><span className={styles.day}>Lundi </span><span className={styles.hours}>09h – 13h30 / 14h30 – 18h</span></li>
              <li><span className={styles.day}>Mardi </span><span className={styles.hours}>09h – 13h30 / 14h30 – 18h</span></li>
              <li><span className={styles.day}>Mercredi </span><span className={styles.hours}>09h – 13h30 / 14h30 – 18h30</span></li>
              <li><span className={styles.day}>Jeudi </span><span className={styles.hours}>Fermé</span></li>
              <li><span className={styles.day}>Vendredi </span><span className={styles.hours}>09h – 13h30 / 14h30 – 18h30</span></li>
            </ul>
          </div>
        </div>

        {/* Coordonnées */}
        <div className={styles['footer-column']}>
          <h2>Coordonnées</h2>
          <p>Cabinet d'orthodontie du Dr Capucine LUCAS</p>
          <p>Adresse. 4, boulevard du Trieux - 35740 PACE</p>
          <p>Téléphone. 02 59 16 55 74</p>
        </div>
      </div>

      <div className={styles['footer-bottom']}>
        <p>
          © {new Date().getFullYear()} Docteur Capucine LUCAS – Orthodontiste &nbsp;|&nbsp;
          <Link href="/legal-notice">Mentions légales</Link>
        </p>
      </div>

    </footer>
  );
}

export default Footer;
