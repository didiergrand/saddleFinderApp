import { getTranslation } from "../utils/i18n";

const ProductItem = ({ SaddlesData, productCode, lang, i18n }) => {
    const product = SaddlesData[productCode];
  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="sf_product_item">
      <img src={product.images?.[0]} alt={product.name?.[lang]} height="200" />
      <h3>{product.name?.[lang]}</h3>
      <a href={product.url}>{getTranslation(i18n, 'nav.detail', lang, 'Product details')}</a>
    </div>
  );
};

export default ProductItem;

