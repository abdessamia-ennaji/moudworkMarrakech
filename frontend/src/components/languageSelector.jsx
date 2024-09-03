import {useTranslation} from "react-i18next";

const languages = [
  {code: "en", lang: "English", flag: "https://www.flaticon.com/media/dist/min/img/flags/en.svg"},
  {code: "fr", lang: "French", flag: "https://www.flaticon.com/media/dist/min/img/flags/fr.svg"},
];

const LanguageSelector = () => {
  const {i18n} = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-selector">
      {languages.map((lng) => {
        return (
          <img
            className={`flag-icon ${lng.code === i18n.language ? "selected" : ""}`}
            key={lng.code}
            src={lng.flag}
            alt={`${lng.lang} flag`}
            onClick={() => changeLanguage(lng.code)}
            loading="lazy"
          />
        );
      })}
    </div>
  );
};

export default LanguageSelector;
