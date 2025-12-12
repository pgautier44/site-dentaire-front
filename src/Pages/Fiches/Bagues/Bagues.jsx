import React from "react";
import Seo from "../../../components/Seo/Seo";
import RdvButton from "../../../components/RdvButton/RdvButton";
import "../../Fiches/Fiches.css";
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
return ( <div className="pc-container">
   <Seo
  title="Appareils multi‑attaches – Cabinet Dr Capucine Lucas"
  description="Tout savoir sur les appareils multi‑attaches (bagues) au Cabinet d'Orthodontie Dr Capucine Lucas à Pacé : pose, adaptation, entretien, durée du traitement et conseils pratiques pour enfants et adultes."
  jsonLd={{
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Appareils multi‑attaches – Cabinet Dr Capucine Lucas",
    "description": "Guide complet sur les appareils multi‑attaches : pose, adaptation, entretien et suivi pour enfants et adultes.",
    "url": "https://dr-capucine-lucas.vercel.app/appareils-multi-attaches",
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
      "telephone": "02 XX XX XX XX",
      "email": "Drlucas@orthodontiepace.com"
    }
  }}
/>

```
  <header className="pc-hero">
    <h1>Appareils multi‑attaches (“bagues”)</h1>
    <p>Tout ce qu’il faut savoir sur la pose, l’adaptation et l’entretien de votre appareil orthodontique.</p>
  </header>

  <section className="pc-section">
    <Info className="pc-icon" />
    <h2>Qu’est-ce que c’est ?</h2>
    <p>
      Un appareil multi‑attaches est un dispositif fixe utilisé pour déplacer les dents de manière précise. Il se compose de bagues ou brackets collés sur les dents, reliés par un fil métallique.
    </p>
  </section>

  <section className="pc-section">
    <Calendar className="pc-icon" />
    <h2>La pose de l’appareil</h2>
    <ul className="pc-list">
      <li>Nettoyage et préparation des dents</li>
      <li>Collage des brackets ou bagues</li>
      <li>Insertion et fixation du fil métallique</li>
      <li>Pose d’élastiques si nécessaire</li>
    </ul>
    <p className="pc-note">La séance dure généralement 60 à 90 minutes.</p>
  </section>

  <section className="pc-section">
    <Smile className="pc-icon" />
    <h2>Adaptation et inconfort</h2>
    <ul className="pc-list">
      <li>Sensibilité dentaire les premiers jours</li>
      <li>Irritation de la langue et des joues</li>
      <li>Légers changements dans la mastication ou l’élocution</li>
    </ul>
  </section>

  <section className="pc-section">
    <Camera className="pc-icon" />
    <h2>Hygiène et précautions</h2>
    <ul className="pc-list">
      <li>Brossage soigneux après chaque repas</li>
      <li>Utilisation de brossettes interdentaires ou fil dentaire</li>
      <li>Éviter aliments durs ou collants (chewing-gum, caramels…)</li>
      <li>Bains de bouche sans alcool si conseillé</li>
    </ul>
  </section>

  <section className="pc-section">
    <FileText className="pc-icon" />
    <h2>En cas de problème</h2>
    <ul className="pc-list">
      <li>Bague décollée : conserver et contacter l’orthodontiste</li>
      <li>Fil gênant : appliquer de la cire orthodontique</li>
      <li>Douleurs : antalgiques simples (paracétamol)</li>
      <li>Blessures : gels cicatrisants ou bains de bouche adaptés</li>
    </ul>
  </section>

  <section className="pc-section">
    <Clipboard className="pc-icon" />
    <h2>Durée du traitement</h2>
    <p>En moyenne, un traitement multi‑attaches dure 18 à 36 mois selon la complexité.</p>
    <p className="pc-note">Une contention est souvent mise en place après le retrait des bagues pour stabiliser les résultats.</p>
  </section>

  <section className="pc-section">
    <HelpCircle className="pc-icon" />
    <h2>Conseils pratiques</h2>
    <ul className="pc-list">
      <li>Appliquer la cire orthodontique pour limiter les irritations</li>
      <li>Éviter les aliments pouvant décoller les bagues</li>
      <li>Maintenir une hygiène irréprochable</li>
      <li>Suivre les rendez-vous de contrôle et ajustements</li>
    </ul>
  </section>

  <div className="pc-cta">
      <RdvButton />
  </div>

</div>

);
};

export default AppareilsMultiAttaches;
