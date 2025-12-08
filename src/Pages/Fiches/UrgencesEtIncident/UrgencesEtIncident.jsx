import React from "react";
import Seo from "../../../components/Seo/Seo";
import RdvButton from "../../../components/RdvButton/RdvButton";
import "../../Fiches/Fiches.css";
import {
  Info,
  Clipboard,
  AlertTriangle,
  Scissors,
  CornerUpLeft,
  HelpCircle
} from "lucide-react";

const UrgencesEtIncident = () => {
  return (
    <div className="pc-container">
      <Seo
        title="Urgences et incidents orthodontiques – Cabinet Dr Capucine Lucas"
        description="Guide pour gérer les urgences et incidents liés aux traitements orthodontiques au Cabinet Dr Capucine Lucas à Pacé : appareils cassés, fils irritants, douleurs et conseils pratiques pour enfants et adultes."
      />
      <header className="pc-hero">
        <h1>Incidents & urgences orthodontiques</h1>
        <p>
          Il y a peu de véritable urgence en orthodontie. Cependant, certains événements ou inconforts
          peuvent nécessiter une attention rapide — gêne, appareil endommagé, choc, etc. Voici les principaux cas rencontrés et ce qu'il convient de faire.
        </p>
      </header>

      <section className="pc-section">
        <Info className="pc-icon" />
        <h2>Bagues / brackets décollés ou déplacés</h2>
        <p>
          Si une bague ou un bracket se décolle ou bouge, contactez immédiatement votre praticien par téléphone.  
          Ne tentez pas de recoller ou de réajuster vous‑même.  
          En attendant, évitez toute mastication sur la dent concernée pour ne pas aggraver le déplacement.
        </p>
      </section>

      <section className="pc-section">
        <Clipboard className="pc-icon" />
        <h2>Fil irritant ou saillant — gêne des muqueuses</h2>
        <p>
          Si un fil sort et irrite la joue, la langue ou la gencive, utilisez de la cire orthodontique pour recouvrir la partie irritante.  
          Si la gêne persiste, contactez votre cabinet pour un réglage.  
          En cas d’irritation des muqueuses (langue, joues, lèvres), des bains de bouche ou des gels adaptés peuvent aider.
        </p>
      </section>

      <section className="pc-section">
        <AlertTriangle className="pc-icon" />
        <h2>Douleurs après activation / réglage de l’appareil</h2>
        <p>
          Une sensation de tension ou d’inconfort est normale après la pose ou le réglage d’un appareil.  
          Pour soulager, privilégiez des aliments mous, des bains de bouche tièdes, et, si besoin, un antalgique courant.  
          Si la douleur est intense ou persistante, contactez votre orthodontiste.
        </p>
      </section>

      <section className="pc-section">
        <Scissors className="pc-icon" />
        <h2>Appareil amovible perdu ou cassé</h2>
        <p>
          Si votre appareil amovible est perdu ou cassé, ne le portez pas dans un état endommagé.  
          Prenez rendez-vous au plus vite pour en faire refaire un.  
          Si l’incident a lieu en milieu scolaire, pensez à déclarer l’accident à l’assurance de l’établissement.
        </p>
      </section>

      <section className="pc-section">
        <CornerUpLeft className="pc-icon" />
        <h2>Choc, chute, accident — impact sur l’appareil</h2>
        <p>
          Après un choc (chute, accident, impact sur l’appareil), avertissez immédiatement votre orthodontiste, même si tout semble intact.  
          Il est important de vérifier que l’appareil n’est pas endommagé et que les dents n’ont pas bougé.  
          Mieux vaut anticiper pour éviter un mauvais repositionnement.
        </p>
      </section>

      <div className="pc-cta">
        <RdvButton />
      </div>
    </div>
  );
};

export default UrgencesEtIncident;
