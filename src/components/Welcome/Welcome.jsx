import React from "react";
import "./Welcome.css";
import accueilImg from "../../assets/Cabinet_accueil.jpg";

function Welcome() {
  return (
    <section className="welcome">
      <div className="welcome-content full-width">
        <div className="welcome-text">
          <h2>Bienvenue sur le site du Docteur LUCAS</h2>
          <p>
            Toute l’équipe du cabinet d’orthodontie de Pacé est à votre disposition pour vous accompagner et vous conseiller.<br /><br />
            Spécialiste qualifiée en orthopédie dento-faciale, ancienne chef de clinique au CHU de Rennes, le Dr Lucas prend en charge l’orthodontie de l’enfant, de l’adolescent et de l’adulte. Elle réalise également les traitements complexes nécessitant une chirurgie orthognathique et participe activement à la formation des internes en orthodontie.<br /><br />
            Notre approche se veut attentive, pédagogique et centrée sur l’accompagnement des familles. Lors de votre première visite, nous recueillerons les informations nécessaires pour établir un diagnostic précis et vous proposer un plan de traitement adapté.
          </p>
          <a
            className="urgent-link" onClick={() => window.open("/contact", "_self")}role="button">Nous contacter</a>
        </div>
        <div className="welcome-image">
          <img src={accueilImg} alt="Accueil du cabinet" />
        </div>
      </div>
    </section>
  );
}

export default Welcome;
