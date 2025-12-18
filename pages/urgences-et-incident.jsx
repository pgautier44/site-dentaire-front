import React from "react";
import Seo from "../src/components/Seo/Seo";
import Button from "../src/components/Button/Button";
import styles from "../styles/Fiches.module.css"; 
import {
  Info,
  Clipboard,
  AlertTriangle,
  Scissors,
  CornerUpLeft
} from "lucide-react";

const UrgencesEtIncident = () => {
  return (
    <div className={styles.pcContainer}>
      <Seo
        title="Urgences et incidents orthodontiques – Cabinet Dr Capucine Lucas"
        description="Guide pour gérer les urgences et incidents liés aux traitements orthodontiques au Cabinet Dr Capucine Lucas à Pacé : appareils cassés, fils irritants, douleurs et conseils pratiques pour enfants et adultes."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "name": "Urgences et incidents orthodontiques – Cabinet Dr Capucine Lucas",
          "description": "Informations pratiques sur les incidents et urgences orthodontiques : appareils cassés, fils irritants, douleurs et conseils pour enfants et adultes.",
          "url": "https://dr-capucine-lucas.vercel.app/urgence-et-incident",
          "publisher": {
            "@type": "Dentist",
            "name": "Dr Capucine Lucas",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "4 Boulevard du Trieux",
              "addressLocality": "Pacé",
              "postalCode": "35740",
              "addressCountry": "FR"
            },
            "telephone": "02 59 16 55 74",
            "email": "drlucas@orthodontiepace.com"
          }
        }}
      />

      <header className={styles.pcHero}>
        <h1>Incidents & urgences orthodontiques</h1>
        <p>
          Il y a peu de véritables urgences en orthodontie. Cependant, certains événements ou inconforts
          peuvent nécessiter une attention rapide — gêne, appareil endommagé, choc, etc. Voici les principaux cas rencontrés et ce qu'il convient de faire.
        </p>
      </header>

      <section className={styles.pcSection}>
        <Info className={styles.pcIcon} />
        <h2>Bagues / brackets décollés ou déplacés</h2>
        <p>
          Si une bague ou un bracket se décolle ou bouge, contactez immédiatement votre praticien par téléphone.<br />
          Ne tentez pas de recoller ou de réajuster vous‑même.<br />
          En attendant, évitez toute mastication sur la dent concernée pour ne pas aggraver le déplacement.
        </p>
      </section>

      <section className={styles.pcSection}>
        <Clipboard className={styles.pcIcon} />
        <h2>Fil irritant ou saillant — gêne des muqueuses</h2>
        <p>
          Si un fil sort et irrite la joue, la langue ou la gencive, utilisez de la cire orthodontique pour recouvrir la partie irritante.<br />
          Si la gêne persiste, contactez votre cabinet pour un réglage.<br />
          En cas d’irritation des muqueuses (langue, joues, lèvres), des bains de bouche ou des gels adaptés peuvent aider.
        </p>
      </section>

      <section className={styles.pcSection}>
        <AlertTriangle className={styles.pcIcon} />
        <h2>Douleurs après activation / réglage de l’appareil</h2>
        <p>
          Une sensation de tension ou d’inconfort est normale après la pose ou le réglage d’un appareil.<br />
          Pour soulager, privilégiez des aliments mous, des bains de bouche tièdes, et, si besoin, un antalgique courant.<br />
          Si la douleur est intense ou persistante, contactez votre orthodontiste.
        </p>
      </section>

      <section className={styles.pcSection}>
        <Scissors className={styles.pcIcon} />
        <h2>Appareil amovible perdu ou cassé</h2>
        <p>
          Si votre appareil amovible est perdu ou cassé, ne le portez pas dans un état endommagé.<br />
          Prenez rendez-vous au plus vite pour en faire refaire un.<br />
          Si l’incident a lieu en milieu scolaire, pensez à déclarer l’accident à l’assurance de l’établissement.
        </p>
      </section>

      <section className={styles.pcSection}>
        <CornerUpLeft className={styles.pcIcon} />
        <h2>Choc, chute, accident — impact sur l’appareil</h2>
        <p>
          Après un choc (chute, accident, impact sur l’appareil), avertissez immédiatement votre orthodontiste, même si tout semble intact.<br />
          Il est important de vérifier que l’appareil n’est pas endommagé et que les dents n’ont pas bougé.<br />
          Mieux vaut anticiper pour éviter un mauvais repositionnement.
        </p>
      </section>

      <div className={styles.pcCta}>
        <Button
          label="Prendre rendez-vous"
          onClick={() =>
            window.open("https://app.my-orthoadvance.com/#/cabinets/lucas", "_blank")
          }
          size="large"
          variant="primary"
        />
      </div>
    </div>
  );
};

export default UrgencesEtIncident;
