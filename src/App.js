import React, { useState } from "react";
import Results from "./components/Results";
import SaddlesTree from "./data/saddle-tree-2023.json";
import './App.css';

const App = () => {
  const [step, setStep] = useState(1);
  const [code, setCode] = useState("");

  const handleChoice = (choice) => {
    setCode(code + choice);
    setStep(step + 1);
  };

  const handleReset = () => {
    setStep(1);
    setCode("");
  };

  const products = SaddlesTree;

  return (

    <div className="st_step sf_start">
      {step === 1 && <Step1 onChoice={handleChoice} />}
      {step === 2 && <Step2 onChoice={handleChoice} code={code} />}
      {step === 3 && !code.includes("TT") && !code.includes("DH") && <Step3 onChoice={handleChoice} code={code} products={products} handleReset={handleReset} />}
      {step === 4 && !code.includes("TT") && !code.includes("DH") && !code.includes("TRI") && <Step4 onChoice={handleChoice} code={code} products={products} handleReset={handleReset} />}
      {(step === 5 || (step === 3 && code.includes("TT")) || (step === 3 && code.includes("DH")) || (step === 4 && code.includes("TRI"))) && (
        <Results products={products} code={code} onReset={handleReset} />
      )}
    </div>

  );
};

const Step1 = ({ onChoice }) => (
  <div className="st_step sf_step1">
    <button onClick={() => onChoice("M")}>
      <img src="https://assets.syncros.com/pages/saddles/icon-man.png" />
      Male (M)
    </button>
    <button onClick={() => onChoice("F")}>
      <img src="https://assets.syncros.com/pages/saddles/icon-woman.png" />
      Female (F)</button>
    <h2>Who are you?</h2>
    <p>Please choose male or female</p>
  </div>
);

const Step2 = ({ onChoice }) => (
  <div className="st_step sf_step2">
    <h2>What do you ride?</h2>
    <button onClick={() => onChoice("TRI")}>Triathlon (TRI)</button>
    <button onClick={() => onChoice("TT")}>TT (TT)</button>
    <button onClick={() => onChoice("RO")}>Road (RO)</button>
    <button onClick={() => onChoice("GRA")}>Gravel (GRA)</button>
    <button onClick={() => onChoice("XC")}>Cross Country (XC)</button>
    <button onClick={() => onChoice("TRA")}>Trail (TRA)</button>
    <button onClick={() => onChoice("EN")}>Enduro (EN)</button>
    <button onClick={() => onChoice("DH")}>DH / Dirt (DH)</button>
    <button onClick={() => onChoice("URB")}>Urban (URB)</button>
  </div>
);

const Step3 = ({ onChoice, code, products, handleReset }) => {
  const isUrban = code.includes("URB");
  const isTriathlon = code.includes("TRI");
  const isTT = code.includes("TT");
  const isDH = code.includes("DH");

  if (isTriathlon) {
    return <Step3Triathlon onChoice={onChoice} />;
  } else if (isTT) {
    return ( 
      <Results
        products={products}
        onReset={handleReset}
      />
    );
  } else if (isDH) {
    return (
      <Results
        products={products}
        onReset={handleReset}
      />
    );
  } else if (isUrban) {
    return <Step3Urban onChoice={onChoice} />;
  } else {
    return <Step3Other onChoice={onChoice} />;
  }
};

const Step4 = ({ onChoice, code, products, handleReset }) => {
  const isUrban = code.includes("URB");
  const isTriathlon = code.includes("TRI");

  if (isUrban) {
    return <Step4Urban onChoice={onChoice} />;
  } else if (isTriathlon) {
    return (
      <Results
        products={products}
        onReset={handleReset}
      />
    );
  } else {
    return <Step4Other onChoice={onChoice} />;
  }
};

const Step3Triathlon = ({ onChoice }) => (
  <div className="st_step sf_step3">
    <h2>What distance do you ride?</h2>
    <button onClick={() => onChoice("LD")}>Long Distance</button>
    <button onClick={() => onChoice("SD")}>Short Distance</button>
  </div>
);

const Step3Urban = ({ onChoice }) => (
  <div  className="st_step sf_step3">
    <h2>How do you sit on the bike?</h2>
    <button onClick={() => onChoice("REG")}>Regular (REG)</button>
    <button onClick={() => onChoice("STR")}>Straight (STR)</button>
  </div>
);

const Step3Other = ({ onChoice }) => (
  <div  className="st_step sf_step3">
    <h2>How do you sit on the bike?</h2>
    <button onClick={() => onChoice("ENDU")}>Endurance (ENDU)</button>
    <button onClick={() => onChoice("PERF")}>Performance (PERF)</button>
  </div>
);

const Step4Urban = ({ onChoice }) => (
  <div  className="st_step sf_step4">
    <h2>What material do you prefer?</h2>
    <button onClick={() => onChoice("MEM")}>Memory Foam (MEM)</button>
    <button onClick={() => onChoice("GEL")}>Gel (GEL)</button>
    <button onClick={() => onChoice("FOA")}>Foam (FOA)</button>
  </div>
);

const Step4Other = ({ onChoice }) => (
  <div  className="st_step sf_step4">
    <h2>What type of Saddle do you prefer?</h2>
    <button onClick={() => onChoice("CUT")}>Cutout (CUT)</button>
    <button onClick={() => onChoice("CHA")}>Channel (CHA)</button>
  </div>
);

export default App;
