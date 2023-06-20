import StepsNav from "./StepsNav";
import { getTranslation } from "../utils/i18n";

const Step4Oth = ({ onChoice, onReset, goBack, lang, i18n }) => {

    return (
    <div  className="st_step sf_step4">
    <div className="sf_step__buttons sf_step3__buttons">
        <a href="#Cutout" onClick={() => onChoice("CUT")}>
        <img src="https://assets.syncros.com/pages/saddles/icon-saddle-cutout.png" alt="Cutout" height="200"/>
        <label>
            {getTranslation(i18n, "saddletype.cutout", lang, "Cutout")}
        </label>
        </a>
        <a href="#Channel" onClick={() => onChoice("CHA")}>
        <img src="https://assets.syncros.com/pages/saddles/icon-saddle-channel.png" alt="Channel" height="200" />
        <label>
            {getTranslation(i18n, "saddletype.channel", lang, "Channel")}
        </label></a>
    </div>
    <div className="sf_step__question">
        <h2>
        {getTranslation(i18n, "saddletype.question.title", lang, "How do you sit on the bike?")}
        </h2>
        <p>
        {getTranslation(i18n, "saddletype.question.paragraph", lang, "Performance orientated riders tend to be more flexibile in the pelvic and lumbar spine and achieve a lower position while endurance riders with lower flexibility sit more upright.")}
        </p>
    </div>
    <StepsNav onReset={onReset} goBack={goBack} i18n={i18n} lang={lang} />
    </div>
    );
};
export default Step4Oth;