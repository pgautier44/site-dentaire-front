// RdvButton.jsx
import React from "react";

const RdvButton = () => {
  const handleRedirect = () => {
    window.open("https://app.my-orthoadvance.com/#/cabinets/lucas", "_blank");
  };

  return (
    <a className="urgent-link" onClick={handleRedirect} role="button">
      Rendez-vous
    </a>
  );
};

export default RdvButton;
