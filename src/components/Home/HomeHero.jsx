import React from "react";
import "./HomeHero.css";

function HomeHero() {
  const handleRedirect = () => {
  window.open("https://app.my-orthoadvance.com/#/cabinets/lucas", "_blank");
};

  return (
    <section className="home-hero">
      <div className="home-hero-background"></div>

      <div className="home-hero-overlay">
        <h1 className="home-hero-title">L’élégance d’un sourire harmonieux</h1>
        <p className="home-hero-subtitle">
          Soins orthodontiques personnalisés dans un environnement moderne et accueillant.
        </p>

        <button
          className="home-hero-button"
          onClick={handleRedirect}
        >
          Prendre rendez-vous
        </button>
      </div>
    </section>
  );
}

export default HomeHero;
