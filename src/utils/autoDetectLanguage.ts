import Language from "../models/Language";

export function autoDetectLanguage(languages : Language[]) {

    if (languages.length > 0) {

        let storedLanguage = localStorage.getItem("i18nextLng") ? localStorage.getItem("i18nextLng") : "us";
        if (storedLanguage === "en") {
            storedLanguage = "us";
        }

        return languages.find((lang : Language) => lang.getFlagCode().toLowerCase() === storedLanguage);
    }

    return null;

}