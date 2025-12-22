import React from "react";
import Seo from "../src/components/Seo/Seo";

import HomeHero from "../src/components/Home/HomeHero";
import Welcome from "../src/components/Welcome/Welcome";

export default function HomePage() {
  return (
    <>
      <Seo
        title="Dr Capucine Lucas – Cabinet d'orthodontie à Pacé – Version 2025 Next.js"
        description="Cabinet d’orthodontie du Dr Capucine Lucas situé à Pacé. Nouvelle version du site en Next.js. Informations, conseils et contact."
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

      {/* Next.js update – 22 Dec 2025 */}

      {/* Petit texte invisible pour signaler à Google la nouvelle version */}
      <p style={{ display: "none" }}>Next.js version 2025</p>

      <HomeHero />
      <Welcome />
    </>
  );
}
