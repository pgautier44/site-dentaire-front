import React from "react";

// src/routes/routesConfig.js
// Composants
import HomeHero from "../components/Home/HomeHero";
import Welcome from "../components/Welcome/Welcome";
import Team from "../components/Team/Team";

// Pages
import Urgences from "../Pages/Urgences/Urgences";
import UrgencesOrthodontie from "../Pages/UrgencesOrthodontie/UrgencesOrthodontie";
import LegalNotice from "../Pages/LegalNotice/LegalNotice";
import TeamPage from "../Pages/Team/TeamPage";
import Contact from "../Pages/Contact/Contact";
import Conseils from "../Pages/Conseils/Conseils";

// Fiches
import PremiereConsultation from "../Pages/Fiches/PremiereConsultation/PremiereConsultation";
import Bagues from "../Pages/Fiches/Bagues/Bagues";
import AppareilsAmovibles from "../Pages/Fiches/AppareilsAmovibles/AppareilsAmovibles";
import AppareilsFixes from "../Pages/Fiches/AppareilsFixes/AppareilsFixes";
import OrthodontiePresentation from "../Pages/Fiches/OrthodontiePresentation/OrthodontiePresentation";
import ObjectifTraitement from "../Pages/Fiches/ObjectifTraitement/ObjectifTraitement";
import UrgencesEtIncident from "../Pages/Fiches/UrgencesEtIncident/UrgencesEtIncident";
import TechniqueTraitement from "../Pages/Fiches/TechniqueTraitement/TechniqueTraitement";

const routesConfig = [
  {
    path: "/",
    element: (
      <>
        <HomeHero />
        <Welcome />
        <Team />
      </>
    ),
  },
  { path: "/urgences", element: <Urgences /> },
  { path: "/urgences-orthodontie", element: <UrgencesOrthodontie /> },
  { path: "/legal-notice", element: <LegalNotice /> },
  { path: "/team", element: <TeamPage /> },
  { path: "/contact", element: <Contact /> },
  { path: "/conseils", element: <Conseils /> },

  // Fiches
  { path: "/premiere-consultation", element: <PremiereConsultation /> },
  { path: "/bagues", element: <Bagues /> },
  { path: "/appareils-amovibles", element: <AppareilsAmovibles /> },
  { path: "/appareils-fixes", element: <AppareilsFixes /> },
  { path: "/orthodontie-presentation", element: <OrthodontiePresentation /> },
  { path: "/objectif-traitement", element: <ObjectifTraitement /> },
  { path: "/urgence-et-incident", element: <UrgencesEtIncident /> },
  { path: "/technique-traitement", element: <TechniqueTraitement /> },
];

export default routesConfig;
