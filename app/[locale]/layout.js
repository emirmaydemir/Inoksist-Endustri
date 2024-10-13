import "./globals.css";
import WhatsAppButton from "@/components/UI/WhatsAppButton";
import ToastNotifications from "@/components/UI/ToastNotifications";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Fragment } from "react";
import i18nConfig from "@/i18nConfig";
import initTranslations from "../i18n";
import TranslationsProvider from "@/components/TranslationsProvider";
import { notFound } from "next/navigation";
import Head from "next/head";

const i18nNamespaces = ["footer", "navLinks"];

export const metadata = {
  title: "İnoksist Endüstri Paslanmaz Civata Paslanmaz Somun",
  description: "İnoksist Endüstri Paslanmaz Civata Paslanmaz Somun, İnox Civata Tedarikçisi",
  keywords: "inoksist, inoks civata , inox civata, paslanmaz civata, paslanmaz somun, paslanmaz pul, rondela, norm civata, standart civata, istanbul civata, ikitelli civata ,civata ithalatçısı, yarıklı pim, krom civata, krom somun, krom pul, setskur, imbus, alyan, krom vida, bağlantı elemanları",
};

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params: { locale } }) {
  if (!i18nConfig.locales.includes(locale)) {
    notFound();
  }
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  const footerData = t("footer", { returnObjects: true });
  const navLinks = t("navLinks:navLinks", { returnObjects: true });
  const search = t("navLinks:search", { returnObjects: true });
  return (
    <html lang={locale}>
      <Head>
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        {/* Buraya Google Fonts ve diğer meta etiketlerini ekleyin */}
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600;700;900&display=swap" rel="stylesheet" />
        <link rel="preload" href="https://cdn.jsdelivr.net/npm/remixicon/fonts/remixicon.css" as="style" onLoad="this.onload=null;this.rel='stylesheet'" />
      </Head>
      <TranslationsProvider namespaces={i18nNamespaces} locale={locale} resources={resources}>
        <body>
          <Fragment>
            <Header navLinks={navLinks} search={search} locale={locale}></Header>
            <main>{children}</main>
            <WhatsAppButton />
            <Footer footerData={footerData} />
            <ToastNotifications />
          </Fragment>
        </body>
      </TranslationsProvider>
    </html>
  );
}
