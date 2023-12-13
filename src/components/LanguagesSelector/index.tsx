import { useContext } from "react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./LanguagesSelector.module.scss";
import { GlobalContext } from "../../context/GlobalContext";
import USA from "../../assets/Flag_of_the_United_States 1.svg";
import UA from "../../assets/Ukraine.svg";
import marker_dark from "../../assets/marker-dark.svg";
import marker_light from "../../assets/marker-light.svg";
import select_dark from "../../assets/select-dark.svg";
import select_light from "../../assets/select-light.svg";
import useTheme from "../../hooks/useTheme";
import Popper from "../Popper/Popper";
import { LANGUAGES_BUTTON } from "../../data/selectData.data";

const LanguagesSelector = () => {
  const { i18n } = useTranslation();

  const { theme } = useContext(GlobalContext);

  const { addTheme } = useTheme(theme, styles.light);

  const [language, setLanguage] = useState<"en" | "uk">("en");
  const [openSelector, setOpenSelector] = useState(false);

  const handleChange = (language: "en" | "uk") => {
    setLanguage(language);
    setOpenSelector(false);
  };

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <div className={styles.languageSelector}>
      <button
        className={addTheme(
          openSelector ? `${styles.select} ${styles.active}` : styles.select
        )}
        onClick={() => {
          setOpenSelector(!openSelector);
        }}
      >
        <img
          className={styles.logo}
          src={language === "en" ? USA : UA}
          alt="usa"
        />
        {language === "en" ? "ENG" : "UA"}
        <img
          className={
            openSelector ? `${styles.marker} ${styles.active}` : styles.marker
          }
          src={theme ? marker_light : marker_dark}
          alt="marker"
        />
      </button>
      {openSelector && (
        <Popper
          open={openSelector}
          onClickOutside={() => setOpenSelector(false)}
        >
          {LANGUAGES_BUTTON.map((but) => (
            <button
              className={addTheme(styles.menuItem)}
              onClick={() => handleChange(but.selectLang as "en" | "uk")}
              key={but.selectLang}
            >
              <div className={addTheme(styles.item)}>
                <img
                  className={styles.logo}
                  src={but.src}
                  alt={but.selectLang}
                />
                {but.viewLang}
              </div>
              {language === but.selectLang && (
                <img
                  className={styles.selectArrow}
                  src={theme ? select_light : select_dark}
                  alt="select"
                />
              )}
            </button>
          ))}
        </Popper>
      )}
    </div>
  );
};

export default LanguagesSelector;
