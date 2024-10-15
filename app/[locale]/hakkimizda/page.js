import CommonSection from "@/components/UI/CommonSection";
import AboutSection from "@/components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import MotivationSection from "@/components/UI/MotivationSection";
import Testimonial from "@/components/UI/Testimonial";
import "@/styles/about.css";
import initTranslations from "../../i18n";
import Image from "next/image";

export const metadata = {
  title: "İnoksist Endüstri - Hakkımızda | Güvenilir Bağlantı Elemanları ve Teknik Hırdavat",
  description: "İnoksist Endüstri, 2013 yılından bu yana bağlantı elemanları ve endüstriyel ürünler alanında güvenilir, müşteri odaklı çözümler sunmaktadır. Güven ve kaliteye dayalı hizmet anlayışımızla sektörde öne çıkıyoruz.",
  keywords: "inoksist, bağlantı elemanları, teknik hırdavat, endüstriyel ürünler, paslanmaz civata, paslanmaz somun, inoks civata, inox civata, imbus civata, sanayi ürünleri",
};

const i18nNamespaces = ["about", "motivation", "aboutSection", "testimonial"];

//HAKKIMIZDA
export default async function About({ params: { locale } }) {
  const { t } = await initTranslations(locale, i18nNamespaces);
  const aboutContent = t("about", { returnObjects: true });
  const motivationContent = t("motivation:motivationSection", {
    returnObjects: true,
  });
  const aboutSection = t("aboutSection:aboutSection", { returnObjects: true });
  const testimonialContent = t("testimonial:testimonials", {
    returnObjects: true,
  });
  return (
    <div className="w-100">
      <CommonSection title={aboutContent.title} />
      <AboutSection aboutClass="aboutPage" aboutContent={aboutSection} />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <Image src="https://res.cloudinary.com/di9qvtepw/image/upload/q_auto,f_webp/v1728242900/civata2_xjdmni.jpg" alt="Hakkımızda" width={200} height={100} className="w-100 rounded-3" style={{ width: "auto", height: "auto" }} />
              </div>
            </Col>

            <Col xl="6" lg="12" md="12" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">{aboutContent.sectionTitle}</h2>

                <p className="section__description">{aboutContent.sectionDescription1}</p>

                <p className="section__description">{aboutContent.sectionDescription2}</p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i className="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">{aboutContent.sectionSubtitle}</h6>
                    <h4>
                      <a href="tel:+902125497055" className="contact__info-link">
                        +90 (212) 549 70 55
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <MotivationSection motivationData={motivationContent} />

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
              <h6 className="section__subtitle"> {aboutContent.testimonial_title}</h6>
              <h2 className="section__title"> {aboutContent.testimonial_subtitle}</h2>
            </Col>
            <Testimonial testimonialData={testimonialContent} />
          </Row>
        </Container>
      </section>
    </div>
  );
}
