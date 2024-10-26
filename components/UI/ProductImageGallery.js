"use client";
import React, { useState } from "react";
import Image from "next/image";

const ProductImageGallery = ({ images, name }) => {
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

  function imageLoader(config) {
    const urlStart = config.src.split("upload/")[0];
    const urlEnd = config.src.split("upload/")[1];
    const format = "webp";
    const transformations = `q_${config.quality || "auto"},f_${format}`;
    return `${urlStart}upload/${transformations}/${urlEnd}`;
  }

  return (
    <>
      {/* Ana resim */}
      <div className="main-image-container" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
        <Image loader={imageLoader} src={mainImage} fill alt={`${name} - Ana Resim`} className="main-image" style={zoomStyle} quality="auto" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
      </div>
      {/* Küçük kartlar */}
      <div className="thumbnail-container mt-3 d-flex justify-content-center flex-wrap">
        {images.map((imgUrl, index) => (
          <div key={index}>
            <Image loader={imageLoader} key={index} src={imgUrl} width={100} height={100} alt={`${name} - Resim ${index + 1}`} className="img-thumbnail custom-thumbnail" onClick={() => handleImageClick(imgUrl)} quality="auto" />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductImageGallery;
