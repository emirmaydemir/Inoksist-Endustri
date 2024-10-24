import fs from "fs";
import path from "path";

//export const revalidate = 60;

export default function sitemap() {
  const baseUrl = "https://www.inoksist.com.tr/"; // Burayı canlı URL ile değiştirin

  // JSON dosyasının yolunu belirtin
  const filePath = path.join(process.cwd(), "locales", "tr", "allData.json");

  // JSON dosyasını okuyun
  const jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  // Dilleri belirleyin
  const locales = ["tr", "en"];

  // Ürünlerin URL'lerini oluşturun
  const productUrls = locales.flatMap((locale) =>
    jsonData.allData.map((product) => ({
      url: locale === "tr" 
      ? `${baseUrl}/urun/${product.url}`
      : `${baseUrl}/${locale}/urun/${product.url}`,
      lastModified: new Date(),
      changeFrequency: "never", // Değişiklik sıklığı
      priority: 0.8, // Öncelik ayarları
    }))
  );

  // Statik URL'leri oluşturun
  const staticUrls = locales.flatMap((locale) => {
    const baseUrlWithLocale = locale === "tr" ? baseUrl : `${baseUrl}/${locale}`;
    return [
    {
      url: baseUrlWithLocale,
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 1,
    },
    {
      url: `${baseUrlWithLocale}/hakkimizda`,
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.8,
    },
    {
      url: `${baseUrlWithLocale}/baglanti-elemanlari/urunler`,
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.8,
    },
    {
      url: `${baseUrlWithLocale}/hirdavat/urunler`,
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.8,
    },
    {
      url: `${baseUrlWithLocale}/bakim-kimyasallari/urunler`,
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.8,
    },
    {
      url: `${baseUrlWithLocale}/moduler-su-deposu/urunler`,
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.8,
    },
    {
      url: `${baseUrlWithLocale}/fiyat-listeleri`,
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.8,
    },
    {
      url: `${baseUrlWithLocale}/iletisim`,
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.8,
    },
    {
      url: `${baseUrlWithLocale}/baglanti-elemanlari/paslanmaz-baglanti-elemanlari`,
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.8,
    },
    {
      url: `${baseUrlWithLocale}/baglanti-elemanlari/celik-baglanti-elemanlari`,
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.8,
    },
    {
      url: `${baseUrlWithLocale}/baglanti-elemanlari/demir-baglanti-elemanlari`,
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.8,
    },
    {
      url: `${baseUrlWithLocale}/baglanti-elemanlari/pirinc-baglanti-elemanlari`,
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.8,
    },
    {
      url: `${baseUrlWithLocale}/baglanti-elemanlari/titanyum-baglanti-elemanlari`,
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.8,
    },
    {
      url: `${baseUrlWithLocale}/baglanti-elemanlari/ozel-uretim-baglanti-elemanlari`,
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.8,
    },
    {
      url: `${baseUrlWithLocale}/baglanti-elemanlari/10-9-ve-12-9-baglanti-elemanlari`,
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.8,
    },
    {
      url: `${baseUrlWithLocale}/baglanti-elemanlari/kama-baglanti-elemanlari`,
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.8,
    },
    {
      url: `${baseUrlWithLocale}/hirdavat/delme-kesme-yaglari-grubu`,
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.8,
    },
    {
      url: `${baseUrlWithLocale}/hirdavat/is-guvenligi-grubu`,
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.8,
    },
    {
      url: `${baseUrlWithLocale}/hirdavat/kaynak-ekipmanlari-grubu`,
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.8,
    },
    {
      url: `${baseUrlWithLocale}/hirdavat/kesici-ve-asindirici-grubu`,
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.8,
    },
    {
      url: `${baseUrlWithLocale}/hirdavat/ambalaj-ve-paketleme-grubu`,
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.8,
    },
    {
      url: `${baseUrlWithLocale}/hirdavat/silikon-ve-sizdirmazlik-grubu`,
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.8,
    },
    {
      url: `${baseUrlWithLocale}/hirdavat/sprey-boya`,
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.8,
    },
    {
      url: `${baseUrlWithLocale}/hirdavat/yapistirici-grubu`,
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.8,
    },
    {
      url: `${baseUrlWithLocale}/hirdavat/el-aletleri`,
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.8,
    },
    {
      url: `${baseUrlWithLocale}/hirdavat/profesyonel-el-aletleri`,
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.8,
    },
    {
      url: `${baseUrlWithLocale}/bakim-kimyasallari/bakim-kimyasallari`,
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.8,
    },
    {
      url: `${baseUrlWithLocale}/bakim-kimyasallari/paslanmaz-spreyler`,
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.8,
    },
    {
      url: `${baseUrlWithLocale}/moduler-su-deposu/moduler-su-deposu`,
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.8,
    },
  ];
});

  // Sitemap yapısını oluşturun
  return [...staticUrls, ...productUrls];
}
