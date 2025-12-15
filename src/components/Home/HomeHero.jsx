import React from "react";
import Button from "../Button/Button";
import styles from "./HomeHero.module.css";

function HomeHero() {
  return (
    <section className={styles.homeHero}>
      <div className={styles.homeHeroBackground}></div>

      <div className={styles.homeHeroOverlay}>
        <h1 className={styles.homeHeroTitle}>L'orée du sourire</h1>
        <p className={styles.homeHeroSubtitle}>
          "Un accompagnement bienveillant et expert pour des traitements orthodontiques efficaces, esthétiques et durables, adaptés à chaque étape de la vie."
        </p>

        <Button
            label="Rendez-vous"
            size="large"
            variant="primary"
            onClick={() =>
              window.open("https://app.my-orthoadvance.com/#/cabinets/lucas", "_blank")
            }
          />
      </div>
    </section>
  );
}

export default HomeHero;
