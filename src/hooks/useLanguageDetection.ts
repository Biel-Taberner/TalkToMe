import { useCallback, useEffect } from "react";
import { autoDetectLanguage } from "../utils/autoDetectLanguage";
import { updateTranslatedContent } from "../utils/updateTranslatedContent";
import { useLanguage } from "./useLanguages";

export function useLanguageDetection<Language>(setCurrentLanguage: (lang: Language) => void) {

    const { languages } = useLanguage<Language>();

    const languageDetection = useCallback(() => {
        
        const detectedLanguage = autoDetectLanguage(languages);

        if (detectedLanguage) {

            setCurrentLanguage(detectedLanguage);

            updateTranslatedContent(detectedLanguage, languages);

        }

    })

    useEffect(() => {
        languageDetection();
    }, [languageDetection, languages])

    return { languages };
}