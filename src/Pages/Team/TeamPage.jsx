import React from "react";
import Seo from "../../components/Seo/Seo";
import Team from "../../components/Team/Team";
import "../../components/Team/Team.css";

function TeamPage() {
  return (
    <div className="team-page">
      <Seo
        title="Équipe – Cabinet d'Orthodontie Dr Capucine Lucas"
        description="Découvrez l'équipe du Cabinet d'Orthodontie Dr Capucine Lucas à Pacé : Docteure Capucine Lucas et ses collaborateurs, spécialistes en orthodontie pour enfants et adultes."
      />
      <Team />
    </div>
  );
}

export default TeamPage;
