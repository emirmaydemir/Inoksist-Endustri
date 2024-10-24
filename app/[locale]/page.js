import React from "react";
import initTranslations from "../i18n";
import { Container, Row, Col } from "reactstrap";
import "@/styles/find-product-form.css";
import AboutSection from "@/components/UI/AboutSection";
import ServicesList from "@/components/UI/ServicesList";
import HeroSlider from "@/components/UI/HeroSlider";
import Testimonial from "@/components/UI/Testimonial";
import Image from "next/image"; // next/image'den içe aktar

import TrendyolSection from "@/components/UI/TrendyolSection";

export async function generateMetadata({ params: { locale } }) {
  return {
    alternates: {
      canonical: `https://www.inoksist.com.tr/${locale === "en" ? "en" : ""}`,
    },
  };
}

const i18nNamespaces = ["services", "homeSlider", "aboutSection", "motivation", "testimonial", "service"];

export default async function HomePage({ params: { locale } }) {
  const { t } = await initTranslations(locale, i18nNamespaces);
  const homeContent = t("services_title", { returnObjects: true });
  const testimonialContent = t("testimonial", { returnObjects: true });
  const servicesData = t("services", { returnObjects: true });
  const sliderContent = t("homeSlider:homeSlider", { returnObjects: true });
  const aboutContent = t("aboutSection:aboutSection", { returnObjects: true });
  const motivationData = t("motivation:trendyolSection", {
    returnObjects: true,
  });
  const testimonialData = t("testimonial:testimonials", {
    returnObjects: true,
  });

  return (
    <>
      {/* Hero Section */}
      <section className="p-0 hero__slider-section">
        <HeroSlider sliderContent={sliderContent} />

        <div className="hero__form">
          <Container>
            <Row className="form__row">
              <Col lg="12" md="12" sm="12">
                <div className="find__cars-right">
                  <Image src="https://res.cloudinary.com/di9qvtepw/image/upload/q_auto,f_webp/v1729684121/referanslar_pm4msh.jpg" alt="Sponsorlar" loading="eager" width={1300} height={100} className="img-fluid" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      {/* About Section */}
      <AboutSection aboutContent={aboutContent} />
      {/* Services Section */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">{homeContent.title}</h6>
              <h2 className="section__title">{homeContent.subtitle}</h2>
            </Col>
            <ServicesList servicesData={servicesData} />
          </Row>
        </Container>
      </section>
      {/* Become a Driver Section */}
      <TrendyolSection motivationData={motivationData} />
      {/* Testimonial Section */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
              <h6 className="section__subtitle">{testimonialContent.title}</h6>
              <h2 className="section__title">{testimonialContent.subtitle}</h2>
            </Col>

            <Testimonial testimonialData={testimonialData} />
          </Row>
        </Container>
      </section>
    </>
  );
}
