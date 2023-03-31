const Step4Urb = ({ onChoice, onReset, goBack }) => (
    <div  className="st_step sf_step4">
        <h1>Step 4 Urb</h1>
        <div className="sf_step__buttons sf_step3__buttons">
        <a href="#Memory" onClick={() => onChoice("MEM")}>Memory Foam (MEM)</a>
        <a href="#Gel" onClick={() => onChoice("GEL")}>Gel (GEL)</a>
        <a href="#Foam" onClick={() => onChoice("FOA")}>Foam (FOA)</a>
        </div>
        <button onClick={onReset}>Recommencer</button>
        <button onClick={goBack}>Retour</button>
    </div>
);
export default Step4Urb;