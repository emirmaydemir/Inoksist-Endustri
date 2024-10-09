"use client";

import React from "react";
import { Container, Row, Col } from "reactstrap";
import "@/styles/become-motivation.css"; // CSS dosyasını içe aktar
import Image from "next/image";

const TrendyolSection = ({ motivationData }) => {
  const handleClick = () => {
    window.open("https://www.trendyol.com/inoksist", "_blank");
  };

  return (
    <section className="become__motivation">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="become__motivation-img">
            <Image
              src="https://res.cloudinary.com/di9qvtepw/image/upload/q_auto,f_webp/v1728242900/civata2_xjdmni.jpg"
              alt="inoksist trendyol"
              width={600} // Genişlik değerini ayarlayın
              height={400} // Yükseklik değerini ayarlayın
              className="w-100"
            />
          </Col>

          <Col lg="6" md="6" sm="12">
            <h2 className="section__title become__motivation-title">
              {motivationData.title}
            </h2>

            <button
              className="btn become__motivation-btn mt-4"
              onClick={handleClick}
            >
              {motivationData.buttonText}
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TrendyolSection;
