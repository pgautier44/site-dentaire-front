import React from "react";
import Seo from "../src/components/Seo/Seo";
import Team from "../src/components/Team/Team";
import Galerie from "../src/components/Galerie/Galerie";

function TeamPage() {
  return (
    <div>
      <Seo
        title="Équipe – Cabinet d'Orthodontie Dr Capucine Lucas"
        description="Découvrez l'équipe du Cabinet d'Orthodontie Dr Capucine Lucas à Pacé : Docteure Capucine Lucas et ses collaborateurs, spécialistes en orthodontie pour enfants et adultes."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Dentist",
          name: "Cabinet d'Orthodontie Dr Capucine Lucas",
          url: "https://dr-capucine-lucas.vercel.app",
          address: {
            "@type": "PostalAddress",
            streetAddress: "4 Boulevard du Trieux",
            addressLocality: "Pacé",
            postalCode: "35740",
          },
          medicalSpecialty: "Orthodontics",
          employee: [
            {
              "@type": "Person",
              name: "Dr Capucine Lucas",
              jobTitle: "Orthodontiste",
            },
          ],
        }}
      />

      <Team />
      <Galerie />
    </div>
  );
}

export default TeamPage;
