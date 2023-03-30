import ProductItem from "./ProductItem";
import SaddlesData from "../data/saddle-datas-2023.json";

const Results = ({ products, code, onReset }) => {
    console.log(products);
    if (!products || products.length === 0) {
      return (
        <div>
          <h2>Erreur : Aucun produit trouvé</h2>
          <button onClick={onReset}>Recommencer</button>
        </div>
      );
    }

    const lang = "en";

    const productList = Array.isArray(products) ? products : [products];

    const productCodes = productList.map((product, index) => {
        return product[code];
    }).flat();

    return (
      <div  className="st_step sf_result">
        <h2>Selles recommandées </h2>
        {productCodes.map((product) => (
          <div key={product}>
            <ProductItem name={SaddlesData[product].name[lang]} description={SaddlesData[product].description[lang]} images={SaddlesData[product].images} />
          </div>
        ))}
      </div>
    );
  };
export default Results;  