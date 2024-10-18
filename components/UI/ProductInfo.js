import React from "react";

const ProductInfo = ({ singleProductItem }) => {
  return (
    <div className="product__info2">
      <h2 className="section__title2">{singleProductItem.name}</h2>
      <p className="section__description2">{singleProductItem.description}</p>
    </div>
  );
};

export default ProductInfo;
