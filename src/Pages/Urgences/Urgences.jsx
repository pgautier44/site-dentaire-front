import React from "react";
import { Link } from "react-router-dom";
import Seo from "../../components/Seo/Seo";
import "./Urgences.css";

function Urgences() {
  return (
    <div className="urgences-page">
      <Seo 
        title="Urgence orthodontique – Cabinet d'Orthodontie Dr Capucine Lucas"
        description="Toutes les informations sur les urgences orthodontiques au cabinet de Dr Capucine Lucas à Pacé : service de garde, conseils en cas de choc ou dent expulsée, et contacts utiles." 
      />
      <h1 className="urgences-title">Urgence orthodontique</h1>

      {/* Service de garde */}
      <section className="urgences-section">
        <p>
          <strong className="highlight-blue">Service de garde :</strong>
          <br /><br />
          Les dimanches et jours fériés, un service de garde est assuré par le
          Conseil de l’Ordre Départemental des Chirurgiens-Dentistes.
          <br />
          Pour connaître le praticien de garde, vous pouvez consulter votre
          quotidien régional ou contacter le commissariat ou la gendarmerie de
          votre ville, qui dispose des coordonnées mises à jour.
        </p>
      </section>

      {/* En cas de choc */}
      <section className="urgences-section">
        <p>
          <strong className="highlight-blue">En cas de choc :</strong>
          <br /><br />
          <u>Dent déplacée :</u> Si une dent a été déplacée lors d’un choc,
          essayez – avec des mains propres – de la repositionner délicatement dans
          son logement. Informez ensuite notre cabinet dans les plus brefs délais.
          <br />
          En cas d’indisponibilité, contactez le service de garde désigné par le
          Conseil de l’Ordre ou l’hôpital le plus proche disposant d’un service
          d’odontologie ou d’ORL.
          <br /><br />
          <u>Dent expulsée (avulsion) :</u> Si la dent a été totalement perdue,
          récupérez-la si possible sans la rincer. Conservez-la :
          <br />
          – dans du sérum physiologique,  
          <br />
          – ou dans du lait,  
          <br />
          – ou dans un linge humide,  
          <br />
          – ou encore dans votre propre salive.
          <br />
          Prenez contact avec le cabinet en urgence.  
          En cas d’absence, adressez-vous au service de garde ou à l’hôpital le
          plus proche équipé d’un service d’odontologie ou ORL.
        </p>
      </section>

      {/* Lien vers la page UrgencesOrthodontie */}
      <section className="urgences-section">
        <p>
          <strong className="highlight-blue">Urgence orthodontique : </strong>
          <Link to="/urgences-orthodontie" className="urgences-link">
            cliquez-ici
          </Link>
        </p>
      </section>
    </div>
  );
}

export default Urgences;
