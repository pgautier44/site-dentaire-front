import React from "react";
import Seo from "../src/components/Seo/Seo";
import Button from "../src/components/Button/Button";
import styles from "../styles/Fiches.module.css"; 
import { Calendar, Info, FileText, Camera, Clipboard, Smile, HelpCircle, Anchor, Layers, Archive, CheckCircle } from "lucide-react";

const TechniqueTraitement = () => {
  return (
    <div className={styles.pcContainer}>
      <Seo
        title="Techniques de traitement orthodontique – Cabinet Dr Capucine Lucas"
        description="Découvrez les différentes techniques de traitement orthodontique utilisées au Cabinet Dr Capucine Lucas à Pacé : appareils fixes, amovibles, multi-attaches, et conseils pratiques pour enfants et adultes."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "name": "Techniques de traitement orthodontique – Cabinet Dr Capucine Lucas",
          "description": "Détails sur les techniques de traitement orthodontique : appareils fixes, amovibles, multi-attaches, gouttières invisibles et suivi personnalisé.",
          "url": "https://dr-capucine-lucas.fr/technique-traitement",
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
        <h1>Techniques de traitement orthodontique</h1>
        <p>
          En orthodontie, plusieurs techniques peuvent être proposées selon les besoins : appareils fixes, amovibles, 
          gouttières invisibles discrètes, voire des combinaisons adaptées à chaque cas. 
          Le choix dépend de la malocclusion, de l’âge, des attentes esthétiques ou fonctionnelles, et du plan de traitement établi.  
        </p>
      </header>

      <section className={styles.pcSection}>
        <Info className={styles.pcIcon} />
        <h2>Appareils fixes (bagues / brackets)</h2>
        <p>
          Les appareils fixes — « multi‑attaches » — permettent de corriger des malpositions dentaires complexes, en agissant sur la position des dents, y compris les racines.  
          Ils sont particulièrement adaptés quand un déplacement précis et durable est nécessaire. L’ajustement se fait progressivement, avec des fils de plus en plus rigides selon les étapes du traitement.  
        </p>
      </section>

      <section className={styles.pcSection}>
        <Camera className={styles.pcIcon} />
        <h2>Gouttières discrètes / appareils amovibles</h2>
        <p>
          Les gouttières — ou autres appareils amovibles — sont une alternative discrète et souvent plus confortable,
           notamment pour les adolescents ou les adultes. Elles sont fabriquées sur mesure, 
           à partir d’empreintes numériques, et doivent être portées selon les consignes de 
           l’orthodontiste (souvent 22h/24 la nuit ou un temps défini chaque jour). 
           Elles conviennent bien aux corrections légères à modérées, 
           et offrent l’avantage d’être amovibles pour les repas ou le brossage.  
        </p>
      </section>

      <section className={styles.pcSection}>
        <Anchor className={styles.pcIcon} />
        <h2>Appareils d’interception (fixes ou amovibles)</h2>
        <p>
          L’interception correspond à un traitement réalisé quand la croissance est encore active. 
          Il ne nécessite pas la présence de toutes les dents permanentes et permet de normaliser 
          les bases osseuses entre elles afin d’harmoniser la croissance et faciliter un traitement ultérieur.
        </p>
      </section>

      <section className={styles.pcSection}>
        <Clipboard className={styles.pcIcon} />
        <h2>Techniques combinées ou personnalisées</h2>
        <p>
          Dans certains cas, le traitement peut combiner plusieurs méthodes : appareil fixe + gouttière, ou appareils amovibles
           + contention, selon la complexité et les besoins. 
           Cette approche mixte permet de tirer parti des avantages de chaque technique pour optimiser le résultat
            — tant sur l’alignement, l’esthétique que sur la stabilité à long terme.
        </p>
      </section>

      <section className={styles.pcSection}>
        <Layers className={styles.pcIcon} />
        <h2>Techniques combinées ou personnalisées</h2>
        <p>
          Dans certains cas, le traitement peut combiner plusieurs méthodes : appareil fixe + gouttière, ou appareils amovibles + contention, selon la complexité et les besoins.  
          Cette approche mixte permet de tirer parti des avantages de chaque technique pour optimiser le résultat — tant sur l’alignement, l’esthétique que sur la stabilité à long terme.  
        </p>
      </section>

      <section className={styles.pcSection}>
        <Archive className={styles.pcIcon} />
        <h2>Plan de traitement & suivi personnalisé</h2>
        <p>
          Chaque traitement commence par un diagnostic (photos, radiographies, empreintes) pour établir un plan adapté à la malocclusion.  
          Ensuite, selon la technique choisie, les rendez-vous, ajustements, réglages ou remises d’appareils sont planifiés.  
          Enfin, après la phase active, une phase de contention peut être nécessaire pour stabiliser les résultats.  
        </p>
      </section>

      <section className={styles.pcSection}>
        <CheckCircle className={styles.pcIcon} />
        <h2>Ce qu’il faut savoir — hygiène, rigueur, implication</h2>
        <p>
          Quel que soit l’appareil, un bon brossage, l’utilisation de brossettes interdentaires, et des visites régulières sont essentiels pour le succès du traitement.  
          Respecter les consignes de port pour les gouttières, éviter les aliments durs ou collants pour les appareils fixes, et suivre les rendez-vous d’ajustement sont des clés pour un résultat satisfaisant à la fois fonctionnel et esthétique.  
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

export default TechniqueTraitement;
