import React from "react";
import "./Welcome.css";
import accueilImg from "../../assets/Cabinet_accueil.jpg";
import ContactButton from "../../components/ContactButton/ContactButton";

function Welcome() {
  return (
    <section className="welcome">
      <div className="welcome-content full-width">
        <div className="welcome-text">
          <h2>Bienvenue sur le site du Docteur LUCAS</h2>
          <p>
            Toute l’équipe du cabinet d’orthodontie du Dr Capucine Lucas, spécialiste qualifiée en Orthopédie Dento-Faciale, est à votre écoute pour vous accompagner avec bienveillance tout au long de votre parcours de soins.
            <br /><br />
            Nous prenons en charge aussi bien les enfants que les adolescents et les adultes, en proposant une large gamme d’appareils amovibles, fixes (technique vestibulaire classique ou linguale) ainsi que des gouttières invisibles adaptées à chaque profil.
            <br /><br />
            Lors de votre première visite, nous recueillerons les informations nécessaires à un diagnostic précis afin d’élaborer un plan de traitement personnalisé, qui tiendra compte de vos attentes et de la spécificité de votre cas.
            <br /><br />
            Au cabinet, nous accordons une grande importance à la relation patient-parent-praticien, garantissant un suivi attentif et une prise en charge respectueuse, pour un sourire harmonieux et fonctionnel à chaque étape de la vie.
          </p>
          <ContactButton />
        </div>
        <div className="welcome-image">
          <img src={accueilImg} alt="Accueil du cabinet" />
        </div>
      </div>
    </section>
  );
}

export default Welcome;
