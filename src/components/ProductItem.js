const ProductItem = ({ SaddlesData, productCode, lang }) => {
    const product = SaddlesData[productCode];
  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="sf_product_item">
      <img src={product.images?.[0]} alt={product.name?.[lang]} height="200" />
      <h3>{product.name?.[lang]}</h3>
    </div>
  );
};

export default ProductItem;

