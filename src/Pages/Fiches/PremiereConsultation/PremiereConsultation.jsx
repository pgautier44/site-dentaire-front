import React from "react";
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

const PremiereConsultation = () => {
    const handleRedirect = () => {
    window.open("https://app.my-orthoadvance.com/#/cabinets/lucas", "_blank");
};
  return (
    <div className="pc-container">

      <header className="pc-hero">
        <h1>Première consultation & bilan orthodontique</h1>
        <p>Un premier rendez-vous pour évaluer, diagnostiquer et vous accompagner — en toute transparence.</p>
      </header>

      <section className="pc-section">
        <Calendar className="pc-icon" />
        <h2>À quel âge consulter ?</h2>
        <p>
          Il n’y a pas d’âge “magique” : l’orthodontie peut être utile de l’enfance à l’âge adulte.  
          Toutefois, un bilan dès 8-10 ans est souvent recommandé pour dépister précocement des problèmes (mâchoire, croissance, malocclusion…).  
          Cela permet d’anticiper un traitement si nécessaire, ou simplement de suivre l’évolution.
        </p>
      </section>

      <section className="pc-section">
        <Info className="pc-icon" />
        <h2>Déroulé de la consultation</h2>
        <ul className="pc-list">
          <li>Entretien : antécédents médicaux/dentaires, habitudes (succion, respiration, posture…)</li>
          <li>Examen clinique exobuccal et endobuccal (visage, mâchoires, dents, gencives, fonction)</li>
          <li>Analyse de la posture, fonction mandibulaire, occlusion, respiration, déglutition, phonation</li>
        </ul>
      </section>

      <section className="pc-section">
        <Camera className="pc-icon" />
        <h2>Examens complémentaires possibles</h2>
        <p>Selon les besoins, le bilan peut inclure :</p>
        <ul className="pc-list">
          <li>Radiographie panoramique et/ou téléradiographie (profil / face)</li>
          <li>Photographies du visage, du sourire, des arcades dentaires (face & profil)</li>
          <li>Empreintes dentaires (plâtre ou empreintes numériques 3D)</li>
        </ul>
      </section>

      <section className="pc-section">
        <FileText class= "pc-icon" />
        <h2>Constitution du dossier orthodontique</h2>
        <p>À partir des données collectées, le praticien élabore un dossier complet qui lui permet de :</p>
        <ul className="pc-list">
          <li>Poser un diagnostic (malocclusion, asymétrie, décalage, etc.)</li>
          <li>Proposer un plan de traitement adapté (appareil fixe, amovible, gouttières, etc.)</li>
          <li>Déterminer la durée estimée, le nombre de rendez-vous, la fréquence des contrôles</li>
          <li>Présenter un devis, des informations administratives (mutuelle, prise en charge) si besoin</li>
        </ul>
      </section>

      <section className="pc-section">
        <Smile className="pc-icon" />
        <h2>Pourquoi faire ce bilan maintenant ?</h2>
        <ul className="pc-list">
          <li>Permettre une prise en charge précoce, lorsque la croissance est favorable</li>
          <li>Éviter des traitements plus lourds plus tard</li>
          <li>Anticiper les besoins (hygiène, soins, suivi) et informer le patient / les parents</li>
          <li>Prendre une décision éclairée, sans pression</li>
        </ul>
      </section>

      <section className="pc-section">
        <Clipboard className="pc-icon" />
        <h2>Après la consultation</h2>
        <p>Vous recevrez :</p>
        <ul className="pc-list">
          <li>Un compte-rendu clair du bilan</li>
          <li>Un plan de traitement proposé (si nécessaire) avec durée, étapes, appareillage</li>
          <li>Un devis et les modalités de prise en charge / remboursement (selon âge, mutuelle…)</li>
          <li>Une explication du suivi : rendez-vous de pose, ajustements, contrôles, etc.</li>
        </ul>
      </section>

      <section className="pc-section">
        <HelpCircle className="pc-icon" />
        <h2>Conseils pratiques avant votre rendez-vous</h2>
        <ul className="pc-list">
          <li>Apportez votre carte Vitale + mutuelle (si applicable)</li>
          <li>Si disponible : radios ou examens dentaires antérieurs</li>
          <li>Notez vos habitudes (succion, respiration, grincement, douleurs, antécédents dentaires)</li>
          <li>Préparez vos questions (durée, coût, alternatives, suivi…)</li>
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

export default PremiereConsultation;
