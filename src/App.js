import React, { useState } from "react";
import Results from "./components/Results";
import SaddlesTree from "./data/saddle-tree-2023.json";
import './App.css';
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3Tri from "./components/Step3Tri";
import Step3Urb from "./components/Step3Urb";
import Step3Oth from "./components/Step3Oth";
import Step4Urb from "./components/Step4Urb";
import Step4Oth from "./components/Step4Oth";

const App = () => {
  const [step, setStep] = useState(1);
  const [code, setCode] = useState("");

  const handleChoice = (choice) => {
    setCode(code + choice);
    setStep(step + 1);
  };

  const handleReset = () => {
    console.log(
      "Resetting the app. This will reset the step to 1 and the code to an empty string."
    );
    setStep(1);
    setCode("");
  };
  const handleBackButton = () => {
    if (step > 1) {
      setStep(step - 1);
      window.history.pushState(null, "", `#${step - 1}`);
    }
  };

  const products = SaddlesTree;

  return (

    <div className="st_step sf_start">
      {step === 1 && (<Step1 onChoice={handleChoice} />)}
      {step === 2 && (<Step2 onChoice={handleChoice} onReset={handleReset} goBack={handleBackButton} code={code} />)}
      {step === 3 && !code.includes("TT") && !code.includes("DH") && <Step3 onChoice={handleChoice} code={code} products={products} onReset={handleReset} goBack={handleBackButton}  />}
      {step === 4 && !code.includes("TT") && !code.includes("DH") && !code.includes("TRI") && (<Step4 onChoice={handleChoice} code={code} products={products} onReset={handleReset} goBack={handleBackButton} />)}
      {(step === 5 || (step === 3 && code.includes("TT")) || (step === 3 && code.includes("DH")) || (step === 4 && code.includes("TRI"))) && (
        <Results products={products} code={code} onReset={handleReset} goBack={handleBackButton} />
      )}
    </div>

  );
};


const Step3 = ({ onChoice, code, products, onReset, goBack}) => {
  const isUrban = code.includes("URB");
  const isTriathlon = code.includes("TRI");
  const isTT = code.includes("TT");
  const isDH = code.includes("DH");

  if (isTriathlon) {
    return (<Step3Tri
    onChoice={onChoice} 
    onReset={onReset}
    goBack={goBack}
    />);
  } else if (isTT) {
    return ( 
      <Results
        products={products}
        onReset={onReset}
        goBack={goBack}
      />
    );
  } else if (isDH) {
    return (
      <Results
        products={products}
        onReset={onReset}
        goBack={goBack}
      />
    );
  } else if (isUrban) {
    return (
      <Step3Urb
      onChoice={onChoice}
      onReset={onReset}
      goBack={goBack} 
    />
    );
  } else {
    return (<Step3Oth
      onChoice={onChoice}
      onReset={onReset}
      goBack={goBack}
    />);
  }
};

const Step4 = ({ onChoice, code, products, onReset, goBack }) => {
  const isUrban = code.includes("URB");
  const isTriathlon = code.includes("TRI");

  if (isUrban) {
    return   <Step4Urb 
    onChoice={onChoice}
    onReset={onReset}
    goBack={goBack} 
   />;
  } else if (isTriathlon) {
    return (
      <Results
        products={products}
        onReset={onReset}
      />
    );
  } else {
    return (
      <Step4Oth 
      onChoice={onChoice} 
      onReset={onReset} 
      goBack={goBack}
    />
    );
  }
};

export default App;
