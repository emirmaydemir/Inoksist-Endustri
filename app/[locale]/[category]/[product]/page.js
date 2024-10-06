// pages/fastener-listing.js
import { Container, Row } from "reactstrap";
import CommonSection from "@/components/UI/CommonSection";
import FastenerListingClient from "@/components/UI/FastenerListingClient";
import initTranslations from "../../../i18n";

// BAĞLANTI ELEMANLARI
export default async function FastenerListing({
  params: { locale, category, product },
}) {
  const i18nNamespaces = ["categories", category];
  const { t } = await initTranslations(locale, i18nNamespaces);
  const headerContent = t("header", { returnObjects: true });
  const categoriesContent = t(`${category}`, { returnObjects: true });
  const fastenerData = t(`${category}:${category}`, {
    returnObjects: true,
  });

  let headerTitle;

  switch (category) {
    case "baglanti-elemanlari":
      headerTitle = headerContent.fastener;
      break;
    case "teknik-hirdavat":
      headerTitle = headerContent.technical;
      break;
    case "bakim-kimyasallari":
      headerTitle = headerContent.maintenance;
      break;
    case "moduler-su-deposu":
      headerTitle = headerContent.modular;
      break;
    default:
      headerTitle = headerContent.all; // Varsayılan olarak "Tüm Kategoriler"
      break;
  }

  return (
    <div className="w-100">
      <CommonSection title={headerTitle} />

      <section>
        <Container>
          <Row>
            {/* Client-Side Component */}
            <FastenerListingClient
              fastenerData={fastenerData}
              categoriesContent={categoriesContent}
              headerContent={headerContent}
              product={product}
              category={category}
            />
          </Row>
        </Container>
      </section>
    </div>
  );
}
