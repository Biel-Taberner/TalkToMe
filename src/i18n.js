import i18next from "i18next";
import { initReactI18next  } from "react-i18next";
import enJSON from './locale/en.json';
import esJSON from './locale/es.json';
import deJSON from './locale/de.json';

i18next.use(initReactI18next).init({
    resources: {
        en: { ...enJSON },
        es: { ...esJSON },
        de: { ...deJSON },
    },
    supportedLngs: ["en", "es", "de"],
    fallbackLng: "en"
})

export default i18next;