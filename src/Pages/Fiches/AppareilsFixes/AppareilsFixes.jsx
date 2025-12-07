import React from "react";
import Seo from "../../../components/Seo/Seo";
import "../../Fiches/Fiches.css";
import {
  Info,
  Calendar,
  Smile,
  Camera,
  Clipboard,
  FileText,
  HelpCircle
} from "lucide-react";

const AppareilsFixes = () => {
  const handleRedirect = () => {
    window.open("https://app.my-orthoadvance.com/#/cabinets/lucas", "_blank");
  };

  return (
    <div className="pc-container">
      <Seo
        title="Appareils fixes – Cabinet Dr Capucine Lucas"
        description="Tout savoir sur les appareils fixes au Cabinet d'Orthodontie Dr Capucine Lucas à Pacé : pose, adaptation, entretien, suivi et conseils pratiques pour enfants et adultes."
      />
      <header className="pc-hero">
        <h1>Appareils fixes (multi-attaches / bagues)</h1>
        <p>
          Les appareils fixes permettent un redressement précis et efficace des dents et mâchoires — adaptés aux cas complexes ou quand un contrôle rigoureux du déplacement dentaire est nécessaire.
        </p>
      </header>

      <section className="pc-section">
        <Info className="pc-icon" />
        <h2>Qu’est-ce qu’un appareil fixe ?</h2>
        <p>
          Un appareil fixe (ou multi-attaches) est constitué de petits boîtiers (brackets / bagues) collés sur les dents, reliés par un fil métallique (arche).
          Le fil exerce une pression continue, ce qui permet de déplacer les dents de façon très précise.
        </p>
      </section>

      <section className="pc-section">
        <Calendar className="pc-icon" />
        <h2>Quand l’utiliser — pour quels cas ?</h2>
        <ul className="pc-list">
          <li>Malpositions dentaires importantes / complexes (dents chevauchées, rotation, désalignement, etc.).</li>
          <li>Mauvaises relations mâchoires ou occlusion nécessitant une correction significative.</li>
          <li>Quand un déplacement dentaire précis et complet (trois dimensions) est nécessaire — dents et racines.</li>
        </ul>
      </section>

      <section className="pc-section">
        <Smile className="pc-icon" />
        <h2>Avantages & inconvénients</h2>
        <ul className="pc-list">
          <li><strong>Avantages :</strong> traitement très précis, adapté aux cas complexes, action continue sans dépendre de la coopération du patient.</li>
          <li><strong>Inconvénients :</strong> hygiène plus exigeante — les aliments peuvent se bloquer autour des boîtiers.</li>
        </ul>
      </section>

      <section className="pc-section">
        <Camera className="pc-icon" />
        <h2>Hygiène & précautions</h2>
        <ul className="pc-list">
          <li>Brossage soigneux des dents après chaque repas — bien nettoyer autour des bagues et au bord des gencives.</li>
          <li>Utilisation de brossettes interdentaires ou fil dentaire pour nettoyer sous le fil métallique.</li>
          <li>Rinçage avec bain de bouche fluoré si conseillé.</li>
          <li>Éviter aliments durs, collants ou très sucrés — risque de décoller bagues ou d’abîmer l’appareil.</li>
        </ul>
      </section>

      <section className="pc-section">
        <Clipboard className="pc-icon" />
        <h2>Ce à quoi s’attendre — adaptation & suivi</h2>
        <ul className="pc-list">
          <li>Léger inconfort ou sensibilité dentaire quelques jours après la pose ou après un ajustement — c’est normal.</li>
          <li>Irritation possible des joues ou de la langue — la cire orthodontique aide souvent.</li>
          <li>Consultations régulières pour ajustement des fils (toutes ~4 à 8 semaines selon le plan).</li>
        </ul>
      </section>

      <section className="pc-section">
        <FileText className="pc-icon" />
        <h2>Après la fin du traitement — contention & entretien</h2>
        <p>
          Une fois l’appareil retiré, une contention (fil de retenue ou gouttière de nuit) est souvent mise en place pour stabiliser le résultat et éviter que les dents ne bougent.
        </p>
      </section>

      <section className="pc-section">
        <HelpCircle className="pc-icon" />
        <h2>Conseils pratiques pour bien vivre avec un appareil fixe</h2>
        <ul className="pc-list">
          <li>Prévoir une hygiène rigoureuse — brosse + interdentaire + bain de bouche si besoin.</li>
          <li>Éviter aliments durs ou collants — préférer aliments coupés/mous.</li>
          <li>Apporter un kit hygiène (brosse + brossettes) à chaque repas si possible.</li>
          <li>Respecter les rendez-vous de contrôle pour les ajustements.</li>
        </ul>
      </section>

      <div className="pc-cta">
        <button className="pc-button" onClick={handleRedirect}>
          Prendre rendez-vous
        </button>
      </div>
    </div>
  );
};

export default AppareilsFixes;
