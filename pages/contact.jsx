import React from "react";
import Seo from "../src/components/Seo/Seo";
import Button from "../src/components/Button/Button";
import styles from "../styles/Contact.module.css";

function Contact() {
  return (
    <section className={styles.contactPage}>
      <Seo
        title="Contact – Cabinet d'Orthodontie Dr Capucine Lucas"
        description="Contactez le Cabinet d'Orthodontie Dr Capucine Lucas à Pacé pour prendre rendez-vous, poser vos questions ou obtenir des informations sur les traitements orthodontiques pour enfants et adultes."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact – Cabinet d'Orthodontie Dr Capucine Lucas",
          description: "Contactez le cabinet d'orthodontie pour toute question, rendez-vous ou information.",
          url: "https://dr-capucine-lucas.vercel.app/contact",
          publisher: {
            "@type": "Dentist",
            name: "Dr Capucine Lucas",
            address: {
              "@type": "PostalAddress",
              streetAddress: "4 Boulevard du Trieux",
              addressLocality: "Pacé",
              postalCode: "35740",
              addressCountry: "FR"
            },
            email: "drlucas@orthodontiepace.com",
            telephone: "02 59 16 55 74"
          }
        }}
      />

      <h1 className={styles.contactTitle}>Contact & Accès</h1>

      <div className={styles.contactContainer}>

        {/* --- INFOS DE CONTACT --- */}
        <div className={styles.contactInfo}>
          <h2>Coordonnées du cabinet</h2>

          <p>
            <strong>Adresse :</strong><br />
            4, boulevard du Trieux<br />
            35740 Pacé
          </p>

          <p>
            <strong>Téléphone :</strong><br />
            02 59 16 55 74
          </p>

          <p>
            <strong>Email :</strong><br />
            drlucas@orthodontiepace.com
          </p>

          <h3>Horaires</h3>
          <p>Lundi – Mardi : 09h – 13h30 / 14h30 – 18h</p>
          <p>Mercredi – Vendredi : 09h – 13h30 / 14h30 – 18h30</p>
        </div>

        {/* --- GOOGLE MAP --- */}
        <div className={styles.contactMap}>
          <iframe
            title="Localisation du cabinet"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.3680328046817!2d-1.7656469225154106!3d48.14170955087208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480ee135f8bea739%3A0x5d5f7d368598f56!2s4%20Bd%20du%20Trieux%2C%2035740%20Pac%C3%A9!5e0!3m2!1sfr!2sfr!4v1763993486512!5m2!1sfr!2sfr"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* --- BOUTONS --- */}
        <div className={styles.pcCta}>
          <Button
            label="Rendez-vous"
            onClick={() =>
              window.open("https://app.my-orthoadvance.com/#/cabinets/lucas", "_blank")
            }
            size="large"
            variant="primary"
          />
        </div>

      </div>
    </section>
  );
}

export default Contact;
