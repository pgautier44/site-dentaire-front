import React from "react";
import RdvButton from "../../components/RdvButton/RdvButton";
import "./HomeHero.css";

function HomeHero() {
  return (
    <section className="home-hero">
      <div className="home-hero-background"></div>

      <div className="home-hero-overlay">
        <h1 className="home-hero-title">L'orée du sourire</h1>
        <p className="home-hero-subtitle">
          "Un accompagnement bienveillant et expert pour des traitements orthodontiques efficaces, esthétiques et durables, adaptés à chaque étape de la vie."
        </p>

        <RdvButton />
      </div>
    </section>
  );
}

export default HomeHero;
