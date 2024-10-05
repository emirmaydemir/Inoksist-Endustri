import React from "react";

const ProductInfo = ({ singleProductItem }) => {
  return (
    <div className="product__info">
      <h2 className="section__title">{singleProductItem.name}</h2>
      <p className="section__description">{singleProductItem.description}</p>
    </div>
  );
};

export default ProductInfo;
