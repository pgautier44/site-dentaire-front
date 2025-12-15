import React from "react";
import Link from "next/link";
import Seo from "../src/components/Seo/Seo";
import styles from "../styles/Conseils.module.css";

const fiches = [
  {
    id: 1,
    title: "Qu’est-ce que l’orthodontie ?",
    img: "/images/Orthodontie_Definition.png",
    desc: "Comprendre l’orthodontie, ses objectifs et le rôle des praticiens spécialisés.",
    link: "/orthodontie-presentation",
  },
  {
    id: 2,
    title: "Première Consultation Orthodontique",
    img: "/images/Premiere_Consultation.png",
    desc: "Découvrez le déroulement de votre première visite et les étapes clés du bilan orthodontique.",
    link: "/premiere-consultation",
  },
  {
    id: 3,
    title: "Bagues et Appareils Multi-attaches",
    img: "/images/Bagues.png",
    desc: "Fonctionnement des bagues, conseils d’entretien et bonnes pratiques pour un traitement efficace.",
    link: "/bagues",
  },
  {
    id: 4,
    title: "Appareils Amovibles",
    img: "/images/Appareils_Amovible.png",
    desc: "Guide pratique sur le port des appareils amovibles et comment maintenir une hygiène optimale.",
    link: "/appareils-amovibles",
  },
  {
    id: 5,
    title: "Techniques d’appareils fixes",
    img: "/images/Appareils_Fixe.png",
    desc: "Tout savoir sur les appareils fixes : pose, ajustements et soins recommandés.",
    link: "/appareils-fixes",
  },
  {
    id: 6,
    title: "Objectifs d’un traitement orthodontique",
    img: "/images/Orthodontie_Goal.png",
    desc: "Pourquoi suivre un traitement orthodontique et quels bénéfices attendre à court et long terme.",
    link: "/objectif-traitement",
  },
  {
    id: 7,
    title: "Urgences et incidents courants",
    img: "/images/Orthodontie_Emergency.png",
    desc: "Que faire en cas de problème avec votre appareil et comment gérer les urgences orthodontiques.",
    link: "/urgences-et-incident",
  },
  {
    id: 8,
    title: "Les différentes techniques de traitement",
    img: "/images/Orthodontie_Technique.png",
    desc: "Aperçu des techniques orthodontiques modernes adaptées à chaque profil de patient.",
    link: "/technique-traitement",
  },
];

export default function Conseils() {
  return (
    <section className={styles.page}>
      <Seo
        title="Fiches conseils – Cabinet d'Orthodontie Dr Capucine Lucas"
        description="Retrouvez les fiches conseils du Cabinet d'Orthodontie Dr Capucine Lucas : soins à domicile, hygiène bucco-dentaire, recommandations pour appareils orthodontiques."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Fiches conseils – Cabinet d'Orthodontie Dr Capucine Lucas",
          description:
            "Fiches conseils orthodontiques : hygiène, appareils, urgences, informations pratiques.",
          url: "https://dr-capucine-lucas.vercel.app/conseils",
          publisher: {
            "@type": "Dentist",
            name: "Dr Capucine Lucas",
            address: {
              "@type": "PostalAddress",
              streetAddress: "4 Boulevard du Trieux",
              addressLocality: "Pacé",
              postalCode: "35740",
            },
          },
        }}
      />

      <h1 className={styles.title}>Fiches conseils</h1>

      <div className={styles.container}>
        {fiches.map((fiche) => (
          <Link
            key={fiche.id}
            href={fiche.link}
            className={styles.card}
          >
            <img src={fiche.img} alt={fiche.title} />

            <div className={styles.cardContent}>
              <h2>{fiche.title}</h2>
              <p>{fiche.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
