const Step3Urb = ({ onChoice, onReset, goBack }) => {
  return(
    <div  className="st_step sf_step3">
    <h1>Step 3 Urb</h1>
    <div className="sf_step__buttons sf_step3__buttons">
      <a href="#Regular" onClick={() => onChoice("REG")}>
        <img src="https://assets.syncros.com/pages/saddles/sf_concept_regular_road_endurance.png" alt="Regular" height="200" />
        <label>Regular (REG)</label>
      </a>
      <a href="#Straight" onClick={() => onChoice("STR")}>
        <img src="https://assets.syncros.com/pages/saddles/sf_concept_regular_road-performance-v.png" alt="Straights" height="200" />
        <label>Straight (STR)</label>
      </a>
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
export default Step3Urb;