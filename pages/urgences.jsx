// pages/urgences.jsx
import React from "react";
import Button from "../src/components/Button/Button";
import Seo from "../src/components/Seo/Seo";
import styles from "../styles/Urgences.module.css";

export default function Urgences() {
  return (
    <div className={styles.urgencesPage}>
      <Seo
        title="Urgence orthodontique – Cabinet d'Orthodontie Dr Capucine Lucas"
        description="Toutes les informations sur les urgences orthodontiques au cabinet de Dr Capucine Lucas à Pacé : service de garde, conseils en cas de choc ou dent expulsée, et contacts utiles."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "name": "Urgence orthodontique – Cabinet Dr Capucine Lucas",
          "description": "Guide des urgences orthodontiques : appareils cassés, fils irritants, dents déplacées ou expulsées.",
          "url": "https://dr-capucine-lucas.vercel.app/urgences",
          "mainEntity": {
            "@type": "Dentist",
            "name": "Dr Capucine Lucas",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "4 Boulevard du Trieux",
              "addressLocality": "Pacé",
              "postalCode": "35740"
            },
            "medicalSpecialty": "Orthodontics",
            "availableService": [
              {
                "@type": "MedicalProcedure",
                "name": "Gestion des urgences orthodontiques",
                "description": "Interventions pour bagues décollées, fils irritants, dents déplacées ou expulsées."
              }
            ]
          }
        }}
      />

      <h1 className={styles.urgencesTitle}>Urgence orthodontique</h1>

      {/* Service de garde */}
      <section className={styles.urgencesSection}>
        <p>
          <strong className={styles.highlightBlue}>Service de garde :</strong>
          <br /><br />
          Les dimanches et jours fériés, un service de garde est assuré par le
          Conseil de l’Ordre Départemental des Chirurgiens-Dentistes.
          <br />
          Pour connaître le praticien de garde, vous pouvez consulter votre
          quotidien régional ou contacter le commissariat ou la gendarmerie de
          votre ville, qui dispose des coordonnées mises à jour.
        </p>
      </section>

      {/* En cas de choc */}
      <section className={styles.urgencesSection}>
        <p>
          <strong className={styles.highlightBlue}>En cas de choc :</strong>
          <br /><br />
          <u>Dent déplacée :</u> Si une dent a été déplacée lors d’un choc,
          essayez – avec des mains propres – de la repositionner délicatement dans
          son logement. Informez ensuite notre cabinet dans les plus brefs délais.
          <br />
          En cas d’indisponibilité, contactez le service de garde désigné par le
          Conseil de l’Ordre ou l’hôpital le plus proche disposant d’un service
          d’odontologie ou d’ORL.
          <br /><br />
          <u>Dent expulsée (avulsion) :</u> Si la dent a été totalement perdue,
          récupérez-la si possible sans la rincer. Conservez-la :
          <br />
          – dans du sérum physiologique,  
          <br />
          – ou dans du lait,  
          <br />
          – ou dans un linge humide,  
          <br />
          – ou encore dans votre propre salive.
          <br />
          Prenez contact avec le cabinet en urgence.  
          En cas d’absence, adressez-vous au service de garde ou à l’hôpital le
          plus proche équipé d’un service d’odontologie ou ORL.
        </p>

        {/* Bouton vers UrgencesOrthodontie */}
        <Button
          label="Urgences"
          size="small"
          variant="tertiary"
          onClick={() => window.location.href = "/urgences-orthodontie"}
        />
      </section>
    </div>
  );
}
