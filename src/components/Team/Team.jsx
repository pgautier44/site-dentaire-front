import React, { useState } from "react";
import "./Team.css";
import CapucinePhoto from "../../assets/Capucine.png";
import PlaceholderPhoto from "../../assets/placeholder.jpg";

function Team() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="team">
      <h2>Notre équipe</h2>

      <div className="team-list">
        {/* Dr Capucine Lucas */}
        <div className="team-member">
          <img
            src={CapucinePhoto}
            alt="Dr Capucine LUCAS"
            className="team-photo"
          />

          <h3>Dr Capucine LUCAS</h3>
          <p className="team-role">
            Chirurgien-Dentiste – Spécialiste en Orthopédie Dento-Faciale
          </p>

          {showMore && (
            <ul className="team-highlights">
              <li>Spécialiste qualifiée en orthopédie dento-faciale</li>
              <li>Ancienne chef de clinique au CHU de Rennes</li>
              <li>Orthodontie de l’enfant, de l’adolescent et de l’adulte</li>
              <li>Traitements complexes avec chirurgie orthognathique</li>
              <li>Formation des internes en orthodontie</li>
              <li>Approche attentive et accompagnement des familles</li>
            </ul>
          )}

          <button
            className="team-more-btn"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Voir moins" : "En savoir plus"}
          </button>
        </div>

        {/* Assistante */}
        <div className="team-member">
          <img
            src={PlaceholderPhoto}
            alt="Assistante dentaire"
            className="team-photo"
          />
          <h3>Assistante dentaire</h3>
          <p className="team-role">
            Une assistante dentaire est actuellement en cours de recrutement
          </p>
        </div>
      </div>
    </section>
  );
}

export default Team;
