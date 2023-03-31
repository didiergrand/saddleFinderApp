const Step3Other = ({ onChoice, onReset, goBack }) => {
    return(
      <div  className="st_step sf_step3">
      <h1>Step 3 Oth</h1>
      <div className="sf_step__buttons sf_step3__buttons">
        <a href="#Endurance" onClick={() => onChoice("ENDU")}>
          <img src="https://assets.syncros.com/pages/saddles/icon-man-road-endurance.png" alt="Endurance" height="200" />
          <label>Endurance (ENDU)</label>
        </a>
        <a href="#Performance" onClick={() => onChoice("PERF")}>
          <img src="https://assets.syncros.com/pages/saddles/icon-man-road-performance.png" alt="Performance" height="200" />
          <label>Performance (PERF)</label>
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
export default Step3Other;