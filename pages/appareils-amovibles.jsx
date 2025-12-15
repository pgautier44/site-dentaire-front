import React from "react";
import Seo from "../src/components/Seo/Seo";
import Button from "../src/components/Button/Button";
import styles from "../styles/Fiches.module.css";
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
  return (
    <div className={styles.pcContainer}>
      <Seo
        title="Appareils amovibles – Cabinet Dr Capucine Lucas"
        description="Informations complètes sur les appareils amovibles au Cabinet d'Orthodontie Dr Capucine Lucas à Pacé : types d’appareils, utilisation, entretien et conseils pratiques pour enfants et adultes."
        jsonLd={{
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        "name": "Appareils amovibles – Cabinet Dr Capucine Lucas",
        "description": "Tout savoir sur les appareils amovibles : types, utilisation, entretien et conseils pratiques pour enfants et adultes.",
        "url": "https://dr-capucine-lucas.vercel.app/appareils-amovibles",
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

      <header className={styles.pcHero}>
        <h1>Appareils amovibles</h1>
        <p>
          Les appareils amovibles permettent de corriger certaines anomalies dentaires ou 
          dento-squelettiques tout en restant simples à manipuler et à entretenir.
        </p>
      </header>

      <section className={styles.pcSection}>
        <Info className={styles.pcIcon} />
        <h2>Qu’est-ce qu’un appareil amovible&nbsp;?</h2>
        <p>
          C’est un dispositif orthodontique non collé aux dents, que l’on peut retirer 
          pour manger et se brosser les dents. Il est constitué d’une base en résine, 
          parfois associée à des ressorts, des vérins ou des fils métalliques, permettant 
          d’exercer des forces légères pour guider la dentition ou la croissance des mâchoires.
        </p>
      </section>

      <section className={styles.pcSection}>
        <Calendar className={styles.pcIcon} />
        <h2>Pourquoi utilise-t-on un appareil amovible&nbsp;?</h2>
        <ul className={styles.pcList}>
          <li>Corriger des malpositions légères des dents</li>
          <li>Guider la croissance des mâchoires chez l’enfant</li>
          <li>Modifier certaines fonctions (respiration, déglutition…)</li>
          <li>Stabiliser un traitement en phase de contention</li>
        </ul>
      </section>

      <section className={styles.pcSection}>
        <Smile className={styles.pcIcon} />
        <h2>Adaptation et sensations au début</h2>
        <ul className={styles.pcList}>
          <li>Légère gêne dans la parole pendant quelques jours</li>
          <li>Augmentation temporaire de la salivation</li>
          <li>Petite tension sur les dents ou les joues</li>
          <li>L’adaptation est généralement très rapide</li>
        </ul>
      </section>

      <section className={styles.pcSection}>
        <Camera className={styles.pcIcon} />
        <h2>Hygiène et entretien</h2>
        <ul className={styles.pcList}>
          <li>Retirer l’appareil pour manger</li>
          <li>Le rincer après chaque repas</li>
          <li>Le nettoyer une fois par jour avec une brosse et de l’eau froide</li>
          <li>Utiliser des pastilles nettoyantes 1–2 fois par semaine si conseillé</li>
          <li>Ne jamais utiliser d’eau chaude (risque de déformation)</li>
        </ul>
      </section>

      <section className={styles.pcSection}>
        <Clipboard className={styles.pcIcon} />
        <h2>Port de l'appareil</h2>
        <p>
          L’efficacité dépend directement du temps de port quotidien.  
          En général, un port de <strong>14 à 20 heures par jour</strong> est recommandé, 
          selon les indications du praticien.
        </p>
        <p className={styles.pcNote}>
          Le traitement peut être prolongé en cas de port irrégulier.
        </p>
      </section>

      <section className={styles.pcSection}>
        <FileText className={styles.pcIcon} />
        <h2>En cas de problème</h2>
        <ul className={styles.pcList}>
          <li>Appareil cassé : ne pas essayer de réparer soi-même</li>
          <li>Douleurs inhabituelles persistantes : contacter le cabinet</li>
          <li>Fil ou ressort qui pique : ranger l’appareil et demander un ajustement</li>
          <li>Perte de l’appareil : prévenir rapidement pour éviter une reprise du traitement</li>
        </ul>
      </section>

      <section className={styles.pcSection}>
        <HelpCircle className={styles.pcIcon} />
        <h2>Conseils pratiques</h2>
        <ul className={styles.pcList}>
          <li>Toujours ranger l’appareil dans sa boîte dédiée</li>
          <li>Ne jamais l’envelopper dans un mouchoir (risque de le jeter par erreur)</li>
          <li>Éviter de manipuler les crochets ou ressorts</li>
          <li>Apporter l’appareil à chaque rendez-vous</li>
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

export default AppareilsAmovibles;
