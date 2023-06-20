import React, { useState } from "react";
import { getTranslation } from "../utils/i18n";

const MainProductItem = ({ SaddlesData, productCode, lang, i18n }) => {
  let [mainImage, setMainImage] = useState(SaddlesData[productCode].images?.[0]);

  const product = SaddlesData[productCode];
  if (!product) {
    return <div>Product not found.</div>;
  }
  
  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  return (
    <div className="sf_product_mainitem">
      <div className="sf_product_mainitem__img">
        <img src={mainImage} alt={product.name?.[lang]} height="400" />
      </div>
      <div className="sf_product_mainitem__gallery">
        {product.images?.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={product.name?.[lang]}
            height="100"
            onClick={() => handleThumbnailClick(image)}
          />
        ))}
      </div>
      <div className="sf_product_mainitem__description">
        <h3>{product.name?.[lang]}</h3>
        <p>{product.description?.[lang]}</p>
        <a href={`https://www.syncros.com/product/${product.url}`}>{getTranslation(i18n, 'nav.detail', lang, 'Product details')}</a>
      </div>
    </div>
  );
};

export default MainProductItem;
