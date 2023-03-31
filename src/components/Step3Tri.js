const Step3Tri = ({ onChoice, onReset, goBack }) => {
  return(
    <div className="st_step sf_step3">
    <h1>Step 3 Tri</h1>
    <div className="sf_step__buttons sf_step3__buttons">
      <a href="#Long" onClick={() => onChoice("LD")}>Long Distance</a>
      <a href="#Short" onClick={() => onChoice("SD")}>Short Distance</a>
    </div>
    <div className="sf_step__question">
      <h2>How do you sit on the bike?</h2>
      <p>Performance orientated riders tend to be more flexibile in the pelvic and lumbar spine and achieve a lower position while endurance riders with lower flexibility sit more upright.</p>
    </div>
    <button onClick={onReset}>Recommencer</button>
    <button onClick={goBack}>Retour</button>
  </div>
  );
}
export default Step3Tri;