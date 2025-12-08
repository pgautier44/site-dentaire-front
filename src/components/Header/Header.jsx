import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoIcon from "../../assets/Logo.png";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      {/* Barre grise en haut */}
      <div className="top-bar">
        <p className="contact-info">
           Docteure Capucine LUCAS | Orthodontiste - 4, boulevard du Trieux - 35740 PACE {/*- XX XX XX XX */}
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

        {/* Desktop navigation */}
        <nav className="desktop-menu">
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/conseils">Fiches Conseil</Link></li>
            <li><Link to="/team">Équipe</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        {/* Burger pour mobile */}
        <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        {/* Menu mobile */}
        {menuOpen && (
          <nav className="mobile-menu">
            <ul>
              <li><Link to="/" onClick={() => setMenuOpen(false)}>Accueil</Link></li>
              <li><Link to="/conseils" onClick={() => setMenuOpen(false)}>Fiches Conseil</Link></li>
              <li><Link to="/team" onClick={() => setMenuOpen(false)}>Équipe</Link></li>
              <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
