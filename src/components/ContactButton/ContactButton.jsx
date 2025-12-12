import React from "react";

const ContactButton = () => {
  const handleRedirect = () => {
    window.open("https://www.dentistes-chateaugiron.fr/contact/", "_blank");
  };

  return (
    <a className="urgent-link" onClick={handleRedirect} role="button">
      Nous contacter
    </a>
  );
};

export default ContactButton;
