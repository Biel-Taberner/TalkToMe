import { changeLanguage } from "i18next";
import Language from "../../models/Language.ts";
import { updateTranslatedContent } from "./updateTranslatedContent.ts";

export function handleLanguageChange(langCode: Language, languages: Language[], setCurrentLanguage: (lang : Language) => void) {
    let currentUserLang = langCode;

    setCurrentLanguage(currentUserLang)
    changeLanguage(currentUserLang?.getLangCode());

    updateTranslatedContent(langCode, languages)
}