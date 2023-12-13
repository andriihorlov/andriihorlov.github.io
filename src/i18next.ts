import i18next from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import I18NextHttpBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import translationEN from "./locales/en/translation.json";
import translationUK from "./locales/uk/translation.json";

const resources = {
  en: {
    translation: translationEN,
  },
  uk: {
    translation: translationUK,
  },
};

i18next
  .use(I18NextHttpBackend)
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    debug: true,
    detection: {
      order: ["queryString", "cookie"],
      caches: ["cookie"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
