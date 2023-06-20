import React, { useState } from "react";
import Results from "./components/Results";
import SaddlesTree from "./data/saddle-tree-2023.json";
import SaddlesI18n from "./data/saddle-i18n-2023.json";
import './App.css';
import Cover from "./components/Cover";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3Tri from "./components/Step3Tri";
import Step3Urb from "./components/Step3Urb";
import Step3Oth from "./components/Step3Oth";
import Step4Urb from "./components/Step4Urb";
import Step4Oth from "./components/Step4Oth";
import { getTranslation } from "./utils/i18n";


const App = () => {
  const [step, setStep] = useState(0);
  const [latestChoice, setLatestChoice] = useState("");
  const [codeArray, setCodeArray] = useState([]);
  const [gender, setGender] = useState("");
  const code = codeArray.join("");


  // get url
  const url = window.location.href;
  // get lang from url
  const urlLang = url.split("/")[4];
  let lang = "en";
  // set lang
  if(urlLang === "de" || urlLang === "fr" || urlLang === "it" || urlLang === "en" || urlLang === "es" || urlLang === "cs") {
    lang = urlLang;
  }

  const handleChoice = (choice) => {
    if(step === 1){
      setGender(choice);
    }
    setLatestChoice(choice);
    setStep(step + 1);
    // add the choice to the array
    setCodeArray(codeArray.concat(choice));
  };

  const handleReset = () => {
    setStep(1);
    setCodeArray([]); // reset the codeArray
  };
  const handleBackButton = () => {
    if (step > 1) {
      setStep(step - 1);
      window.history.pushState(null, "", `#${step - 1}`);
      // remove the last choice from the array
      setCodeArray(prevCodeArray => prevCodeArray.slice(0, -1));
    } else {
      setStep(0);
      setCodeArray([]); // reset the codeArray
    }
  };

  const products = SaddlesTree;
  const i18n = SaddlesI18n;
  return (
<>
    <h2>{ getTranslation(i18n, 'title', lang, 'Find your perfect match')} </h2>
    <div className="st_step sf_start">
      {step === 0 && (<Cover onChoice={handleChoice} lang={lang} i18n={i18n} />)}
      {step === 1 && (<Step1 onChoice={handleChoice} lang={lang} i18n={i18n} />)}
      {step === 2 && (<Step2 onChoice={handleChoice} lang={lang} i18n={i18n} onReset={handleReset} goBack={handleBackButton} code={code} latestChoice={latestChoice} />)}
      {step === 3 && 
        !code.includes("TT") && !code.includes("DH") && 
        <Step3 onChoice={handleChoice} lang={lang} i18n={i18n} gender={gender} code={code} products={products} onReset={handleReset} goBack={handleBackButton} codeArray={codeArray} />}
      {step === 4 && !code.includes("TT") && !code.includes("DH") && !code.includes("TRI") && (
        <Step4 onChoice={handleChoice} lang={lang} i18n={i18n} code={code} products={products} onReset={handleReset} goBack={handleBackButton} codeArray={codeArray} />)}
      {(step === 5 || (step === 3 && code.includes("TT")) || (step === 3 && code.includes("DH")) || (step === 4 && code.includes("TRI"))) && (
        <Results products={products} lang={lang} i18n={i18n} code={code} onReset={handleReset} goBack={handleBackButton} codeArray={codeArray} />
      )}
    </div>
    </>
  );
};


const Step3 = ({ onChoice, code, gender, products, onReset, goBack, codeArray, lang, i18n}) => {
  const isUrban = code.includes("URB");
  const isTriathlon = code.includes("TRI");
  const isTT = code.includes("TT");
  const isDH = code.includes("DH");
  if (isTriathlon) {
    return (<Step3Tri
    onChoice={onChoice} 
    onReset={onReset}
    goBack={goBack}
    lang={lang}
    i18n={i18n}
    />);
  } else if (isTT) {
    return ( 
      <Results
        products={products}
        onReset={onReset}
        goBack={goBack}
        codeArray={codeArray}
        lang={lang}
        i18n={i18n}
      />
    );
  } else if (isDH) {
    return (
      <Results
        products={products}
        onReset={onReset}
        goBack={goBack}
        codeArray={codeArray}
        lang={lang}
        i18n={i18n}
      />
    );
  } else if (isUrban) {
    return (
      <Step3Urb
      gender={gender}
      onChoice={onChoice}
      onReset={onReset}
      goBack={goBack} 
      lang={lang}
      i18n={i18n}
    />
    );
  } else {
    return (<Step3Oth
      onChoice={onChoice}
      onReset={onReset}
      goBack={goBack}
      lang={lang}
      i18n={i18n}
      codeArray={codeArray}
    />);
  }
};

const Step4 = ({ onChoice, code, products, onReset, goBack, lang, i18n }) => {
  const isUrban = code.includes("URB");
  const isTriathlon = code.includes("TRI");

  if (isUrban) {
    return   <Step4Urb 
    onChoice={onChoice}
    onReset={onReset}
    goBack={goBack} 
    lang={lang}
    i18n={i18n}
   />;
  } else if (isTriathlon) {
    return (
      <Results
        products={products}
        onReset={onReset}
        lang={lang}
        i18n={i18n}
      />
    );
  } else {
    return (
      <Step4Oth 
      onChoice={onChoice} 
      onReset={onReset} 
      goBack={goBack}
      lang={lang}
      i18n={i18n}
    />
    );
  }
};

export default App;
