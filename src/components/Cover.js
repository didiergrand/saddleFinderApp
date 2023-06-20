import { getTranslation } from "../utils/i18n";

const Cover = ({ onChoice, lang, i18n }) => {
    return (
        <div className="sf_cover">
            <div className="sf_cover__img">
                <button href="#Start" className="btn btn-primary btn-xl center-block" onClick={() => onChoice()}>START</button>
                <img src="https://assets.syncros.com/pages/saddles/2023/find-your-perfect-match-cover.jpg" alt="Saddle Finder" />
            </div>
        </div>
    );
}
export default Cover;