import React from "react";
import styles from "./Welcome.module.css";
import Button from "../../components/Button/Button";

function Welcome() {
  return (
    <section className={styles.welcome}>
      <div className={`${styles.welcomeContent} ${styles.fullWidth}`}>
        <div className={styles.welcomeText}>
          <h2 className={styles.welcomeTitle}>
            Bienvenue sur le site du Docteur LUCAS
          </h2>

          <p>
            Toute l’équipe du cabinet d’orthodontie du Dr Capucine Lucas,
            spécialiste qualifiée en Orthopédie Dento-Faciale, est à votre écoute
            pour vous accompagner avec bienveillance tout au long de votre
            parcours de soins.
            <br /><br />
            Nous prenons en charge aussi bien les enfants que les adolescents et
            les adultes, en proposant une large gamme d’appareils amovibles,
            fixes (technique vestibulaire classique ou linguale) ainsi que des
            gouttières invisibles adaptées à chaque profil.
            <br /><br />
            Lors de votre première visite, nous recueillerons les informations
            nécessaires à un diagnostic précis afin d’élaborer un plan de
            traitement personnalisé.
            <br /><br />
            Au cabinet, nous accordons une grande importance à la relation
            patient-parent-praticien.
          </p>

          <Button
            label="Nous contacter"
            onClick={() => window.location.href = "/contact"}
            size="large"
            variant="primary"
          />
        </div>

        <div className={styles.welcomeImage}>
          <img
            src="/images/Cabinet_accueil.jpg"
            alt="Accueil du cabinet"
          />
        </div>
      </div>
    </section>
  );
}

export default Welcome;
