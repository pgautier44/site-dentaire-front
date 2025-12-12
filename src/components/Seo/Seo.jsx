// src/components/Seo.jsx
import React from "react";
import { Helmet } from "react-helmet";

function Seo({ title, description, jsonLd }) {
  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
}

export default Seo;
