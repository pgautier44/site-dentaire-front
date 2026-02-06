import React from "react";
import styles from "./Galerie.module.css";

const images = [
  "/images/Galerie/Parcours_Patient.png",
  "/images/Galerie/Salle_Attente.jpeg",
  "/images/Galerie/Toilettes.jpeg",
  "/images/Galerie/Accueil.jpeg",
  "/images/Galerie/Salle_De_Soins.jpg",
  "/images/Galerie/Salle_Radio.jpg",
  "/images/Galerie/Sterilisation.jpg",
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
