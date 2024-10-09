import React from "react";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image"; // Next.js Image bileşenini içe aktar
import "@/styles/about-section.css"; // CSS dosyasını içe aktar

const AboutSection = ({ aboutClass, aboutContent }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col xl="6" lg="12" md="12">
            <div className="about__section-content">
              <h4 className="section__subtitle">{aboutContent.subtitle}</h4>
              <h2 className="section__title">{aboutContent.title}</h2>
              <p className="section__description">{aboutContent.description}</p>

              <Row>
                {/* İlk iki öğe */}
                <Col lg="6" md="6" sm="6" xs="6">
                  <div className="about__section-item d-flex align-items-center">
                    <i className="ri-checkbox-circle-line"></i>
                    <p className="section__description">
                      {aboutContent.items[0]}
                    </p>
                  </div>
                </Col>
                <Col lg="6" md="6" sm="6" xs="6">
                  <div className="about__section-item d-flex align-items-center">
                    <i className="ri-checkbox-circle-line"></i>
                    <p className="section__description">
                      {aboutContent.items[1]}
                    </p>
                  </div>
                </Col>
              </Row>

              <Row>
                {/* Son iki öğe */}
                <Col lg="6" md="6" sm="6" xs="6">
                  <div className="about__section-item d-flex align-items-center">
                    <i className="ri-checkbox-circle-line"></i>
                    <p className="section__description">
                      {aboutContent.items[2]}
                    </p>
                  </div>
                </Col>
                <Col lg="6" md="6" sm="6" xs="6">
                  <div className="about__section-item d-flex align-items-center">
                    <i className="ri-checkbox-circle-line"></i>
                    <p className="section__description">
                      {aboutContent.items[3]}
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <Image
                src="https://res.cloudinary.com/di9qvtepw/image/upload/q_auto,f_webp/v1728242911/civata3_pkc1ab.jpg"
                alt="About Image"
                width={200}
                height={100}
                className="w-100"
                style={{ width: "auto", height: "auto" }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
