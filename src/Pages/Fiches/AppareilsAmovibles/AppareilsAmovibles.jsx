import React from "react";
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

const AppareilsAmovibles = () => {
  const handleRedirect = () => {
    window.open("https://app.my-orthoadvance.com/#/cabinets/lucas", "_blank");
  };

  return (
    <div className="pc-container">

      <header className="pc-hero">
        <h1>Appareils amovibles</h1>
        <p>
          Les appareils amovibles permettent de corriger certaines anomalies dentaires ou 
          dento-squelettiques tout en restant simples à manipuler et à entretenir.
        </p>
      </header>

      <section className="pc-section">
        <Info className="pc-icon" />
        <h2>Qu’est-ce qu’un appareil amovible&nbsp;?</h2>
        <p>
          C’est un dispositif orthodontique non collé aux dents, que l’on peut retirer 
          pour manger et se brosser les dents. Il est constitué d’une base en résine, 
          parfois associée à des ressorts, des vérins ou des fils métalliques, permettant 
          d’exercer des forces légères pour guider la dentition ou la croissance des mâchoires.
        </p>
      </section>

      <section className="pc-section">
        <Calendar className="pc-icon" />
        <h2>Pourquoi utilise-t-on un appareil amovible&nbsp;?</h2>
        <ul className="pc-list">
          <li>Corriger des malpositions légères des dents</li>
          <li>Guider la croissance des mâchoires chez l’enfant</li>
          <li>Modifier certaines fonctions (respiration, déglutition…)</li>
          <li>Stabiliser un traitement en phase de contention</li>
        </ul>
      </section>

      <section className="pc-section">
        <Smile className="pc-icon" />
        <h2>Adaptation et sensations au début</h2>
        <ul className="pc-list">
          <li>Légère gêne dans la parole pendant quelques jours</li>
          <li>Augmentation temporaire de la salivation</li>
          <li>Petite tension sur les dents ou les joues</li>
          <li>L’adaptation est généralement très rapide</li>
        </ul>
      </section>

      <section className="pc-section">
        <Camera className="pc-icon" />
        <h2>Hygiène et entretien</h2>
        <ul className="pc-list">
          <li>Retirer l’appareil pour manger</li>
          <li>Le rincer après chaque repas</li>
          <li>Le nettoyer une fois par jour avec une brosse et de l’eau froide</li>
          <li>Utiliser des pastilles nettoyantes 1–2 fois par semaine si conseillé</li>
          <li>Ne jamais utiliser d’eau chaude (risque de déformation)</li>
        </ul>
      </section>

      <section className="pc-section">
        <Clipboard className="pc-icon" />
        <h2>Port de l'appareil</h2>
        <p>
          L’efficacité dépend directement du temps de port quotidien.  
          En général, un port de <strong>14 à 20 heures par jour</strong> est recommandé, 
          selon les indications du praticien.
        </p>
        <p className="pc-note">
          Le traitement peut être prolongé en cas de port irrégulier.
        </p>
      </section>

      <section className="pc-section">
        <FileText className="pc-icon" />
        <h2>En cas de problème</h2>
        <ul className="pc-list">
          <li>Appareil cassé : ne pas essayer de réparer soi-même</li>
          <li>Douleurs inhabituelles persistantes : contacter le cabinet</li>
          <li>Fil ou ressort qui pique : ranger l’appareil et demander un ajustement</li>
          <li>Perte de l’appareil : prévenir rapidement pour éviter une reprise du traitement</li>
        </ul>
      </section>

      <section className="pc-section">
        <HelpCircle className="pc-icon" />
        <h2>Conseils pratiques</h2>
        <ul className="pc-list">
          <li>Toujours ranger l’appareil dans sa boîte dédiée</li>
          <li>Ne jamais l’envelopper dans un mouchoir (risque de le jeter par erreur)</li>
          <li>Éviter de manipuler les crochets ou ressorts</li>
          <li>Apporter l’appareil à chaque rendez-vous</li>
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

export default AppareilsAmovibles;
