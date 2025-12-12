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
              <ul>
                <li>lundi 09h – 13h30 / 14h30 – 18h</li>
                <li>mardi 09h – 13h30 / 14h30 – 18h</li>
                <li>mercredi 09h – 13h30 / 14h30 – 18h30</li>
                <li>jeudi Fermé</li>
                <li>vendredi 09h – 13h30 / 14h30 – 18h30</li>
              </ul>
            </div>
        </div>

        {/* Coordonnées */}
        <div className="footer-column">
          <h2>Coordonnées</h2>
          <p>Cabinet d'orthodontie du Dr Capucine LUCAS</p>
          <p>Adresse. 4, boulevard du Trieux - 35740 PACE</p>
          {/* <p>Tél. XX XX XX XX XX</p> */}
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Docteure Capucine LUCAS – Orthodontiste &nbsp;|&nbsp; 
          <Link to="/legal-notice">Mentions légales</Link>
        </p>
      </div>

    </footer>
  );
}

export default Footer;
