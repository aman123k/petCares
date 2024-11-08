import React from "react";

function GoogleMap({ pbParam }: { pbParam: string }) {
  const mapUrl = `https://www.google.com/maps/embed?pb=${pbParam}`;

  return (
    <>
      <iframe
        src={mapUrl}
        width="600"
        height="450"
        style={{ border: "0" }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </>
  );
}

export default GoogleMap;
