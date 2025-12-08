import React from "react";
import Seo from "../../../components/Seo/Seo";
import RdvButton from "../../../components/RdvButton/RdvButton";
import "../../Fiches/Fiches.css";
import {
  Info,
  Smile,
  Calendar,
  Camera,
  FileText,
  HelpCircle
} from "lucide-react";

const OrthodontiePresentation = () => {
  return (
    <div className="pc-container">
      <Seo
        title="Présentation de l'orthodontie – Cabinet Dr Capucine Lucas"
        description="Découvrez l’orthodontie au Cabinet Dr Capucine Lucas à Pacé : objectifs, types de traitements pour enfants et adultes, et conseils pour un suivi optimal."
      />
      <header className="pc-hero">
        <h1>Qu’est-ce que l’orthodontie ?</h1>
        <p>
          L’orthodontie est une spécialité dentaire qui corrige les mauvaises positions des dents 
          et des mâchoires afin d’améliorer la fonction, l’esthétique et le confort bucco-dentaire.
        </p>
      </header>

      <section className="pc-section">
        <Info className="pc-icon" />
        <h2>Objectifs de l’orthodontie</h2>
        <p>
          L’orthodontie vise à aligner les dents, corriger les décalages des mâchoires, rétablir une bonne occlusion
          et améliorer la mastication, la respiration, la phonation ainsi que l’harmonie du visage.
        </p>
      </section>

      <section className="pc-section">
        <Calendar className="pc-icon" />
        <h2>Quand consulter ?</h2>
        <p>
          Il n’y a pas d’âge précis pour débuter un traitement : il peut être envisagé chez l’enfant,
          l’adolescent ou l’adulte.
        </p>
        <p>
          Une consultation est recommandée en cas de dents mal alignées, de difficultés de mastication,
          de respiration buccale, ou d’un décalage visible entre les mâchoires.
        </p>
      </section>

      <section className="pc-section">
        <Smile className="pc-icon" />
        <h2>Bénéfices d’un traitement</h2>
        <p>
          Un traitement orthodontique permet d’obtenir un sourire plus harmonieux, de faciliter le brossage,
          de réduire certains risques de caries ou d’inflammations gingivales, et d’améliorer la mastication
          ou la phonation.
        </p>
      </section>

      <section className="pc-section">
        <Camera className="pc-icon" />
        <h2>Les techniques utilisées</h2>
        <p>
          Selon les besoins, plusieurs solutions peuvent être proposées : appareils fixes, appareils amovibles,
          gouttières, ou dispositifs fonctionnels. Le choix dépend du diagnostic et des objectifs du traitement.
        </p>
      </section>

      <section className="pc-section">
        <FileText className="pc-icon" />
        <h2>Déroulement d’un traitement</h2>
        <p>
          Un traitement commence toujours par un bilan complet incluant un examen clinique et, si nécessaire,
          des photos, radiographies ou empreintes.  
          Viennent ensuite la pose de l’appareil, les rendez-vous de suivi réguliers, puis une phase de contention
          pour stabiliser les résultats.
        </p>
      </section>

      <section className="pc-section">
        <HelpCircle className="pc-icon" />
        <h2>Astuces et précautions</h2>
        <p>
          Une hygiène dentaire rigoureuse est essentielle durant toute la durée du traitement.  
          La réussite dépend également de la coopération du patient : respect des consignes, port des élastiques
          ou appareils complémentaires, et présence aux rendez-vous.
        </p>
      </section>

      <div className="pc-cta">
        <RdvButton />
      </div>

    </div>
  );
};

export default OrthodontiePresentation;
