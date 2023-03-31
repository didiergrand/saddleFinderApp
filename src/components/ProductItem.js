const ProductItem = ({ SaddlesData, productCode, lang }) => {
    const product = SaddlesData[productCode];
  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div>
      <h3>{product.name?.[lang]}</h3>
      <p>{product.description?.[lang]}</p>
      <img src={product.images?.[0]} alt={product.name?.[lang]} height="100" />
    </div>
  );
};

export default ProductItem;

