import React from "react";
import Seo from "../src/components/Seo/Seo";
import Button from "../src/components/Button/Button";
import styles from "../styles/Fiches.module.css"; 
import { Calendar, Info, FileText, Camera, Clipboard, Smile, HelpCircle } from "lucide-react";

const PremiereConsultation = () => {
  return (
    <div className={styles.pcContainer}>
      <Seo
        title="Première consultation – Cabinet d'Orthodontie Dr Capucine Lucas"
        description="Tout ce qu’il faut savoir pour préparer la première consultation au Cabinet d'Orthodontie Dr Capucine Lucas à Pacé : déroulement, examens, conseils et informations pratiques pour enfants et adultes."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "name": "Première consultation – Cabinet d'Orthodontie Dr Capucine Lucas",
          "description": "Informations sur la première consultation orthodontique : déroulement, examens, conseils et recommandations pour patients enfants et adultes.",
          "url": "https://dr-capucine-lucas.fr/premiere-consultation",
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
        <h1>Première consultation & bilan orthodontique</h1>
        <p>Un premier rendez-vous pour évaluer, diagnostiquer et vous accompagner — en toute transparence.</p>
      </header>

      <section className={styles.pcSection}>
        <Calendar className={styles.pcIcon} />
        <h2>À quel âge consulter ?</h2>
        <p>
          Il n’y a pas d’âge “magique” : l’orthodontie peut être utile de l’enfance à l’âge adulte.  
          Toutefois, un bilan dès 6-8 ans est souvent recommandé pour dépister précocement des problèmes (mâchoire, croissance, malocclusion…).  
          Cela permet d’anticiper un traitement si nécessaire, ou simplement de suivre l’évolution.
        </p>
      </section>

      <section className={styles.pcSection}>
        <Info className={styles.pcIcon} />
        <h2>Déroulé de la consultation</h2>
        <ul className={styles.pcList}>
          <li>Entretien : antécédents médicaux/dentaires, habitudes (succion, respiration, posture…)</li>
          <li>Examen clinique exobuccal et endobuccal (visage, mâchoires, dents, gencives, fonction)</li>
          <li>Analyse de la posture, fonction mandibulaire, occlusion, respiration, déglutition, phonation</li>
          <li>Examens radiologiques</li>
        </ul>
      </section>

      <section className={styles.pcSection}>
        <Camera className={styles.pcIcon} />
        <h2>Examens complémentaires</h2>
        <p>Selon les besoins, le bilan peut inclure :</p>
        <ul className={styles.pcList}>
          <li>Radiographie panoramique et/ou téléradiographie (profil / face)</li>
          <li>Photographies du visage, du sourire, des arcades dentaires (face & profil)</li>
          <li>Empreintes dentaires numériques 3D</li>
        </ul>
      </section>

      <section className={styles.pcSection}>
        <FileText className={styles.pcIcon} />
        <h2>Constitution du dossier orthodontique</h2>
        <p>À partir des données collectées, le praticien élabore un dossier complet qui lui permet de :</p>
        <ul className={styles.pcList}>
          <li>Poser un diagnostic (malocclusion, asymétrie, décalage, etc.)</li>
          <li>Proposer un plan de traitement adapté (appareil fixe, amovible, gouttières, etc.)</li>
          <li>Déterminer la durée estimée, le nombre de rendez-vous, la fréquence des contrôles</li>
          <li>Présenter un devis, des informations administratives (mutuelle, prise en charge) si besoin</li>
        </ul>
      </section>

      <section className={styles.pcSection}>
        <Smile className={styles.pcIcon} />
        <h2>Pourquoi faire ce bilan maintenant ?</h2>
        <ul className={styles.pcList}>
          <li>Permettre une prise en charge précoce, lorsque la croissance est favorable</li>
          <li>Éviter des traitements plus lourds plus tard</li>
          <li>Anticiper les besoins (hygiène, soins, suivi) et informer le patient / les parents</li>
          <li>Prendre une décision éclairée, sans pression</li>
        </ul>
      </section>

      <section className={styles.pcSection}>
        <Clipboard className={styles.pcIcon} />
        <h2>Après la consultation</h2>
        <p>Un rendez vous d'explications peut vous être proposé. Lors de ce rendez-vous, vous recevrez :</p>
        <ul className={styles.pcList}>
          <li>Un compte-rendu clair du bilan</li>
          <li>Un plan de traitement proposé (si nécessaire) avec durée, étapes, appareillage</li>
          <li>Un devis et les modalités de prise en charge / remboursement (selon âge, mutuelle…)</li>
          <li>Une explication du suivi : rendez-vous de pose, ajustements, contrôles, etc.</li>
        </ul>
      </section>

      <section className={styles.pcSection}>
        <HelpCircle className={styles.pcIcon} />
        <h2>Conseils pratiques avant votre rendez-vous</h2>
        <ul className={styles.pcList}>
          <li>Apportez votre carte Vitale + mutuelle (si applicable)</li>
          <li>Si disponible : radios ou examens dentaires antérieurs</li>
          <li>Notez vos habitudes (succion, respiration, grincement, douleurs, antécédents dentaires)</li>
          <li>Préparez vos questions (durée, coût, alternatives, suivi…)</li>
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

export default PremiereConsultation;
