import React from "react";
import Seo from "../src/components/Seo/Seo";

import HomeHero from "../src/components/Home/HomeHero";
import Welcome from "../src/components/Welcome/Welcome";

export default function HomePage() {
  return (
    <>
      <Seo
        title="Dr Capucine Lucas – Cabinet d'orthodontie à Pacé"
        description="Cabinet d’orthodontie du Dr Capucine Lucas situé à Pacé. Informations sur les soins, conseils pratiques et contact."
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
          "url": "https://dr-capucine-lucas.vercel.app",
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
