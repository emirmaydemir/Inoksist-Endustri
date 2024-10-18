import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import Link from "next/link"; // Next.js Link bileşeni
import "@/styles/footer.css";
import Image from "next/image";

const Footer = ({ footerData }) => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="12" md="12" sm="12" className="mb-4">
            <div className="d-flex justify-content-center align-items-center">
              <Link
                href="/"
                aria-label="Ana Sayfaya Git"
                style={{
                  display: "inline-block", // Link'i sadece resimle sınırlıyoruz.
                  width: "auto",
                  height: "auto",
                  marginRight: "50px",
                  marginLeft: "10px",
                }}
              >
                <Image
                  src="https://res.cloudinary.com/di9qvtepw/image/upload/q_auto,f_webp/v1728242917/inoksist_wwxbpw.png"
                  alt="İnoksist"
                  width={400}
                  height={100}
                  className="custom-logo"
                  style={{ display: "block", width: "auto", height: "auto" }} // Resmi blok yapıp düzgün yerleştiriyoruz
                />
              </Link>
            </div>

            <p className="footer__logo-content">{footerData.info.description}</p>
          </Col>

          <Col lg="3" md="6" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">{footerData.categories.title}</h5>
              <ListGroup>
                {footerData.quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link href={item.path} aria-label={`${item.display} sayfasına git`}>
                      {item.display}
                    </Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="5" md="6" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">{footerData.contactInfo.title}</h5>
              <p className="office__info">İ.O.S.B. Mahallesi, İmsan Sanayi Sitesi, E-3 Blok, Sokak No: 3, Küçükçekmece, İstanbul</p>
              <p className="office__info">{footerData.contactInfo.phone} +90 (212) 549 70 55</p>

              <p className="office__info">{footerData.contactInfo.email}&nbsp;info@inoksist.com.tr</p>

              <p className="office__info">{footerData.contactInfo.hours} 9.00 - 19.00</p>
            </div>
          </Col>

          <Col lg="4" md="12" sm="12">
            <div>
              <h5 className="footer__link-title">{footerData.getInTouch.title}</h5>
              <p className="section__descriptionn">{footerData.getInTouch.description}</p>
              <div className="newsletter">
                <input type="email" placeholder="Email" />
                <Link href="/iletisim" className="newsletter-link">
                  <i className="ri-send-plane-line"></i>
                </Link>
              </div>
              <h5 className="footer__link-title mt-4">{footerData.social.title}</h5>
              <div className="social-icons mt-3 mb-4">
                {footerData.socialLinks.map((link, index) => (
                  <a key={index} href={link.url} target="_blank" rel="noreferrer" aria-label={`${link.display} sosyal medya profilimize git`}>
                    <i className={link.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </Col>

          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__descriptionn d-flex align-items-center justify-content-between gap-1 pt-4">
                <span>
                  <i className="ri-copyright-line"></i>
                  {year} {footerData.footerBottom.text} inoksist.com.tr ®
                </span>
                <a href="https://emirmaydemir.github.io/" target="_blank" rel="noreferrer" aria-label="GitHub profilime git" style={{ textDecoration: "none", color: "inherit" }}>
                  <span>DigiSoftware</span>
                </a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
