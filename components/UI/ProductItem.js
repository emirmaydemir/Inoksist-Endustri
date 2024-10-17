import React from "react";
import { Col } from "reactstrap";
import Link from "next/link"; // Next.js Link bileşeni
import Image from "next/image"; // Next.js'in optimize edilmiş resim bileşeni
import "@/styles/product-item.css";

const ProductItem = (props) => {
  const { imgUrl, name, url } = props.item;

  function imageLoader(config) {
    const urlStart = config.src.split("upload/")[0];
    const urlEnd = config.src.split("upload/")[1];
    const format = "webp";
    const transformations = `q_${config.quality || "auto"},f_${format}`;
    return `${urlStart}upload/${transformations}/${urlEnd}`;
  }

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="product__item">
        <div className="product__img">
          <Link href={`/urun/${url}`} aria-label={`${name} ürününün detay sayfasını görüntüle`} passHref>
            <div className="image-container">
              <Image loader={imageLoader} src={imgUrl} alt={name} fill style={{ objectFit: "contain" }} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" quality="auto" />
            </div>
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
