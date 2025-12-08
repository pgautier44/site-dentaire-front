import React from "react";
import "./Team.css";
import CapucinePhoto from "../../assets/Capucine.png";
import PlaceholderPhoto from "../../assets/placeholder.jpg";

function Team() {
  return (
    <section className="team">
      <h2>Notre équipe</h2>

      <div className="team-list">
        {/* Première fiche */}
        <div className="team-member">
          <img
            src={CapucinePhoto}
            alt="Dr LUCAS Capucine"
            className="team-photo"
          />
          <h3>Dr LUCAS Capucine</h3>
          <p className="team-role">
            Chirurgien-Dentiste Spécialiste Qualifiée en Orthopédie Dento-Faciale
          </p>
        </div>

        {/* Nouvelle fiche avec silhouette */}
        <div className="team-member">
          <img
            src={PlaceholderPhoto}
            alt="Assistante dentaire"
            className="team-photo"
          />
          <h3>Assistante dentaire</h3>
          <p className="team-role">Une assistante dentaire est actuellement en cours de recrutement</p>
        </div>
      </div>
    </section>
  );
}

export default Team;
