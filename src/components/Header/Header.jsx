import React, { useState } from "react";
import Link from "next/link";
import Button from "../Button/Button";
import styles from "./Header.module.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>

      <div className={styles["top-bar"]}>
        <p className={styles["contact-info"]}>
          Docteure Capucine LUCAS | Orthodontiste - 4, boulevard du Trieux - 35740 PACE
        </p>

        <div className={styles["top-buttons"]}>
          <Button
            label="Urgences"
            size="small"
            variant="primary"
            onClick={() => window.location.href = "/urgences"}
          />
          <Button
            label="Rendez-vous"
            size="small"
            variant="primary"
            onClick={() =>
              window.open("https://app.my-orthoadvance.com/#/cabinets/lucas", "_blank")
            }
          />
        </div>
      </div>

      <div className={styles["main-header"]}>
        <Link href="/" className={styles.branding}>
          <img
            src="/images/Logo.png"
            alt="Icône dent"
            className={styles["tooth-icon"]}
          />
          <div className={styles["brand-text"]}>
            <h1 className={styles["brand-title"]}>LUCAS Capucine</h1>
            <p className={styles["brand-subtitle"]}>Cabinet d'Orthodontie</p>
          </div>
        </Link>

        <nav className={styles["desktop-menu"]}>
          <ul>
            <li><Link href="/">Accueil</Link></li>
            <li><Link href="/conseils">Fiches conseils</Link></li>
            <li><Link href="/team">Equipe & cabinet</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>

        <div
          className={styles.burger}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        {menuOpen && (
          <nav className={styles["mobile-menu"]}>
            <ul>
              <li><Link href="/" onClick={() => setMenuOpen(false)}>Accueil</Link></li>
              <li><Link href="/conseils" onClick={() => setMenuOpen(false)}>Fiches conseil</Link></li>
              <li><Link href="/team" onClick={() => setMenuOpen(false)}>Equipe & cabinet</Link></li>
              <li><Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
              <li><Link href="/urgences" onClick={() => setMenuOpen(false)}>Urgences</Link></li>
              <li>
                <Button
                  label="Rendez-vous"
                  size="small"
                  variant="primary"
                  onClick={() => {
                    setMenuOpen(false);
                    window.open(
                      "https://app.my-orthoadvance.com/#/cabinets/lucas",
                      "_blank"
                    );
                  }}
                />

              </li>
            </ul>
          </nav>
        )}
      </div>

      <div className={styles["info-banner"]}>
        Site et cabinet en construction, nous serons heureux de vous accueillir à partir du{" "}
        <strong>2 février 2026 !</strong>
        <br />
        Vous pouvez d&apos;ores et déjà prendre rendez-vous
      </div>

    </header>
  );
}

export default Header;
