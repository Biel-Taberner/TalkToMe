import Language from "../../models/Language.ts";

export function updateTranslatedContent(langObject : Language, languages : Language[]) : void {
        
    if (langObject) {
        const translatedLangs = new Intl.DisplayNames([langObject.getLangCode()], { type: "language" });

        languages.map((lang) => {
            lang.setName( translatedLangs.of(lang.getLangCode()) );
        })
    }
}