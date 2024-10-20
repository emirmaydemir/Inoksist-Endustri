import React from "react";
import "@/styles/WhatsAppButton.css";

const WhatsAppButton = () => {
  const phoneNumber = "+905059911714"; // WhatsApp numaranı burada gir

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      aria-label="WhatsApp üzerinden bizimle iletişime geçin"
    >
      <i className="ri-whatsapp-line"></i> {/* WhatsApp simgesi */}
    </a>
  );
};

export default WhatsAppButton;
