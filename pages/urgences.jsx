// pages/urgences.jsx
import React from "react";
import Seo from "../src/components/Seo/Seo";
import Button from "../src/components/Button/Button";
import styles from "../styles/Urgences.module.css";

export default function Urgences() {
  return (
    <div className={styles.page}>
      <Seo
        title="Urgences dentaires et orthodontiques – Cabinet Dr Capucine Lucas"
        description="Informations et conseils en cas d’urgence dentaire ou orthodontique : service de garde, chocs, appareils cassés, fils irritants et conduite à tenir au cabinet du Dr Capucine Lucas à Pacé."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "name": "Urgences dentaires et orthodontiques – Cabinet Dr Capucine Lucas",
          "description": "Guide pratique pour gérer les urgences dentaires et orthodontiques.",
          "url": "https://dr-capucine-lucas.vercel.app/urgences",
          "mainEntity": {
            "@type": "Dentist",
            "name": "Dr Capucine Lucas",
            "medicalSpecialty": "Orthodontics"
          }
        }}
      />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBackground} />
        <div className={styles.heroOverlay}>
          <h1 className={styles.heroTitle}>Urgences dentaires & orthodontiques</h1>
          <p className={styles.heroSubtitle}>
            En cas de douleur, de choc ou de problème avec votre appareil, voici comment réagir efficacement.
          </p>
        </div>
      </section>

      {/* URGENCES ORTHODONTIQUES */}
      <section className={styles.sectionAlt}>
        <h2>Urgences orthodontiques</h2>
        <div className={styles.steps}>
          <div className={styles.step}>
            <div className={styles.stepNumber}>1</div>
            <h3>Identifier le problème</h3>
            <p>Fil délogé, bague décollée ou appareil douloureux.</p>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>2</div>
            <h3>Soulager</h3>
            <p>Utilisez de la cire orthodontique ou un rinçage doux.</p>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>3</div>
            <h3>Nous contacter</h3>
            <p>Appelez le cabinet afin d’éviter toute aggravation.</p>
          </div>
        </div>
      </section>

      {/* SERVICE DE GARDE */}
      <section className={styles.card}>
        <h2>Service de garde</h2>
        <p>
          Les dimanches et jours fériés, un service de garde est assuré par le Conseil de l’Ordre Départemental des
          Chirurgiens-Dentistes.
          <br />
          Pour connaître le praticien de garde, consultez votre quotidien régional ou contactez le commissariat ou la
          gendarmerie de votre ville.
        </p>
      </section>

      {/* CHOC / AVULSION */}
      <section className={styles.card}>
        <h2>En cas de choc</h2>
        <p>
          <strong>Dent déplacée :</strong> essayez, avec des mains propres, de repositionner délicatement la dent dans
          son logement et contactez le cabinet rapidement.
        </p>
        <p>
          <strong>Dent expulsée (avulsion) :</strong> récupérez la dent sans la rincer et conservez-la dans du sérum
          physiologique, du lait, un linge humide ou votre salive. Contactez-nous en urgence ou adressez-vous au
          service de garde ou à l’hôpital le plus proche.
        </p>
      </section>

      {/* CONSEILS */}
      <section className={styles.card}>
        <h2>Conseils pratiques</h2>
        <ul>
          <li>Ne tentez pas de réparer l’appareil vous-même.</li>
          <li>Gardez toujours de la cire orthodontique à portée de main.</li>
          <li>Notez la nature et l’heure du problème.</li>
        </ul>

        <Button
          label="Contacter le cabinet"
          size="small"
          variant="tertiary"
          onClick={() => (window.location.href = "/contact")}
        />
      </section>
    </div>
  );
}
