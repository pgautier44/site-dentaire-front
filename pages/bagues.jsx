import React from "react";
import Seo from "../src/components/Seo/Seo";
import Button from "../src/components/Button/Button";
import styles from "../styles/Fiches.module.css";
import {
  Calendar,
  Info,
  FileText,
  Camera,
  Clipboard,
  Smile,
  HelpCircle
} from "lucide-react";

const AppareilsMultiAttaches = () => {
  return (
    <div className={styles.pcContainer}>
      <Seo
        title="Appareils multi‑attaches – Cabinet Dr Capucine Lucas"
        description="Tout savoir sur les appareils multi‑attaches (bagues) au Cabinet d'Orthodontie Dr Capucine Lucas à Pacé : pose, adaptation, entretien, durée du traitement et conseils pratiques pour enfants et adultes."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "name": "Appareils multi‑attaches – Cabinet Dr Capucine Lucas",
          "description": "Guide complet sur les appareils multi‑attaches : pose, adaptation, entretien et suivi pour enfants et adultes.",
          "url": "https://dr-capucine-lucas.fr/appareils-multi-attaches",
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
        <h1>Appareils multi‑attaches (“bagues”)</h1>
        <p>Tout ce qu’il faut savoir sur la pose, l’adaptation et l’entretien de votre appareil orthodontique.</p>
      </header>

      <section className={styles.pcSection}>
        <Info className={styles.pcIcon} />
        <h2>Qu’est-ce que c’est ?</h2>
        <p>
          Un appareil multi‑attaches est un dispositif fixe utilisé pour déplacer les dents de manière précise. Il se compose de bagues ou brackets collés sur les dents, reliés par un fil métallique.
        </p>
      </section>

      <section className={styles.pcSection}>
        <Calendar className={styles.pcIcon} />
        <h2>La pose de l’appareil</h2>
        <ul className={styles.pcList}>
          <li>Nettoyage et préparation des dents</li>
          <li>Collage des brackets ou bagues</li>
          <li>Insertion et fixation du fil métallique</li>
          <li>Pose d’élastiques si nécessaire</li>
        </ul>
        <p className={styles.pcNote}>La séance dure généralement 60 à 90 minutes.</p>
      </section>

      <section className={styles.pcSection}>
        <Smile className={styles.pcIcon} />
        <h2>Adaptation et inconfort</h2>
        <ul className={styles.pcList}>
          <li>Sensibilité dentaire les premiers jours</li>
          <li>Irritation de la langue et des joues</li>
          <li>Légers changements dans la mastication ou l’élocution</li>
        </ul>
      </section>

      <section className={styles.pcSection}>
        <Camera className={styles.pcIcon} />
        <h2>Hygiène et précautions</h2>
        <ul className={styles.pcList}>
          <li>Brossage soigneux après chaque repas</li>
          <li>Utilisation de brossettes interdentaires ou fil dentaire</li>
          <li>Éviter aliments durs ou collants (chewing-gum, caramels…)</li>
          <li>Bains de bouche sans alcool si conseillé</li>
        </ul>
      </section>

      <section className={styles.pcSection}>
        <FileText className={styles.pcIcon} />
        <h2>En cas de problème</h2>
        <ul className={styles.pcList}>
          <li>Bague décollée : conserver et contacter l’orthodontiste</li>
          <li>Fil gênant : appliquer de la cire orthodontique</li>
          <li>Douleurs : antalgiques simples (paracétamol)</li>
          <li>Blessures : gels cicatrisants ou bains de bouche adaptés</li>
        </ul>
      </section>

      <section className={styles.pcSection}>
        <Clipboard className={styles.pcIcon} />
        <h2>Durée du traitement</h2>
        <p>En moyenne, un traitement multi‑attaches dure 18 à 36 mois selon la complexité.</p>
        <p className={styles.pcNote}>Une contention est souvent mise en place après le retrait des bagues pour stabiliser les résultats.</p>
      </section>

      <section className={styles.pcSection}>
        <HelpCircle className={styles.pcIcon} />
        <h2>Conseils pratiques</h2>
        <ul className={styles.pcList}>
          <li>Appliquer la cire orthodontique pour limiter les irritations</li>
          <li>Éviter les aliments pouvant décoller les bagues</li>
          <li>Maintenir une hygiène irréprochable</li>
          <li>Suivre les rendez-vous de contrôle et ajustements</li>
        </ul>
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

export default AppareilsMultiAttaches;
