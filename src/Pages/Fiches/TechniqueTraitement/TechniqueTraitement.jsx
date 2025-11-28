import React from "react";
import "../../Fiches/Fiches.css";
import {
  Info,
  Anchor,
  Layers,
  Archive,
  CheckCircle,
  HelpCircle
} from "lucide-react";

const TechniqueTraitement = () => {
  const handleRedirect = () => {
    window.open("https://app.my-orthoadvance.com/#/cabinets/lucas", "_blank");
  };

  return (
    <div className="pc-container">
      <header className="pc-hero">
        <h1>Techniques de traitement orthodontique</h1>
        <p>
          En orthodontie, plusieurs techniques peuvent être proposées selon les besoins : appareils fixes, amovibles, gouttières invisibles, voire des combinaisons adaptées à chaque cas.  
          Le choix dépend de la malocclusion, de l’âge, des attentes esthétiques ou fonctionnelles, et du plan de traitement établi.  
        </p>
      </header>

      <section className="pc-section">
        <Info className="pc-icon" />
        <h2>Appareils fixes (bagues / brackets)</h2>
        <p>
          Les appareils fixes — « multi‑attaches » — permettent de corriger des malpositions dentaires complexes, en agissant sur la position des dents, y compris les racines.  
          Ils sont particulièrement adaptés quand un déplacement précis et durable est nécessaire. L’ajustement se fait progressivement, avec des fils de plus en plus rigides selon les étapes du traitement.  
        </p>
      </section>

      <section className="pc-section">
        <Anchor className="pc-icon" />
        <h2>Gouttières invisibles / appareils amovibles</h2>
        <p>
          Les gouttières — ou autres appareils amovibles — sont une alternative discrète et souvent plus confortable, notamment pour les adolescents ou les adultes.  
          Elles sont fabriquées sur mesure, à partir d’empreintes ou de scans, et doivent être portées selon les consignes de l’orthodontiste (souvent la nuit ou un temps défini chaque jour).  
          Elles conviennent bien aux corrections légères à modérées, et offrent l’avantage d’être amovibles pour les repas ou le brossage.  
        </p>
      </section>

      <section className="pc-section">
        <Layers className="pc-icon" />
        <h2>Techniques combinées ou personnalisées</h2>
        <p>
          Dans certains cas, le traitement peut combiner plusieurs méthodes : appareil fixe + gouttière, ou appareils amovibles + contention, selon la complexité et les besoins.  
          Cette approche mixte permet de tirer parti des avantages de chaque technique pour optimiser le résultat — tant sur l’alignement, l’esthétique que sur la stabilité à long terme.  
        </p>
      </section>

      <section className="pc-section">
        <Archive className="pc-icon" />
        <h2>Plan de traitement & suivi personnalisé</h2>
        <p>
          Chaque traitement commence par un diagnostic (photos, radiographies, empreintes) pour établir un plan adapté à la malocclusion.  
          Ensuite, selon la technique choisie, les rendez-vous, ajustements, réglages ou remises d’appareils sont planifiés.  
          Enfin, après la phase active, une phase de contention peut être nécessaire pour stabiliser les résultats.  
        </p>
      </section>

      <section className="pc-section">
        <CheckCircle className="pc-icon" />
        <h2>Ce qu’il faut savoir — hygiène, rigueur, implication</h2>
        <p>
          Quel que soit l’appareil, un bon brossage, l’utilisation de brossettes interdentaires, et des visites régulières sont essentiels pour le succès du traitement.  
          Respecter les consignes de port pour les gouttières, éviter les aliments durs ou collants pour les appareils fixes, et suivre les rendez-vous d’ajustement sont des clés pour un résultat satisfaisant à la fois fonctionnel et esthétique.  
        </p>
      </section>

      <div className="pc-cta">
        <button className="pc-button" onClick={handleRedirect}>
          Prendre rendez-vous / Contact
        </button>
      </div>
    </div>
  );
};

export default TechniqueTraitement;
