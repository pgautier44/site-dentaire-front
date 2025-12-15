import React from "react";
import styles from "./Galerie.module.css";

const images = [
  "/images/galerie/Accueil.jpg",
  "/images/galerie/Parcours_Patient.png",
  "/images/galerie/Salle_Attente.jpg",
  "/images/galerie/Salle_De_Soins.jpg",
  "/images/galerie/Salle_Radio.jpg",
  "/images/galerie/Sterilisation.jpg",
  "/images/Capucine_Travail.jpg",
];

function Galerie() {
  return (
    <section className={styles.galerie}>
      <h2 className={styles.galerieTitle}>Galerie du cabinet</h2>

      <div className={styles.galerieGrid}>
        {images.map((src, index) => (
          <div
            key={index}
            className={`${styles.galerieItem} ${styles[`item${index}`] || ""}`}
          >
            <img
              src={src}
              alt={`Galerie ${index + 1}`}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Galerie;
