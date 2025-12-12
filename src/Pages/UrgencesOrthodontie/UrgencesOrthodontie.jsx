import React from "react";
import Seo from "../../components/Seo/Seo";
import "./UrgencesOrthodontie.css";

function UrgencesOrthodontie() {
  return (
    <div className="urgences-ortho-page">
      <Seo
        title="Urgence orthodontique spécifique – Cabinet Dr Capucine Lucas"
        description="Conseils et procédures pour gérer les urgences orthodontiques : appareils cassés, fils irritants, douleurs. Informations pratiques pour contacter le cabinet Dr Capucine Lucas à Pacé."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "name": "Urgences Orthodontiques – Cabinet Dr Capucine Lucas",
          "description": "Guide pratique pour gérer les urgences orthodontiques : appareils cassés, fils irritants, douleurs, et conseils pour contacter le cabinet rapidement.",
          "url": "https://dr-capucine-lucas.vercel.app/urgences-orthodontie",
          "mainEntity": {
            "@type": "Dentist",
            "name": "Dr Capucine Lucas",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "4 Boulevard du Trieux",
              "addressLocality": "Pacé",
              "postalCode": "35740"
            },
            "medicalSpecialty": "Orthodontics",
            "availableService": [
              {
                "@type": "MedicalProcedure",
                "name": "Gestion des urgences orthodontiques",
                "description": "Interventions pour bagues cassées, fils irritants, dents déplacées ou autres incidents orthodontiques."
              }
            ]
          }
        }}
      />

      {/* En-tête / Hero */}
      <section className="hero">
        <div className="hero-background"></div>
        <div className="hero-overlay">
          <div className="hero-content">
            <div className="hero-icon">
              <svg
                width="60"
                height="60"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.12.8.37 1.57.72 2.28a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.01 6.01l1.27-1.27a2 2 0 0 1 2.11-.45c.71.35 1.48.6 2.28.72A2 2 0 0 1 22 16.92z"
                  stroke="#c04a3b"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h1 className="hero-title">Urgences Orthodontiques</h1>
            <p className="hero-subtitle">
              En cas de problème avec votre appareil orthodontique, suivez ces conseils pour réagir rapidement.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="introduction">
        <p>
          Certaines situations nécessitent une intervention rapide pour éviter douleur ou complications. Découvrez les problèmes les plus fréquents et comment agir efficacement.
        </p>
      </section>

      {/* Étapes */}
      <section className="steps">
        <h2>Étapes à suivre</h2>
        <div className="step-list">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Identifier le problème</h3>
            <p>
              Fil délogé, bracket cassé ou appareil douloureux, identifiez précisément la source du problème avant toute intervention.
            </p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Soulager la douleur</h3>
            <p>
              Utilisez de la cire orthodontique, rince-bouche ou solutions douces pour réduire l’irritation temporairement.
            </p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Contacter le cabinet</h3>
            <p>
              Appelez-nous rapidement pour fixer un rendez-vous et éviter que le problème ne s’aggrave.
            </p>
          </div>
        </div>
      </section>

      {/* Conseils pratiques */}
      <section className="additional-info">
        <h2>Conseils pratiques</h2>
        <ul>
          <li>Ne tentez pas de réparer l’appareil vous-même si vous n’êtes pas sûr.</li>
          <li>Gardez toujours à portée de main la cire orthodontique.</li>
          <li>Notez le moment exact où le problème est survenu pour aider le praticien.</li>
        </ul>
      </section>
    </div>
  );
}

export default UrgencesOrthodontie;
