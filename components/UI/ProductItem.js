import React from "react";
import { Col } from "reactstrap";
import Link from "next/link"; // Next.js Link bileşeni
import Image from "next/image"; // Next.js'in optimize edilmiş resim bileşeni
import "@/styles/product-item.css";

const ProductItem = (props) => {
  const { imgUrl, name, url } = props.item;

  // Kategoriye göre URL belirleme fonksiyonu
  /*const getDataByCategory = (category) => {
    switch (category) {
      case "fastenerData":
        return "baglanti-elemanlari";
      case "hardwareData":
        return "teknik-hirdavat";
      case "chemicalData":
        return "bakim-kimyasallari";
      case "waterData":
        return "moduler-su-deposu";
      default:
        return [];
    }
  };*/

  /*function generateSlug(name) {
    return name
      .toLowerCase() // Küçük harfe çevir
      .trim() // Başındaki ve sonundaki boşlukları sil
      .replace(/\s+/g, "-"); // Birden fazla boşluğu tek tire ile değiştir
  }*/

  //const product = getDataByCategory(category);

  //const slugName = generateSlug(name); // Slug'ı oluştur

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="product__item">
        <div className="product__img">
          <Link
            href={`/urun/${url}`}
            aria-label={`${name} ürününün detay sayfasını görüntüle`}
            passHref
          >
            {/* Next.js Image bileşeni ile optimize edilmiş resim */}
            <Image
              src={imgUrl}
              alt={name}
              className="w-100"
              loading="lazy"
              layout="responsive"
              width={300}
              height={300}
            />
          </Link>
        </div>

        <div className="product__img-content mt-4">
          <h4 className="section__title text-center">{name}</h4>
        </div>
      </div>
    </Col>
  );
};

export default ProductItem;
