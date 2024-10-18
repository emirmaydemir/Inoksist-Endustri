import { Container, Row, Col, Card, CardBody } from "reactstrap";
import CommonSection from "@/components/UI/CommonSection";
import "@/styles/contact.css";
import ContactForm from "@/components/UI/ContactForm";
import initTranslations from "../../i18n";

export const metadata = {
  title: "İletişim - İnoksist Endüstri Paslanmaz Civata Paslanmaz Somun | İstanbul",
  description: "İletişim Bilgileri - İkitelli OSB Mahallesi, İmsan Sanayi Sitesi, E Blok No:3, 34306 Küçükçekmece, İstanbul. Bize +90 (212) 549 70 55 numaralı telefondan veya info@inoksist.com.tr e-posta adresinden ulaşabilirsiniz.",
  keywords: "inoksist, ikitelli civata, imbus civata, m8 civata, inoks civata, inox civata, imbus civata, istanbul civata, İmsan Sanayi Sitesi, Küçükçekmece",
};

const i18nNamespaces = ["contact"];
// İLETİŞİM
export default async function Contact({ params: { locale } }) {
  const { t } = await initTranslations(locale, i18nNamespaces);
  const contactContent = t("contact", { returnObjects: true });

  return (
    <div className="w-100">
      <CommonSection title={contactContent.title} />
      <section>
        <Container>
          {/* Üst Kısım: Kart ile Adres, Telefon, Email ve Sosyal Medya */}
          <Row className="mb-5">
            <Col lg="12">
              <Card className="contact__card p-4">
                <CardBody className="d-flex flex-column flex-md-row align-items-stretch">
                  <Row className="w-100 g-3">
                    {/* Adres */}
                    <Col lg="4" md="12" sm="12" className="mb-3 mb-md-0">
                      <div className="contact__info-box">
                        <p className="fw-bold">{contactContent.addresslabel}</p>
                        <p>İ.O.S.B. Mahallesi, İmsan Sanayi Sitesi, E-3 Blok, Sokak No: 3, Küçükçekmece / İstanbul</p>
                      </div>
                    </Col>

                    {/* Telefon */}
                    <Col lg="4" md="12" sm="12" className="mb-3 mb-md-0">
                      <div className="contact__info-box">
                        <p className="fw-bold"> {contactContent.phonelabel}</p>
                        <a href="tel:+902125497055">+90 (212) 549 70 55</a>
                      </div>
                    </Col>

                    {/* Email */}
                    <Col lg="4" md="12" sm="12" className="mb-3 mb-md-0">
                      <div className="contact__info-box">
                        <p className="fw-bold"> {contactContent.emaillabel}</p>
                        <a href="mailto:info@inoksist.com.tr">info@inoksist.com.tr</a>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>

          {/* Alt Kısım: Google Maps ve Form */}
          <Row className="mt-5">
            {/* Sol Kısım: Google Haritalar */}
            <Col lg="5" md="12" sm="12" className="d-flex align-items-stretch mb-4 mb-md-0">
              <div className="map-container" style={{ width: "100%", height: "500px" }}>
                <iframe title="Google Maps" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6016.617526971584!2d28.787778000000003!3d41.062243!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa591c3cabfa9%3A0x86483f9112bb615f!2s%C4%B0noksist%20Paslanmaz%20Civata%20Somun%20Pul%20Ana%20Tedarik%C3%A7isi!5e0!3m2!1str!2str!4v1726692358510!5m2!1str!2str&gestureHandling=greedy" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
              </div>
            </Col>

            {/* Dikey Çizgi */}
            <Col lg="1" className="d-none d-md-flex justify-content-center">
              <div className="vertical-divider"></div>
            </Col>

            {/* Sağ Kısım: İletişim Formu */}
            <Col lg="6" md="12" sm="12" className="d-flex align-items-stretch">
              <ContactForm contactContent={contactContent} />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
