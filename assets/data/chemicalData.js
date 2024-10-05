// Bakım Kimyasalları
import { Chemical_img_urls } from "./imageUrls";

const chemicalData = [
  // --Bakım Kimyasalları--
  {
    id: 1,
    name: "Kalıp Ayırıcı Sprey (Silikonlu / Silikonsuz)",
    images: [Chemical_img_urls.img01], // Resim URL'leri dizisi
    imgUrl: Chemical_img_urls.img01,
    categoryId: 1,
    category: "chemicalData",
    description:
      "Kalıp ayırıcı spreyler, kalıp ve yüzeylerin temiz ve kolay ayrılmasını sağlamak için özel olarak formüle edilmiştir. Silikonlu kalıp ayırıcı sprey, silikon bazlı formülü sayesinde mükemmel ayırma performansı ve pürüzsüz bir yüzey elde edilmesini sağlar, özellikle yüksek sıcaklık ve basınç altında etkili sonuçlar sunar. Bu sprey, kalıptan ürünlerin kolayca ayrılmasını sağlayarak üretim sürecinde zaman ve iş gücü tasarrufu sağlar. Öte yandan, silikonsuz kalıp ayırıcı spreyler, silikon içermeyen formülü ile hassas yüzeyler ve özel uygulamalar için idealdir. Silikonsuz seçenekler, yüzeylerde herhangi bir kalıntı bırakmaz ve özellikle boyama, kaplama veya yapıştırma işlemlerinde mükemmel sonuçlar sağlar. Her iki seçenek de çeşitli endüstriyel uygulamalarda yüksek kalite ve performans sağlar, böylece üretim süreçlerinizde güvenilir ve etkili sonuçlar elde edebilirsiniz.",
  },
  {
    id: 2,
    name: "Fren Balata Endüstriyel Temizleyici",
    images: [Chemical_img_urls.img02], // Resim URL'leri dizisi
    imgUrl: Chemical_img_urls.img02,
    categoryId: 1,
    category: "chemicalData",
    description:
      "Fren balata endüstriyel temizleyici, fren sistemlerindeki kir, yağ ve tozları etkili bir şekilde temizler. Güçlü çözücü formülü sayesinde, fren balatalarının ve bileşenlerinin yüzeylerini derinlemesine temizler ve performansını artırır. Hızla buharlaşarak kalıntı bırakmaz ve endüstriyel kullanıma uygundur. Performans sorunlarını önler ve fren sistemlerinin uzun ömürlü olmasını sağlar.",
  },
  {
    id: 3,
    name: "Sıvı Gres",
    images: [Chemical_img_urls.img03], // Resim URL'leri dizisi
    imgUrl: Chemical_img_urls.img03,
    categoryId: 1,
    category: "chemicalData",
    description:
      "Sıvı gres, hareketli parçaların yağlanması ve sürtünmenin azaltılması için özel olarak formüle edilmiştir. Yüksek kaliteli yağlama özelliği ile makine ve ekipmanların performansını artırır ve aşınmayı önler. Ayrıca, geniş sıcaklık aralığında etkili olup, korozyona ve oksidasyona karşı koruma sağlar. Endüstriyel uygulamalar için ideal bir çözüm sunar, uzun ömür ve güvenilir performans sağlar.",
  },
  {
    id: 4,
    name: "Gazaltı Kaynak Spreyi (Silikonsuz)",
    images: [Chemical_img_urls.img04], // Resim URL'leri dizisi
    imgUrl: Chemical_img_urls.img04,
    categoryId: 1,
    category: "chemicalData",
    description:
      "Gazaltı kaynak spreyi, kaynak işlemleri sırasında kaynak mahallinde kalıntı ve birikintileri azaltmak için silikonsuz formüle edilmiştir. Metal yüzeylerde temiz bir kaynağın sağlanmasına yardımcı olur ve kaynak kalitesini artırır. Silikonsuz içeriği, boya ve kaplama işlemlerine zarar vermeden, pürüzsüz ve temiz bir yüzey sağlar. Yüksek performansı ve hızlı buharlaşma özellikleri ile endüstriyel kaynak işlemlerinde güvenilir bir çözümdür.",
  },
  {
    id: 5,
    name: "Pas Sökücü",
    images: [Chemical_img_urls.img05], // Resim URL'leri dizisi
    imgUrl: Chemical_img_urls.img05,
    categoryId: 1,
    category: "chemicalData",
    description:
      "Pas sökücü, metal yüzeylerdeki pas, oksidasyon ve kirleri etkili bir şekilde çözmek ve temizlemek için formüle edilmiştir. Güçlü çözücü özelliği sayesinde, paslanmış ve kirlenmiş yüzeyleri hızla temizler, böylece metallerin ömrünü uzatır ve işleme uygunluklarını artırır. Kullanımı kolaydır ve endüstriyel bakım süreçlerinde mükemmel sonuçlar sağlar. Pas sökücü, metal yüzeylerin bakımını kolaylaştırır ve yüksek performanslı temizlik sunar.",
  },
  {
    id: 6,
    name: "W 44 T® Multi Sprey",
    images: [Chemical_img_urls.img06], // Resim URL'leri dizisi
    imgUrl: Chemical_img_urls.img06,
    categoryId: 1,
    category: "chemicalData",
    description:
      "W 44 T® Multi Sprey, çok amaçlı bir temizleyici ve koruyucu sprey olarak çeşitli uygulamalar için ideal bir üründür. Metal yüzeylerden, plastiklere ve diğer malzemelere kadar geniş bir yelpazede etkili temizlik ve bakım sağlar. Pas, korozyon ve kirleri çözerek yüzeyleri temizler, aynı zamanda koruyucu bir kaplama oluşturarak uzun süreli korunma sağlar. Hızla buharlaşır ve kalıntı bırakmadan etkili sonuçlar sunar. Endüstriyel ve ev kullanımı için uygun, yüksek performanslı bir çözüm sunar.",
  },
  {
    id: 7,
    name: "Paslanmaz Çelik-Sprey - özel açık",
    images: [Chemical_img_urls.img07], // Resim URL'leri dizisi
    imgUrl: Chemical_img_urls.img07,
    categoryId: 1,
    category: "chemicalData",
    description:
      "Paslanmaz çelik spreyi, paslanmaz çelik yüzeylere özel formülü ile mükemmel temizlik ve koruma sağlar. Metal yüzeylerdeki pas ve kirleri etkili bir şekilde temizlerken, yüzeyin doğal parlaklığını geri kazandırır. Ayrıca, koruyucu bir kaplama oluşturarak uzun süreli dayanıklılık ve estetik sağlar. Hızla buharlaşır, kalıntı bırakmaz ve yüzeyde temiz bir görünüm sağlar. Endüstriyel ve ev kullanımı için ideal, yüksek performanslı bir çözümdür.",
  },
  {
    id: 8,
    name: "Alüminyum Sprey A-400 - parlak",
    images: [Chemical_img_urls.img08], // Resim URL'leri dizisi
    imgUrl: Chemical_img_urls.img08,
    categoryId: 1,
    category: "chemicalData",
    description:
      "Alüminyum Sprey A-400, parlak ve estetik bir kaplama sağlayarak alüminyum yüzeylerde mükemmel sonuçlar sunar. Bu özel formül, alüminyum yüzeylere yüksek parlaklık ve koruma kazandırırken, aynı zamanda yüzeydeki kusurları ve renk farklılıklarını giderir. Hızla kurur ve uzun ömürlü, dayanıklı bir kaplama sağlar. Endüstriyel ve dekoratif uygulamalar için ideal olan bu sprey, estetik ve koruma ihtiyaçlarınıza yüksek performanslı bir çözüm sunar.",
  },
  {
    id: 9,
    name: "Paslanmaz Çelik Bakım Spreyi",
    images: [Chemical_img_urls.img09], // Resim URL'leri dizisi
    imgUrl: Chemical_img_urls.img09,
    categoryId: 1,
    category: "chemicalData",
    description:
      "Paslanmaz çelik bakım spreyi, paslanmaz çelik yüzeylerin temizliği ve korunması için özel olarak formüle edilmiştir. Yüzeydeki kirleri, parmak izlerini ve lekeleri etkili bir şekilde temizlerken, metalin doğal parlaklığını geri kazandırır. Koruyucu kaplama, yüzeyin korozyona karşı dayanıklılığını artırır ve uzun süreli koruma sağlar. Hızla buharlaşır ve kalıntı bırakmadan pürüzsüz bir görünüm sunar. Hem endüstriyel hem de ev kullanımı için ideal, yüksek performanslı bir bakım çözümüdür.",
  },
  {
    id: 10,
    name: "Çinko Sprey",
    images: [Chemical_img_urls.img10], // Resim URL'leri dizisi
    imgUrl: Chemical_img_urls.img10,
    categoryId: 1,
    category: "chemicalData",
    description:
      "Çinko sprey, metal yüzeylerde mükemmel korozyon koruması sağlar. Çinko bazlı formülü sayesinde, yüzeylerde koruyucu bir kaplama oluşturarak pas ve oksidasyona karşı üstün direnç sunar. Metal parçaların uzun ömürlü ve dayanıklı olmasına yardımcı olur, ayrıca hızlı kurur ve kalıntı bırakmadan pürüzsüz bir kaplama sağlar. Endüstriyel, otomotiv ve yapı uygulamaları için ideal bir çözüm olan çinko sprey, metal yüzeylerin korunmasında etkili bir üründür.",
  },
];

export default chemicalData;
