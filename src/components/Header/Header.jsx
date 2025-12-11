import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoIcon from "../../assets/Logo.png";
import RdvButton from "../../components/RdvButton/RdvButton";

import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">

      <div className="top-bar">
        <p className="contact-info">
          Docteure Capucine LUCAS | Orthodontiste - 4, boulevard du Trieux - 35740 PACE
        </p>

        <div className="top-buttons">
          <Link to="/urgences" className="urgent-link">Urgences</Link>

          <RdvButton />
        </div>
      </div>

      <div className="main-header">
        <Link to="/" className="branding">
          <img src={logoIcon} alt="Icône dent" className="tooth-icon" />
          <div className="brand-text">
            <h1 className="brand-title">LUCAS Capucine</h1>
            <p className="brand-subtitle">Cabinet d'Orthodontie</p>
          </div>
        </Link>

        <nav className="desktop-menu">
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/conseils">Fiches conseils</Link></li>
            <li><Link to="/team">Equipe & cabinet</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        {menuOpen && (
          <nav className="mobile-menu">
            <ul>
              <li><Link to="/" onClick={() => setMenuOpen(false)}>Accueil</Link></li>
              <li><Link to="/conseils" onClick={() => setMenuOpen(false)}>Fiches Conseil</Link></li>
              <li><Link to="/team" onClick={() => setMenuOpen(false)}>Equipe & cabinet</Link></li>
              <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
              <li><Link to="/urgences" onClick={() => setMenuOpen(false)}>Urgences</Link></li>
              <li><a onClick={() => {setMenuOpen(false);window.open("https://app.my-orthoadvance.com/#/cabinets/lucas", "_blank");}}>Rendez-vous</a></li>
            </ul>
          </nav>
        )}
      </div>

      <div className="info-banner">
        Site et cabinet en construction, nous serons heureux de vous accueillir à partir du <strong>2 février 2026 !</strong>  !
      </div>


    </header>
  );
}

export default Header;
