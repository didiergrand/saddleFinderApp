const ProductItem = ({ name, description, url, images }) => {
  return (
    <>
      <section>
        <h3>{name}</h3>
        <p>{description}</p>
      </section>
    </>
  );
};

export default ProductItem;
