import ProductItem from "./ProductItem";
import SaddlesData from "../data/saddle-datas-2023.json";

const Results = ({ products, code, onReset, goBack }) => {
    console.log("onReset prop:", onReset);
    if (!products || products.length === 0) {
      return (
        <div>
          <h2>Erreur : Aucun produit trouvé</h2>
          <button onClick={onReset}>Recommencer</button>
          <button onClick={goBack}>Retour</button>
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
          {productCodes}
        {productCodes.map((product) => (
          <div key={product}>
            <ProductItem SaddlesData={SaddlesData} productCode={product} lang={lang} />
          </div>
        ))}
        <button onClick={onReset}>Recommencer</button>
        <button onClick={goBack}>Retour</button>
      </div>
    );
  };
export default Results;  