import { Container, Row, Col } from "reactstrap";
import ProductImageGallery from "@/components/UI/ProductImageGallery"; // Client tarafında işlenecek bileşen
import ProductInfo from "@/components/UI/ProductInfo"; // Ürün bilgileri bileşeni
import "@/styles/product-details.css";
import initTranslations from "../../../i18n";

// Metadata ayarlama fonksiyonu
export async function generateMetadata({ params: { locale, slug } }) {
  const i18nNamespaces = ["allData"];
  const { t } = await initTranslations(locale, i18nNamespaces); // Çeviri verilerini yükle
  const data = t("allData", { returnObjects: true });

  const singleProductItem = data.find((item) => item.url === slug);

  if (!singleProductItem) {
    return {
      title: "Urun Bulunamadi",
      description: "Aradiginiz urun bulunamadi.",
    };
  }

  const defaultKeywords = "inoksist, bağlantı elemanları, hırdavat, bakım kimyasalları, modüler su deposu, inoksist, inoks civata, inox civata, paslanmaz civata, paslanmaz somun, paslanmaz pul";
  const keywords = `${singleProductItem.name || ""}, ${defaultKeywords}`;

  return {
    title: `${singleProductItem.name}`,
    description: `${singleProductItem.description}`,
    keywords: keywords.trim(),
    alternates: {
      canonical: `https://www.inoksist.com.tr/${locale === "en" ? "en/" : ""}urun/${slug}`,
    },
  };
}

// ÜRÜN DETAY SAYFASI
export default async function ProductDetails({ params: { locale, slug } }) {
  const i18nNamespaces = ["allData"];
  const { t } = await initTranslations(locale, i18nNamespaces);
  const data = t("allData", { returnObjects: true });

  const singleProductItem = data.find((item) => item.url === slug);
  const title = locale === "tr" ? "Teknik Özellikler" : "Technical Features";

  if (!singleProductItem) {
    return <p>Ürün bulunamadı.</p>; // Ürün yoksa bir mesaj göster
  }

  // JSON-LD verisi oluşturma - google arama sonuçlarında zengin içerik göstermek ve ürünün yanında fotoğraf göstermek için.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: singleProductItem.name,
    image: singleProductItem.images[0],
    description: singleProductItem.description,
    url: `https://www.inoksist.com.tr/${locale === "en" ? "en/" : ""}urun/${slug}`,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      price: "0",
      priceCurrency: "TRY",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.5", // Örnek rating değeri
      reviewCount: "10",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section>
        <Container>
          <Row>
            <Col lg="6" className="d-flex flex-column align-items-center">
              {/* Resim Galerisi */}
              <ProductImageGallery images={singleProductItem.images} name={singleProductItem.name} />
            </Col>

            <Col lg="6">
              {/* Ürün Bilgileri */}
              <ProductInfo singleProductItem={singleProductItem} />
            </Col>
          </Row>

          {/* Ürün Detayları */}
          <div className="product-details-container">
            {/* Teknik Özellikler Başlığı */}
            <Row className="mt-3">
              <Col lg="12">
                <div className="technical-features">
                  <h2 className="technical-features-title">{title}</h2>
                  <hr className="technical-features-line" />
                </div>
              </Col>
            </Row>

            {/* Ürün Tabloları */}
            {singleProductItem.specifications?.length > 0 && (
              <Row className="mt-5">
                <Col lg="12">
                  <div className="section-container2">
                    <h4 className="fw-bold">{singleProductItem.name}</h4>
                    {singleProductItem.title2 && <h5 className="fw-light fst-italic ">{singleProductItem.title2}</h5>}
                    {singleProductItem.title3 && <h6 className="fw-normal">{singleProductItem.title3}</h6>}
                    {singleProductItem.specifications.map((spec, index) => (
                      <div key={index} className="specification-table mb-4">
                        {/* Title varsa göster, yoksa atla */}
                        {spec.title && <h4 className="table-title">{spec.title}</h4>}
                        <div className="table-responsive">
                          {/* Bootstrap responsive tablo sınıfı */}
                          <table className="table table-bordered text-center">
                            <thead>
                              <tr>
                                {spec.headers.map((header, idx) => (
                                  <th key={idx}>{header}</th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {spec.data.map((row, rowIndex) => (
                                <tr key={rowIndex}>
                                  {row.map((cell, cellIndex) => (
                                    <td key={cellIndex}>{cell}</td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    ))}
                  </div>
                </Col>
              </Row>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
