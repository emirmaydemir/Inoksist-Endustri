import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import initTranslations from "../../i18n";
import "@/styles/price-lists.css";
import PriceListButton from "@/components/UI/PriceListButton";

export async function generateMetadata({ params: { locale } }) {
  return {
    title: "İnoksist Endüstri - Fiyat Listeleri",
    description: "Bağlantı elemanları, hırdavat, bakım kimyasalları ve modüler su depoları fiyatları hakkında bilgi almak için bizimle iletişime geçin. İnoksist Endüstri olarak kaliteli ürünlerimiz ve rekabetçi fiyatlarımızla hizmetinizdeyiz.",
    keywords: "inoksist, istanbul inox, istanbul civata, bağlantı elemanları fiyatları, hırdavat fiyatları, bakım kimyasalları fiyatları, modüler su deposu fiyatları, paslanmaz civata fiyatları, paslanmaz somun fiyatları, inoks civata, inox civata, imbus civata",
    alternates: {
      canonical: `https://www.inoksist.com.tr/${locale === "en" ? "en/" : ""}fiyat-listeleri`,
    },
  };
}

const i18nNamespaces = ["price"];

export default async function PriceList({ params: { locale } }) {
  const { t } = await initTranslations(locale, i18nNamespaces);
  const priceContent = t("priceList", { returnObjects: true });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "İnoksist Endüstri kimdir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "2013 yılında temelleri atılan İnoksist Endüstri, geçmişten gelen bilgi birikimi ve ürün tecrübesi ile bağlantı elemanları ve endüstriyel ürünler alanında kısa sürede sektörde kendisine önemli bir yer edinmiştir. Müşteri memnuniyetine odaklı bir yaklaşım ile, güven ilkesini temel alarak hizmet vermektedir.",
        },
      },
      {
        "@type": "Question",
        name: "İnoksist Endüstri'nin sunduğu hizmetler nelerdir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "İnoksist Endüstri, yüksek kalite standartlarına sahip geniş ürün yelpazesi ile bağlantı elemanları, hırdavat, bakım kimyasalları ve modüler su depoları gibi çeşitli endüstriyel ürünler sunmaktadır.",
        },
      },
      {
        "@type": "Question",
        name: "İnoksist Endüstri Paslanmaz Civata Paslanmaz Somun ürünlerinin fiyatları nedir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bağlantı elemanları, hırdavat, bakım kimyasalları ve modüler su depolarının güncel fiyatları hakkında bilgi almak için bizimle iletişime geçin. İnoksist Endüstri olarak kaliteli ürünlerimiz ve rekabetçi fiyatlarımızla hizmetinizdeyiz.",
        },
      },
      {
        "@type": "Question",
        name: "İnoksist Endüstri’nin en popüler ürünleri hangileridir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En popüler ürünlerimiz arasında DIN 912 İmbus, DIN 934 Altı Köşe Somun, DIN 125 Düz Rondela ve DIN 933 Altı Köşe Başlı Tam Paso Civata bulunmaktadır.",
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
