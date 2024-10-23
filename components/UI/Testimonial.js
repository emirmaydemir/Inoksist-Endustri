"use client";
import React from "react";
import Slider from "react-slick";
import "@/styles/testimonial.css";
import Image from "next/image"; // Resim bileşenini içe aktarın

const Testimonial = ({ testimonialData }) => {
  const images = ["https://res.cloudinary.com/di9qvtepw/image/upload/q_auto,f_webp/v1728505455/DIN933_m5dpff.jpg", "https://res.cloudinary.com/di9qvtepw/image/upload/q_auto,f_webp/v1728504834/DIN912_mr8lvv.jpg", "https://res.cloudinary.com/di9qvtepw/image/upload/q_auto,f_webp/v1729686516/din-934-alti-kose-somunn__xmc45d.jpg", "https://res.cloudinary.com/di9qvtepw/image/upload/q_auto,f_webp/v1729686885/duz-rondela_yftjlg.png"];

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
