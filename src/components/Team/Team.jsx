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
              <li>Ancienne chef de clinique des hôpitaux de Rennes</li>
              <li>Internat d’ orthopédie dento-faciale de Montpellier</li>
              <br></br>
              <li>Formation aux aligneurs Spark</li>
              <li>Formation au lingual 2D®</li>
              <li>Formation aux aligneurs Spark®</li>
              <li>Formation Tweed course – Tucson USA</li>
              <li>Certification Liberty Lingual®</li>
              <li>DU d’Hypnose</li>
              <br></br>
              <li>Victoire au grand prix de l’Orthodontie</li>
              <li>Participation au collège Européen d’Orthodontie,</li>
              <li>Membre du club « Toujours tout droit »</li>
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
