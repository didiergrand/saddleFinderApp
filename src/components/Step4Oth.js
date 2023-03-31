const Step4Oth = ({ onChoice, onReset, goBack }) => {
    return (
    <div  className="st_step sf_step4">
    <h1>Step 4 Oth</h1>
    <div className="sf_step__buttons sf_step3__buttons">
        <a href="#Cutout" onClick={() => onChoice("CUT")}>
        <img src="https://assets.syncros.com/pages/saddles/icon-saddle-cutout.png" alt="Cutout" height="200"/>
        <label>Cutout (CUT)</label>
        </a>
        <a href="#Channel" onClick={() => onChoice("CHA")}>
        <img src="https://assets.syncros.com/pages/saddles/icon-saddle-channel.png" alt="Channel" height="200" />
        <label>Channel (CHA)</label></a>
    </div>
    <div className="sf_step__question">
        <h2>How do you sit on the bike?</h2>
        <p>Performance orientated riders tend to be more flexibile in the pelvic and lumbar spine and achieve a lower position while endurance riders with lower flexibility sit more upright.</p>
    </div>
    <button onClick={onReset}>Recommencer</button>
    <button onClick={goBack}>Retour</button>
    </div>
    );
};
export default Step4Oth;