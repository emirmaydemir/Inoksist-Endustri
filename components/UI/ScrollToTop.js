"use client"; // Client Component olarak işaretle

import React from "react";

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <a href="#top" onClick={scrollToTop} className="scroll-to-top" aria-label="Sayfanın üstüne git" style={{ textDecoration: "none" }}>
      <i className="ri-arrow-up-s-line"></i> {/* Yukarı ok simgesi */}
    </a>
  );
};

export default ScrollToTop;
