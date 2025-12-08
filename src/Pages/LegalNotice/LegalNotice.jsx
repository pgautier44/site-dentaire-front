import React from "react";
import Seo from "../../components/Seo/Seo";
import "./LegalNotice.css";

const LegalNotice = () => {
  return (
    <div className="legal-container">
      <Seo
        title="Mentions légales – Cabinet d'Orthodontie Dr Capucine Lucas"
        description="Mentions légales du site du Cabinet d'Orthodontie Dr Capucine Lucas à Pacé. Informations sur l'éditeur, l'hébergement et les droits de propriété intellectuelle."
      />
      <h1 className="legal-title">Mentions légales</h1>

      <section className="legal-section">
        <h2>Éditeur du site</h2>
        <p>
          Le présent site est édité par le <strong>Cabinet d’orthodontie du Dr Capucine LUCAS</strong>,
          situé :
          <strong> 4, boulevard du Trieux – 35740 Pacé</strong>
          <br />
          Téléphone : {/* XX XX XX XX XX */}
          <br />
          Responsable de la publication : Dr Capucine LUCAS, chirurgien-dentiste spécialisée en orthodontie.
        </p>
      </section>

      <section className="legal-section">
        <h2>Hébergement du site</h2>
        <p>
          Le site est hébergé par :
          Vercel, Inc.
          <br />
          Adresse : 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis
          <br />
          Site internet : https://vercel.com
          <br />
          Téléphone : +1 (888) 982-5835
          <br />
          Email : support@vercel.com
        </p>
      </section>

      <section className="legal-section">
        <h2>Direction de la rédaction</h2>
        <p>
          La direction de la rédaction est assurée par Dr Capucine LUCAS,
          professionnelle de santé inscrite au Conseil Départemental de l’Ordre des Chirurgiens-Dentistes.
        </p>
      </section>

      <section className="legal-section">
        <h2>Conception et réalisation</h2>
        <p>
          Ce site a été conçu et développé par Philippe GAUTIER.
        </p>
      </section>

      <section className="legal-section">
        <h2>Finalité du site</h2>
        <p>
          Ce site a pour objectif de présenter le cabinet, d’informer les patients sur les soins proposés et
          de faciliter la prise de contact. Les informations publiées sont fournies à titre indicatif et ne
          remplacent en aucun cas une consultation ou un diagnostic professionnel.
        </p>
      </section>

      <section className="legal-section">
        <h2>Propriété intellectuelle</h2>
        <p>
          L’ensemble des contenus présents sur ce site (textes, images, logos, éléments graphiques,
          structure, code) est protégé par la législation française relative à la propriété intellectuelle.
          Toute reproduction, modification ou diffusion sans autorisation est interdite.
        </p>
      </section>

      <section className="legal-section">
        <h2>Liens hypertextes</h2>
        <p>
          Les liens externes proposés sur ce site sont fournis à titre informatif. Le cabinet ne saurait être
          tenu responsable de leur contenu ou des mises à jour effectuées par les sites tiers.
        </p>
      </section>

      <section className="legal-section">
        <h2>Protection des données personnelles (RGPD)</h2>
        <p>
          Le site ne collecte que les données strictement nécessaires à son fonctionnement. Aucun transfert
          de données à des tiers n’est effectué sans votre accord.
          <br />
          Conformément au RGPD, vous disposez d’un droit d’accès, de rectification, d’opposition et de
          suppression de vos données.
          <br />
          Pour toute demande : Drlucas@orthodontiepace.com.
        </p>
      </section>

      <section className="legal-section">
        <h2>Cookies</h2>
        <p>
          Le site peut utiliser des cookies techniques nécessaires à son bon fonctionnement. Aucun cookie
          publicitaire ou de mesure d’audience n’est installé sans votre consentement.
        </p>
      </section>

      <section className="legal-section">
        <h2>Limitation de responsabilité</h2>
        <p>
          Les informations publiées sur ce site sont fournies à titre indicatif et peuvent contenir des erreurs
          ou omissions. Le cabinet ne peut être tenu responsable d’un mauvais usage ou d’une mauvaise
          interprétation des contenus.
        </p>
      </section>

      <section className="legal-section">
        <h2>Disponibilité du site</h2>
        <p>
          Nous veillons à maintenir un accès continu au site, mais aucune garantie n’est donnée en cas
          d’interruption liée à la maintenance ou à des problèmes techniques indépendants de notre
          volonté.
        </p>
      </section>
    </div>
  );
};

export default LegalNotice;
