import React from "react";
import Seo from "../../components/Seo/Seo";
import { Link } from "react-router-dom";
import "./Conseils.css";

// Importer les images locales
import BaguesImg from "../../assets/Bagues.png";
import AppareilAmovibleImg from "../../assets/Appareils_Amovible.png";
import AlimentationFixeImg from "../../assets/Appareils_Fixe.png";
import PremiereConsultImg from "../../assets/Premiere_Consultation.png";
import Orthodontie_definition from "../../assets/Orthodontie_Definition.png";
import Orthodontie_goal from "../../assets/Orthodontie_Goal.png";
import Orthodontie_Emergency from "../../assets/Orthodontie_Emergency.png";
import Orthodontie_Technique from "../../assets/Orthodontie_Technique.png";

const fiches = [
  {
    id: 1,
    title: "Qu’est-ce que l’orthodontie ?",
    img: Orthodontie_definition,
    desc: "Comprendre l’orthodontie, ses objectifs et le rôle des praticiens spécialisés.",
    link: "/orthodontie-presentation"
  },
  {
    id: 2,
    title: "Première Consultation Orthodontique",
    img: PremiereConsultImg,
    desc: "Découvrez le déroulement de votre première visite et les étapes clés du bilan orthodontique.",
    link: "/premiere-consultation"
  },
  {
    id: 3,
    title: "Bagues et Appareils Multi‑attaches",
    img: BaguesImg,
    desc: "Fonctionnement des bagues, conseils d’entretien et bonnes pratiques pour un traitement efficace.",
    link: "/bagues"
  },
  {
    id: 4,
    title: "Appareils Amovibles",
    img: AppareilAmovibleImg,
    desc: "Guide pratique sur le port des appareils amovibles et comment maintenir une hygiène optimale.",
    link: "/appareils-amovibles"
  },
  {
    id: 5,
    title: "Techniques d’appareils fixes",
    img: AlimentationFixeImg,
    desc: "Tout savoir sur les appareils fixes : pose, ajustements et soins recommandés.",
    link: "/appareils-fixes"
  },
  {
    id: 6,
    title: "Objectifs d’un traitement orthodontique",
    img: Orthodontie_goal,
    desc: "Pourquoi suivre un traitement orthodontique et quels bénéfices attendre à court et long terme.",
    link: "/objectif-traitement"
  },
  {
    id: 7,
    title: "Urgences et incidents courants",
    img: Orthodontie_Emergency,
    desc: "Que faire en cas de problème avec votre appareil et comment gérer les urgences orthodontiques.",
    link: "/urgence-et-incident"
  },
  {
    id: 8,
    title: "Les différentes techniques de traitement",
    img: Orthodontie_Technique,
    desc: "Aperçu des techniques orthodontiques modernes adaptées à chaque profil de patient.",
    link: "/technique-traitement"
  }
];

function Conseils() {
  return (
    <section className="conseils-page">
      <Seo
        title="Fiches conseils – Cabinet d'Orthodontie Dr Capucine Lucas"
        description="Retrouvez les fiches conseils du Cabinet d'Orthodontie Dr Capucine Lucas : soins à domicile, hygiène bucco-dentaire, recommandations pour appareils orthodontiques, pour enfants et adultes."
      />
      <h1 className="conseils-title">Fiches Conseil</h1>
      <div className="conseils-container">
        {fiches.map((fiche) => (
          <Link key={fiche.id} to={fiche.link || "#"} className="fiche-card">
            <img src={fiche.img} alt={fiche.title} />
            <div className="fiche-content">
              <h2>{fiche.title}</h2>
              <p>{fiche.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Conseils;
