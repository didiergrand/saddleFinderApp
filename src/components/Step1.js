import StepsNav from "./StepsNav";
import { getTranslation } from "../utils/i18n";

const Step1 = ({ onChoice, onReset, goBack, lang, i18n }) => {
  return(
  <div className="st_step sf_step1">
    <div className="sf_step__buttons sf_step1__buttons">
        <a href="#Male" className="sf_step1__button_M" onClick={() => onChoice("M")}>
        <img src="https://assets.syncros.com/pages/saddles/icon-man.png" alt="Male" height="200" />
        <label>
          { getTranslation(i18n, 'gender.male', lang, 'Male') }
        </label>
        </a>
        <a href="#Female" className="sf_step1__button_F" onClick={() => onChoice("F")}>
        <img src="https://assets.syncros.com/pages/saddles/icon-woman.png" alt="Female" height="200" />
        <label>
          { getTranslation(i18n, 'gender.female', lang, 'Female')}
        </label>
        </a>
    </div>
    <div className="sf_step__question">
      <h2>
      { getTranslation(i18n, 'gender.question.title', lang, 'Who are you?')}
      </h2>
      <p>
      { getTranslation(i18n, 'gender.question.paragraph', lang, 'Who are you?')}
      </p>
    </div>
  </div>
)};
export default Step1;