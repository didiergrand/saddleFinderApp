import { getTranslation } from "../utils/i18n";

const StepsNav = ({ goBack, onReset, lang, i18n }) => {
  return (
    <div className="sf_step__nav">
        <button onClick={goBack}><i className="far fa-chevron-left"></i>
          { getTranslation(i18n, 'nav.back', lang, 'Back') }
        </button>
        <button onClick={onReset}><i className="far fa-Undo-alt"></i>
          { getTranslation(i18n, 'nav.reset', lang, 'Reset') }
        </button>
    </div>
  );
}
export default StepsNav;