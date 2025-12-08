import React from "react";
import Seo from "../../components/Seo/Seo";
import RdvButton from "../../components/RdvButton/RdvButton";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact-page">
      <Seo
        title="Contact – Cabinet d'Orthodontie Dr Capucine Lucas"
        description="Contactez le Cabinet d'Orthodontie Dr Capucine Lucas à Pacé pour prendre rendez-vous, poser vos questions ou obtenir des informations sur les traitements orthodontiques pour enfants et adultes."
      />
      <h1 className="contact-title">Contact & Accès</h1>

      <div className="contact-container">

        {/* --- INFOS DE CONTACT --- */}
        <div className="contact-info">
          <h2>Coordonnées du cabinet</h2>

          <p>
            <strong>Adresse :</strong><br />
            4, boulevard du Trieux<br />
            35740 Pacé
          </p>

          <p>
            <strong>Téléphone :</strong><br />
            {/* XX XX XX XX XX */}
          </p>

          <p>
            <strong>Email :</strong><br />
            Drlucas@orthodontiepace.com
          </p>

          <h3>Horaires</h3>
          <p>Lundi – Mardi : 09h – 13h30 / 14h30 – 18h</p>
          <p>Mercredi – Vendredi : 09h – 13h30 / 14h30 – 18h30</p>
        </div>

        {/* --- GOOGLE MAP --- */}
        <div className="contact-map">
          <iframe
            title="Localisation du cabinet"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.3680328046817!2d-1.7656469225154106!3d48.14170955087208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480ee135f8bea739%3A0x5d5f7d368598f56!2s4%20Bd%20du%20Trieux%2C%2035740%20Pac%C3%A9!5e0!3m2!1sfr!2sfr!4v1763993486512!5m2!1sfr!2sfr"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      <div className="pc-cta">
        <RdvButton />
      </div>

      </div>
    </section>
  );
}

export default Contact;
