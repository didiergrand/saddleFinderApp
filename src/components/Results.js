import ProductItem from "./ProductItem";
import MainProductItem from "./MainProductItem";
import SaddlesData from "../data/saddle-datas-2023.json";
import StepsNav from "./StepsNav";

const Results = ({ products, lang, i18n, onReset, goBack, codeArray }) => {
  if (!products || products.length === 0) {
    return (
      <div>
        <h2>Erreur : Aucun produit trouvé</h2>
        <button onClick={onReset}>Recommencer</button>
        <button onClick={goBack}>Retour</button>
      </div>
    );
  }
  console.log("codeArray" + codeArray.join(""));

  const codeArrayString = codeArray.join("");
  const productList = Array.isArray(products) ? products : [products];

  const productCodes = productList
    .map((product, index) => {
      return product[codeArrayString];
    })
    .flat();

  return (
    <div className="st_step sf_result">
      <h2>Selles recommandées </h2>
      <div className="sf_result__list">
      {productCodes.map((product, index) => (
          index === 0 ? (
            <MainProductItem
              key={product}
              SaddlesData={SaddlesData}
              productCode={product}
              lang={lang}
            />
          ) : (
            <div className="sf_result__items">
              <h3>As an alternative</h3>
            <ProductItem
              key={product}
              SaddlesData={SaddlesData}
              productCode={product}
              lang={lang}
            />
            </div>
          )
      ))}
      </div>
      <StepsNav goBack={goBack} onReset={onReset} i18n={i18n} lang={lang} />
    </div>
  );
};
export default Results;
