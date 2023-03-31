const Step1 = ({ onChoice }) => (
  <div className="st_step sf_step1">
    <h1>Step 1</h1>
    <div className="sf_step__buttons sf_step1__buttons">
        <a href="#Male" className="sf_step1__button_M" onClick={() => onChoice("M")}>
        <img src="https://assets.syncros.com/pages/saddles/icon-man.png" alt="Male" height="200" />
        <label> Male (M)</label>
        </a>
        <a href="#Female" className="sf_step1__button_F" onClick={() => onChoice("F")}>
        <img src="https://assets.syncros.com/pages/saddles/icon-woman.png" alt="Female" height="200" />
        <label>Female (F) </label>
        </a>
    </div>
    <div className="sf_step__question">
        <h2>Who are you?</h2>
        <p>Please choose male or female</p>
    </div>
  </div>
);
export default Step1;