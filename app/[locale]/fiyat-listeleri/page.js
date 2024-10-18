import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import initTranslations from "../../i18n";
import "@/styles/price-lists.css";
import PriceListButton from "@/components/UI/PriceListButton";

export const metadata = {
  title: "İnoksist Endüstri - Fiyat Listeleri",
  description: "Bağlantı elemanları, teknik hırdavat, bakım kimyasalları ve modüler su depoları fiyatları hakkında bilgi almak için bizimle iletişime geçin. İnoksist Endüstri olarak kaliteli ürünlerimiz ve rekabetçi fiyatlarımızla hizmetinizdeyiz.",
  keywords: "inoksist, istanbul inox, istanbul civata, bağlantı elemanları fiyatları, teknik hırdavat fiyatları, bakım kimyasalları fiyatları, modüler su deposu fiyatları, paslanmaz civata fiyatları, paslanmaz somun fiyatları, inoks civata, inox civata, imbus civata",
};

const i18nNamespaces = ["price"];

export default async function PriceList({ params: { locale } }) {
  const { t } = await initTranslations(locale, i18nNamespaces);
  const priceContent = t("priceList", { returnObjects: true });

  return (
    <>
      <section className="price-details-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg="12" md="12">
              <div className="price-details-card">
                <Row>
                  <Col md="6" className="image-col">
                    <Image src="https://res.cloudinary.com/di9qvtepw/image/upload/q_auto,f_webp/v1728242929/price_m0tlcn.jpg" alt="Fiyat Listeleri" width={600} height={100} className="img-fluid" />
                  </Col>
                  <Col md="6" className="content-col">
                    <h2 className="price-title">{priceContent.title}</h2>
                    <p className="price-description">
                      {priceContent.description} <strong>{priceContent.strongDescription}</strong> {priceContent.description2}
                    </p>
                    <PriceListButton buttonText={priceContent.buttonText} />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
