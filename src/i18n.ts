import i18next from "i18next";
import { initReactI18next  } from "react-i18next";
import enJSON from './i18n/en.json';
import esJSON from './i18n/es.json';
import deJSON from './i18n/de.json';
import LanguageDetector from 'i18next-browser-languagedetector';
import HTTPApi from 'i18next-http-backend';

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(HTTPApi)
    .init({
        resources: {
            en: { ...enJSON },
            es: { ...esJSON },
            de: { ...deJSON },
        },
        supportedLngs: ["en", "es", "de"],
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    })

export default i18next;