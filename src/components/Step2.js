import StepsNav from "./StepsNav";
import { getTranslation } from "../utils/i18n";

const Step2 = ({ onChoice, onReset, lang, i18n, goBack }) => {
    return(
    <div className="st_step sf_step2">
    <div className="sf_step__buttons sf_step2__buttons">
      <a href="#Triathlon" onClick={() => onChoice("TRI")}>
        <img src="https://assets.syncros.com/pages/saddles/2023/discipline-triathlon.jpg" alt="Triathlon" width="400" />
        <label>{ getTranslation(i18n, 'discipline.triathlon', lang, 'Triathlon') }</label>
      </a>
      <a href="#Road" onClick={() => onChoice("RO")}>
        <img src="https://assets.syncros.com/pages/saddles/2023/discipline-road.jpg" alt="Road" width="400" />
        <label>
        { getTranslation(i18n, 'discipline.road', lang, 'Road') }
        </label>
      </a>
      <a href="#Gravel" onClick={() => onChoice("GRA")}>
        <img src="https://assets.syncros.com/pages/saddles/2023/discipline-gravel.jpg" alt="Gravel" width="400" />
        <label>
          { getTranslation(i18n, 'discipline.gravel', lang, 'Gravel') }
        </label>
      </a>
      <a href="#XC" onClick={() => onChoice("XC")}>
        <img src="https://assets.syncros.com/pages/saddles/2023/discipline-cross-country.jpg" alt="Cross Country" width="400" />
        <label>
          { getTranslation(i18n, 'discipline.xc', lang, 'Cross Country') }
        </label>
      </a>
      <a href="#Trail" onClick={() => onChoice("TRA")}>
        <img src="https://assets.syncros.com/pages/saddles/2023/discipline-trail.jpg" alt="Trail" width="400" />
        <label>
          { getTranslation(i18n, 'discipline.trail', lang, 'Trail') }
        </label></a>
      <a href="#Enduro" onClick={() => onChoice("EN")}>
        <img src="https://assets.syncros.com/pages/saddles/2023/discipline-enduro.jpg" alt="Enduro" width="400" />
        <label>
          { getTranslation(i18n, 'discipline.enduro', lang, 'Enduro') }
        </label>
      </a>
      <a href="#DH" onClick={() => onChoice("DH")}>
        <img src="https://assets.syncros.com/pages/saddles/2023/discipline-dh-dirt.jpg" alt="DH" width="400" />
        <label>
          { getTranslation(i18n, 'discipline.dh', lang, 'DH') }
        </label>
        </a>
      <a href="#TT" onClick={() => onChoice("TT")}>
        <img src="https://assets.syncros.com/pages/saddles/2023/discipline-tt.jpg" alt="TT" width="400" />
        <label>
          { getTranslation(i18n, 'discipline.tt', lang, 'TT') }
        </label>
      </a>
      <a href="#Urban" onClick={() => onChoice("URB")}>
        <img src="https://assets.syncros.com/pages/saddles/2023/discipline-urban.jpg" alt="Urban" width="400" />
        <label>
          { getTranslation(i18n, 'discipline.urban', lang, 'Urban') }
        </label>
      </a>
    </div>
    <div className="sf_step__question">
      <h2>
        { getTranslation(i18n, 'discipline.question.title', lang, 'What is your discipline?') }
      </h2>
      <p>
        { getTranslation(i18n, 'discipline.question.paragraph', lang, 'Select the discipline that best describes your riding style.') }
      </p>
    </div>
    <StepsNav onReset={onReset} goBack={goBack} i18n={i18n} lang={lang} />
  </div>
);
};
export default Step2;