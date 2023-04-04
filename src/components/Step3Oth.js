import StepsNav from "./StepsNav";
import { getTranslation } from "../utils/i18n";


const Step3Other = ({ onChoice, onReset, goBack, lang, i18n }) => {
    return(
      <div  className="st_step sf_step3">
      <div className="sf_step__buttons sf_step3__buttons">
        <a href="#Endurance" onClick={() => onChoice("ENDU")}>
          <img src="https://assets.syncros.com/pages/saddles/icon-man-road-endurance.png" alt="Endurance" height="200" />
          <label>
            { getTranslation(i18n, 'saddletype.endurance', lang, 'Endurance') }
          </label>
        </a>
        <a href="#Performance" onClick={() => onChoice("PERF")}>
          <img src="https://assets.syncros.com/pages/saddles/icon-man-road-performance.png" alt="Performance" height="200" />
          <label>
            { getTranslation(i18n, 'saddletype.performance', lang, 'Performance') }
          </label>
          </a>
      </div>
      <div className="sf_step__question">
        <h2>
        { getTranslation(i18n, 'saddletype.question.title', lang, 'How do you sit on the bike?') }
        </h2>
        <p>
        { getTranslation(i18n, 'saddletype.question.paragraph', lang, 'Performance orientated riders tend to be more flexibile in the pelvic and lumbar spine and achieve a lower position while endurance riders with lower flexibility sit more upright.') }
        </p>
      </div>
      <StepsNav onReset={onReset} goBack={goBack} i18n={i18n} lang={lang} />
    </div>
  );
}
export default Step3Other;