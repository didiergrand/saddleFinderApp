import StepsNav from "./StepsNav";
import { getTranslation } from "../utils/i18n";

const Step4Urb = ({ onChoice, onReset, goBack, lang, i18n }) => (
    <div  className="st_step sf_step4">
        <h1>Step 4 Urb</h1>
        <div className="sf_step__buttons sf_step3__buttons">
        <a href="#Memory" onClick={() => onChoice("MEM")}>
            <img src="https://assets.syncros.com/pages/saddles/2023/saddle-memory-foam.png" alt="Memory Foam" height="150"/>
            <label>
                {getTranslation(i18n, "saddletype.memory", lang, "Memory Foam")}
            </label>
        </a>
        <a href="#Gel" onClick={() => onChoice("GEL")}>
            <img src="https://assets.syncros.com/pages/saddles/2023/saddle-gel.png" alt="Gel" height="150"/>
            <label>
                {getTranslation(i18n, "saddletype.gel", lang, "Gel")}
            </label>
        </a>
        <a href="#Foam" onClick={() => onChoice("FOA")}>
            <img src="https://assets.syncros.com/pages/saddles/2023/saddle-foam.png" alt="Foam" height="150"/>
            <label>
                {getTranslation(i18n, "saddletype.foam", lang, "Foam")}
            </label>
        </a>
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
export default Step4Urb;