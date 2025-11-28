import React from "react";
import "./Welcome.css";

function Welcome() {
  return (
    <section className="welcome">
      <div className="welcome-content">
        <h2>Bienvenue au cabinet du Dr LUCAS</h2>
        <p>
          Nous sommes heureux de vous accueillir dans notre cabinet.  
          Vous y trouverez toutes les informations sur notre cabinet, nos services,  
          ainsi que des conseils pour prendre soin de votre sourire.
        </p>
      </div>
    </section>
  );
}

export default Welcome;
