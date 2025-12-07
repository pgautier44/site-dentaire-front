import { useEffect } from "react";

function Seo({ title, description }) {
  useEffect(() => {
    // Titre de la page
    if (title) {
      document.title = title;
    }

    // Meta description
    if (description) {
      let meta = document.querySelector('meta[name="description"]');

      if (!meta) {
        meta = document.createElement("meta");
        meta.name = "description";
        document.head.appendChild(meta);
      }

      meta.content = description;
    }

    // JSON-LD pour le logo et le cabinet
    const scriptId = "json-ld-schema";
    let script = document.getElementById(scriptId);

    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = scriptId;
      document.head.appendChild(script);
    }

    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Dentist",
      "name": "Dr Capucine Lucas",
      "logo": "https://dr-capucine-lucas.vercel.app/Logo.png",
      "url": "https://dr-capucine-lucas.vercel.app/",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "4 Boulevard du Trieux",
        "addressLocality": "Pacé",
        "postalCode": "35740"
      }
    });
  }, [title, description]);

  return null; // Rien ne s'affiche sur le site
}

export default Seo;
