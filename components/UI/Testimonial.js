"use client";
import React from "react";
import Slider from "react-slick";
import "@/styles/testimonial.css";
import Image from "next/image"; // Resim bileşenini içe aktarın

const Testimonial = ({ testimonialData }) => {
  const images = ["https://res.cloudinary.com/di9qvtepw/image/upload/v1728505455/DIN933_m5dpff.jpg", "https://res.cloudinary.com/di9qvtepw/image/upload/v1728488379/966202298_ntgmwm.jpg", "https://res.cloudinary.com/di9qvtepw/image/upload/v1728506082/DIN1587_ijftle.jpg", "https://res.cloudinary.com/di9qvtepw/image/upload/v1728506651/DIN6921_f1cvym.jpg"];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 1500,
    slidesToShow: 3,
    draggable: true,
    touchMove: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {testimonialData.map((item, index) => (
        <div key={item.id} className="product-slide py-4 px-3">
          <div className="product-image mb-3">
            <Image
              src={images[index]} // Resmin kaynağı
              alt={`Urun ${item.title}`}
              fill
              style={{ objectFit: "contain" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <h5 className="product-title mb-2">{item.title}</h5>
          <p className="product-description">{item.description}</p>
        </div>
      ))}
    </Slider>
  );
};

export default Testimonial;
