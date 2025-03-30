import { changeLanguage } from "i18next";
import Language from "../models/Language";
import { updateTranslatedContent } from "./updateTranslatedContent";

export function handleLanguageChange(langCode: Language, languages: Language[], setCurrentLanguage: (lang : Language) => void) {
    let currentUserLang = langCode;

    setCurrentLanguage(currentUserLang)
    changeLanguage(currentUserLang?.getLangCode());

    updateTranslatedContent(langCode, languages)
}