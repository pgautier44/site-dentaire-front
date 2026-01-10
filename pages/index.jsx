import React from "react";
import Seo from "../src/components/Seo/Seo";

import HomeHero from "../src/components/Home/HomeHero";
import Welcome from "../src/components/Welcome/Welcome";

export default function HomePage() {
  return (
    <>
      <Seo
        title="Orthodontiste à Pacé (35) – Dr Capucine Lucas"
        description="Cabinet d’orthodontie à Pacé (Ille-et-Vilaine). Traitements orthodontiques enfants, adolescents et adultes. Dr Capucine Lucas."
        jsonLd={{
          "@context": "https://schema.org",
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
          "email": "drlucas@orthodontiepace.com",
          "url": "https://dr-capucine-lucas.fr",
          "openingHours": [
            "Mo-Tu 09:00-13:30",
            "Mo-Tu 14:30-18:00",
            "We-Fr 09:00-13:30",
            "We-Fr 14:30-18:30"
          ]
        }}
      />

      <HomeHero />
      <Welcome />
    </>
  );
}
