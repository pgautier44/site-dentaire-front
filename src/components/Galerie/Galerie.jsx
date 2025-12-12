import React from "react";
import "./Galerie.css";

import img1 from "../../assets/Galerie/Accueil.jpg";
import img2 from "../../assets/Galerie/Parcours_Patient.png";
import img3 from "../../assets/Galerie/Salle_Attente.jpg";
import img4 from "../../assets/Galerie/Salle_De_Soins.jpg";
import img5 from "../../assets/Galerie/Salle_Radio.jpg";
import img6 from "../../assets/Galerie/Sterilisation.jpg";
import img7 from "../../assets/Capucine_Travail.jpg";
import img8 from "../../assets/Cabinet_Accueil.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

function Galerie() {
  return (
    <section className="galerie">
      <h2 className="galerie-title">Galerie du cabinet</h2>
      <div className="galerie-grid">
        {images.map((img, index) => (
          <div className={`galerie-item item-${index}`} key={index}>
            <img src={img} alt={`Galerie ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Galerie;
