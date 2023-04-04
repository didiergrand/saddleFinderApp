import StepsNav from "./StepsNav";
import { getTranslation } from "../utils/i18n";

const Step3Urb = ({ onChoice, gender, onReset, goBack, i18n, lang }) => {
  let slctdGender = "man";
  console.log(gender);
  if(gender === "F") {
    slctdGender = "woman";
  }
  return(
    <div  className="st_step sf_step3">
    <div className="sf_step__buttons sf_step3__buttons">
      <a href="#Regular" className={slctdGender} onClick={() => onChoice("REG")}>
        <img src={`https://assets.syncros.com/pages/saddles/2023/urban-regular-${slctdGender}.png`} alt="Regular" height="200" />
        <label>
          { getTranslation(i18n, 'urbanposture.regular', lang, 'Regular Posture') }
        </label>
      </a>
      <a href="#Straight" className={slctdGender} onClick={() => onChoice("STR")}>
        <img src={`https://assets.syncros.com/pages/saddles/2023/urban-straight-${slctdGender}.png`} alt="Straights" height="200" />
        <label>
          { getTranslation(i18n, 'urbanposture.straight', lang, 'Straight Posture') }
        </label>
      </a>
    </div>
    <div className="sf_step__question">
      <h2>
      { getTranslation(i18n, 'urbanposture.question.title', lang, 'How do you sit on the bike?') }
      </h2>
      <p>
      { getTranslation(i18n, 'urbanposture.question.paragraph', lang, 'Regular posture riders tend to be more flexibile in the pelvic and lumbar spine and achieve a lower position while straight posture riders with lower flexibility sit more upright.') }
      </p>
    </div>
    <StepsNav onReset={onReset} goBack={goBack} i18n={i18n} lang={lang} />
  </div>
);
  }
export default Step3Urb;