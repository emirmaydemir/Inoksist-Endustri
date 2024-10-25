"use client";
import React from "react";
import { Container } from "reactstrap";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import styled from "styled-components";
import "@/styles/hero-slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const SliderItem = styled.div`
  position: relative;
  max-width: 100%;
  height: 650px;
  background: linear-gradient(rgb(0, 13, 107, 0.5), rgb(0, 13, 107, 0.5));
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media only screen and (max-width: 992px) {
    height: 530px;
    max-width: 100vw;
  }

  @media only screen and (max-width: 768px) {
    height: 450px;
  }
`;

const SliderImageContain = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const SliderImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgb(0, 13, 107, 0.5), rgb(0, 13, 107, 0.5));
  z-index: 1;
`;

const SliderContent = styled.div`
  position: relative;
  z-index: 2;
  padding-top: 150px;

  h4 {
    color: #fff;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 3.2rem;
    font-weight: 600;
    color: #fff;
    margin-bottom: 1.5rem;

    @media only screen and (max-width: 992px) {
      font-size: 2rem;
    }

    @media only screen and (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  @media only screen and (max-width: 992px) {
    margin-top: -50px;
  }
`;

const ReserveButton = styled.button`
  background: #fff !important;
  color: #000d6b !important;
  border: none;
  border-radius: 8px;
  outline: none;
  padding: 0.4rem 1.2rem;
  font-weight: 600;

  &:hover {
    background: #000d6b;
    color: #fff;
  }
`;

const HeroSlider = ({ sliderContent }) => {
  const settings = {
    fade: true,
    speed: 1800,
    autoplaySpeed: 3000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  return (
    <Slider {...settings} className="hero__slider">
      {sliderContent.map((slide, index) => (
        <SliderItem key={index}>
          <SliderImageContain>
            <SliderImage
              src={slide.image}
              alt={slide.heading}
              width={1300}
              height={600}
              loading="priority"
              srcSet={`
                ${slide.image}?w=300 300w,
                ${slide.image}?w=600 600w,
                ${slide.image}?w=1200 1200w
              `}
              sizes="(max-width: 600px) 100vw, 600px"
            />
            <Overlay />
          </SliderImageContain>
          <Container>
            <SliderContent>
              <h4>{slide.title}</h4>
              <h1>{slide.heading}</h1>
              <ReserveButton className="reserve__btn mt-4">
                <Link href={slide.link} aria-label="İletişim sayfasına git">
                  {slide.buttonText}
                </Link>
              </ReserveButton>
            </SliderContent>
          </Container>
        </SliderItem>
      ))}
    </Slider>
  );
};

export default HeroSlider;
