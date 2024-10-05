"use client";
import React, { useState } from "react";

const ProductImageGallery = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0]);
  const [zoomStyle, setZoomStyle] = useState({});

  const handleImageClick = (imgUrl) => {
    setMainImage(imgUrl);
  };

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100; // Mouse'un yatay konumu
    const y = ((e.pageY - top) / height) * 100; // Mouse'un dikey konumu
    setZoomStyle({
      transformOrigin: `${x}% ${y}%`,
      transform: "scale(2)", // Resim 2 kat büyütülür (zoom yapılır).
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({ transform: "scale(1)" }); // Zoom sıfırlanır.
  };

  return (
    <>
      {/* Ana resim */}
      <div
        className="main-image-container"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={mainImage}
          alt="Main Product"
          className="main-image"
          style={zoomStyle}
          loading="lazy"
        />
      </div>
      {/* Küçük kartlar */}
      <div className="thumbnail-container mt-3 d-flex justify-content-center flex-wrap">
        {images.map((imgUrl, index) => (
          <img
            key={index}
            src={imgUrl}
            alt={`Thumbnail ${index}`}
            className="img-thumbnail custom-thumbnail"
            onClick={() => handleImageClick(imgUrl)}
            loading="lazy"
          />
        ))}
      </div>
    </>
  );
};

export default ProductImageGallery;
