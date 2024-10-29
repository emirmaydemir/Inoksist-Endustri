import React from "react";
import Link from "next/link";

const ProductInfo = ({ singleProductItem, language }) => {
  return (
    <div className="product__info2">
      <h2 className="section__title2">{singleProductItem.name}</h2>
      <p className="section__description2">{singleProductItem.description}</p>
      <Link href={`/${language === "en" ? "en/" : ""}iletisim`} aria-label="İletişim sayfasına git">
        <button className="button-teklif-al mt-2">Teklif Al</button>
      </Link>
    </div>
  );
};

export default ProductInfo;
