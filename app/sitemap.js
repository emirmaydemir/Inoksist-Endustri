import fs from "fs";
import path from "path";

//export const revalidate = 60;

export default function sitemap() {
  const baseUrl = "https://inoksist.com.tr"; // Burayı canlı URL ile değiştirin

  // JSON dosyasının yolunu belirtin
  const filePath = path.join(process.cwd(), "locales", "tr", "allData.json");

  // JSON dosyasını okuyun
  const jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  // Dilleri belirleyin
  const locales = ["tr", "en"];

  // Ürünlerin URL'lerini oluşturun
  const productUrls = locales.flatMap((locale) =>
    jsonData.allData.map((product) => ({
      url: `${baseUrl}/${locale}/urun/${product.url}`, // Slug ile dinamik URL oluşturun
      lastModified: new Date(),
      changeFrequency: "never", // Değişiklik sıklığı
      priority: 0.8, // Öncelik ayarları
    }))
  );

  // Statik URL'leri oluşturun
  const staticUrls = locales.flatMap((locale) => [
    {
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 1,
    },
    {
      url: `${baseUrl}/${locale}/hakkimizda`,
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/${locale}/baglanti-elemanlari/urunler`,
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/${locale}/hirdavat/urunler`,
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/${locale}/bakim-kimyasallari/urunler`,
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/${locale}/moduler-su-deposu/urunler`,
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/${locale}/fiyat-listeleri`,
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/${locale}/iletisim`,
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/${locale}/baglanti-elemanlari/paslanmaz-baglanti-elemanlari`,
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/${locale}/baglanti-elemanlari/celik-baglanti-elemanlari`,
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/${locale}/baglanti-elemanlari/demir-baglanti-elemanlari`,
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/${locale}/baglanti-elemanlari/pirinc-baglanti-elemanlari`,
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/${locale}/baglanti-elemanlari/titanyum-baglanti-elemanlari`,
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/${locale}/baglanti-elemanlari/ozel-uretim-baglanti-elemanlari`,
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/${locale}/baglanti-elemanlari/10-9-ve-12-9-baglanti-elemanlari`,
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/${locale}/baglanti-elemanlari/kama-baglanti-elemanlari`,
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/${locale}/hirdavat/delme-kesme-yaglari-grubu`,
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/${locale}/hirdavat/is-guvenligi-grubu`,
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/${locale}/hirdavat/kaynak-ekipmanlari-grubu`,
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/${locale}/hirdavat/kesici-ve-asindirici-grubu`,
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/${locale}/hirdavat/ambalaj-ve-paketleme-grubu`,
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/${locale}/hirdavat/silikon-ve-sizdirmazlik-grubu`,
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/${locale}/hirdavat/sprey-boya`,
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/${locale}/hirdavat/yapistirici-grubu`,
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/${locale}/hirdavat/el-aletleri`,
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/${locale}/hirdavat/profesyonel-el-aletleri`,
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/${locale}/bakim-kimyasallari/bakim-kimyasallari`,
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/${locale}/bakim-kimyasallari/paslanmaz-spreyler`,
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/${locale}/moduler-su-deposu/moduler-su-deposu`,
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.8,
    },
  ]);

  // Sitemap yapısını oluşturun
  return [...staticUrls, ...productUrls];
}
