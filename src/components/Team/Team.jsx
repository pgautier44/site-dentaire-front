import React, { useState } from "react";
import styles from "./Team.module.css";

function Team() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className={styles.team}>
      <h2>Notre équipe</h2>

      <div className={styles.teamList}>
        {/* Dr Capucine Lucas */}
        <div className={styles.teamMember}>
          <img
            src="/images/Capucine.png"
            alt="Dr Capucine LUCAS"
            className={styles.teamPhoto}
          />

          <h3>Dr Capucine LUCAS</h3>
          <p className={styles.teamRole}>
            Chirurgien-Dentiste – Spécialiste qualifiée en Orthopédie Dento-Faciale
          </p>

          {showMore && (
            <ul className={styles.teamHighlights}>
              <li>Ancienne chef de clinique des hôpitaux de Rennes</li>
              <li>Internat d’orthopédie dento-faciale de Montpellier</li>
              <br />
              <li>Formation aux aligneurs Spark</li>
              <li>Formation au lingual 2D®</li>
              <li>Formation aux aligneurs Spark®</li>
              <li>Formation Tweed course – Tucson USA</li>
              <li>Certification Liberty Lingual®</li>
              <li>DU d’Hypnose</li>
              <br />
              <li>Victoire au grand prix de l’Orthodontie</li>
              <li>Participation au collège Européen d’Orthodontie</li>
              <li>Membre du club « Toujours tout droit »</li>
            </ul>
          )}

          <button
            className={styles.teamMoreBtn}
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Voir moins" : "En savoir plus"}
          </button>
        </div>

        {/* Assistante */}
        <div className={styles.teamMember}>
          <img
            src="/images/placeholder.jpg"
            alt="Assistante dentaire"
            className={styles.teamPhoto}
          />
          <h3>Assistante dentaire</h3>
          <p className={styles.teamRole}>
            Une assistante dentaire est actuellement en cours de recrutement
          </p>
        </div>
      </div>
    </section>
  );
}

export default Team;
