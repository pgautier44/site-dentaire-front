import React from "react";
import { Link } from "react-router-dom";
import logoIcon from "../../assets/Logo.png";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      {/* Barre grise en haut */}
      <div className="top-bar">
        <p className="contact-info">
          Docteure LUCAS Capucine | Orthodontiste - 4 Boulevard du Trieux - 35740 PACE - 02 99 23 54 44
        </p>
        <Link to="/urgences" className="urgent-link">Urgences</Link>
      </div>

      <div className="main-header">
        <Link to="/" className="branding">
          <img src={logoIcon} alt="Icône dent" className="tooth-icon" />
          <div className="brand-text">
            <h1 className="brand-title">LUCAS Capucine</h1>
            <p className="brand-subtitle">Cabinet d'Orthodontie</p>
          </div>
        </Link>

        <nav>
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/conseils">Fiches Conseil</Link>
            </li>
            <li>
              <Link to="/team">Équipe</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
