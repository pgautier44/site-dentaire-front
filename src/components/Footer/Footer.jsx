import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Horaires */}
        <div className="footer-column">
            <h2>Horaires</h2>

            <div className="horaires-section">
              <h5>Accueil</h5>
              <ul>
                <li>lundi 10h – 14h / 15h – 19h</li>
                <li>mardi 10h – 14h / 15h – 19h</li>
                <li>mercredi 9h30 – 13h / 14h – 18h</li>
                <li>jeudi 10h – 14h / 15h – 19h</li>
                <li>vendredi 10h30 – 14h / 15h – 19h</li>
              </ul>
            </div>

            <div className="horaires-section">
              <h5>Standard téléphonique</h5>
              <ul>
                <li>Lundi au jeudi 10h-13h / 15h-18h</li>
                <li>Vendredi 10h30-13h / 15h-18h</li>
              </ul>
            </div>
        </div>

        {/* Coordonnées */}
        <div className="footer-column">
          <h2>Coordonnées</h2>
          <p>Cabinet d'orthodontie du Dr LUCAS Capucine</p>
          <p>Adresse. 4 Boulevard du Trieux - 35740 PACE</p>
          <p>Tél. XX XX XX XX XX</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Docteur LUCAS Capucine – Orthodontiste &nbsp;|&nbsp; 
          <Link to="/legal-notice">Mentions légales</Link>
        </p>
      </div>

    </footer>
  );
}

export default Footer;
