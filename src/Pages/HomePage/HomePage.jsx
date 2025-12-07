import React from "react";
import Seo from "../../components/Seo/Seo";

import HomeHero from "../../components/Home/HomeHero";
import Welcome from "../../components/Welcome/Welcome";
import Team from "../../components/Team/Team";

export default function HomePage() {
  return (
    <>
      <Seo
        title="Dr Capucine Lucas – Cabinet d'orthodontie à Pacé"
        description="Cabinet d’orthodontie du Dr Capucine Lucas situé à Pacé. Traitements enfants, adolescents et adultes. Informations, conseils et contact."
      />

      <HomeHero />
      <Welcome />
      <Team />
    </>
  );
}
