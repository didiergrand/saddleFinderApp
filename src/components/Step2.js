const Step2 = ({ onChoice, onReset, goBack }) => {


    return(
    <div className="st_step sf_step2">
    <h1>Step 2</h1>
    <div className="sf_step__buttons sf_step2__buttons">
      <a href="#Triathlon" onClick={() => onChoice("TRI")}>
        <img src="https://assets.syncros.com/pages/saddles/discipline-triathlon.jpg" alt="Triathlon" width="400" />
        <label>Triathlon (TRI)</label>
      </a>
      <a href="#Road" onClick={() => onChoice("RO")}>
        <img src="https://assets.syncros.com/pages/saddles/discipline-road.jpg" alt="Road" width="400" />
        <label>Road (RO)</label>
      </a>
      <a href="#Gravel" onClick={() => onChoice("GRA")}>
        <img src="https://assets.syncros.com/pages/saddles/discipline-gravel.jpg" alt="Gravel" width="400" />
        <label>Gravel (GRA)</label>
      </a>
      <a href="#XC" onClick={() => onChoice("XC")}>
        <img src="https://assets.syncros.com/pages/saddles/discipline-xc.jpg" alt="Cross Country" width="400" />
        <label>Cross Country (XC)</label>
      </a>
      <a href="#Trail" onClick={() => onChoice("TRA")}>
        <img src="https://assets.syncros.com/pages/saddles/discipline-trail.jpg" alt="Trail" width="400" />
        <label>Trail (TRA)</label></a>
      <a href="#Enduro" onClick={() => onChoice("EN")}>
        <img src="https://assets.syncros.com/pages/saddles/discipline-enduro.jpg" alt="Enduro" width="400" />
        <label>Enduro (EN)</label>
      </a>
      <a href="#DH" onClick={() => onChoice("DH")}>
        <img src="https://assets.syncros.com/pages/saddles/discipline-dh.jpg" alt="DH" width="400" />
        <label>DH / Dirt (DH)</label>
        </a>
      <a href="#TT" onClick={() => onChoice("TT")}>
        <img src="https://assets.syncros.com/pages/saddles/discipline-tt.jpg" alt="TT" width="400" />
        <label>TT (TT)</label>
      </a>
      <a href="#Urban" onClick={() => onChoice("URB")}>
        <img src="https://assets.syncros.com/pages/saddles/discipline-urban.jpg" alt="Urban" width="400" />
        <label>Urban (URB)</label>
      </a>
    </div>
    <div className="sf_step__question">
      <h2>What do you ride?</h2>
      <p>Each discipline has a different position and riding style. Select the one to match your riding. Position will come next</p>
    </div>
        <button onClick={onReset}>Recommencer</button>
        <button onClick={goBack}>Retour</button>
  </div>
);
};
export default Step2;