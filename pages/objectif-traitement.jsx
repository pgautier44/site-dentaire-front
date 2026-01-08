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

const ObjectifTraitement = () => {
  return (
    <div className={styles.pcContainer}>
      <Seo
        title="Objectifs du traitement orthodontique – Cabinet Dr Capucine Lucas"
        description="Découvrez les objectifs des traitements orthodontiques au Cabinet Dr Capucine Lucas à Pacé : alignement des dents, correction des malocclusions, amélioration de la fonction masticatoire et esthétique."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "name": "Objectifs du traitement orthodontique – Cabinet Dr Capucine Lucas",
          "description": "Guide complet sur les objectifs des traitements orthodontiques : alignement, correction des malocclusions, hygiène, confort et esthétique.",
          "url": "https://dr-capucine-lucas.fr/objectif-traitement",
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
        <h1>Pourquoi un traitement orthodontique ?</h1>
        <p>
          Un traitement orthodontique vise non seulement à améliorer l’esthétique du sourire, mais surtout à garantir un bon équilibre fonctionnel, une meilleure santé bucco-dentaire, et un confort durable.  
          Il peut avoir des effets bénéfiques sur l’occlusion, la mastication, la prévention des problèmes dentaires futurs et l’estime de soi.
        </p>
      </header>

      <section className={styles.pcSection}>
        <Info className={styles.pcIcon} />
        <h2>Alignement & hygiène simplifiés</h2>
        <p>
          Des dents correctement alignées sont plus faciles à brosser et à entretenir. Lorsque les dents se chevauchent ou sont mal positionnées, certaines zones deviennent difficiles d’accès, favorisant la plaque, les caries ou les maladies des gencives.  
          Un bon alignement facilite le brossage, le passage du fil ou des brossettes interdentaires, et contribue à garder des dents et des gencives saines sur le long terme.
        </p>
      </section>

      <section className={styles.pcSection}>
        <Calendar className={styles.pcIcon} />
        <h2>Mâcher, respirer, parler plus confortablement</h2>
        <p>
          Un mal-alignement ou une mauvaise occlusion peuvent compliquer la mastication, altérer la digestion, 
          ou provoquer des tensions au niveau des mâchoires ou des cervicales. Grâce à l’orthodontie, 
          les forces sont correctement réparties, la morsure devient harmonieuse,
           ce qui améliore le confort de la mastication et peut soulager les tensions articulaires ou musculaires. 
           De plus, un bon alignement dentaire peut aussi faciliter l’articulation et la prononciation.
        </p>
      </section>

      <section className={styles.pcSection}>
        <Smile className={styles.pcIcon} />
        <h2>Un sourire harmonieux et confiance en soi</h2>
        <p>
          Au-delà de la santé, l’un des bénéfices les plus visibles d’un traitement orthodontique est l’amélioration de l’esthétique du sourire et de l’équilibre du visage.  
          Un sourire aligné contribue à l’harmonie du visage, ce qui peut avoir un impact positif sur l’estime de soi, la confiance en soi et les relations sociales.
        </p>
      </section>

      <section className={styles.pcSection}>
        <Camera className={styles.pcIcon} />
        <h2>Protection à long terme des dents et des articulations</h2>
        <p>
          Une mauvaise occlusion peut engendrer une usure inégale des dents, des fissures, des fractures, ou des surcharges sur certaines dents. Un alignement correct répartit les forces de mastication de façon équilibrée, ce qui préserve l’émail, réduit le risque de fracture, et prolonge la durée de vie des dents.  
          De même, cela peut limiter les douleurs articulaires, les tensions de la mâchoire ou les désordres liés à l’articulation temporo-mandibulaire (ATM).
        </p>
      </section>

      <section className={styles.pcSection}>
        <Clipboard className={styles.pcIcon} />
        <h2>Un investissement durable</h2>
        <p>
          Bien qu’un traitement orthodontique représente un engagement, c’est aussi un investissement sur le long terme : des dents bien alignées demandent moins de traitements correctifs, réduisent les risques de complications, et peuvent éviter des soins coûteux plus tard.  
          En plus, l’amélioration du confort, de l’esthétique et de la santé bucco-dentaire en vaut bien l’investissement.
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

export default ObjectifTraitement;
