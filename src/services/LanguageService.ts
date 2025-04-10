import { GET_ALL_LANGUAGES_ROUTE } from "../constants/api/languageRoutes.ts";
import Language from "../models/Language.ts";
import axios from "axios";

export default class LanguageService {

    static findAllLanguages(): Promise<Language[]> {
        return new Promise((resolve) => {
            const loadVoices = () => {
            const voices = speechSynthesis.getVoices();
            const uniqueLanguages = voices
                .map(voice => voice.lang)
                .filter((lang, index, self) => self.indexOf(lang) === index);
                resolve(uniqueLanguages.map((lang, i) => this.jsonToObject(lang, i)));
            };
        
            if (speechSynthesis.getVoices().length > 0) {
                loadVoices();
            } else {
                speechSynthesis.addEventListener("voiceschanged", loadVoices, { once: true });
            }
        });
    }
      

    static async findAllLanguagesForNavbar() : Promise<Language[]> {

        const req = await axios.get(`./${GET_ALL_LANGUAGES_ROUTE}`);

        const res = req.data.langs;

        return res.map((langJSON, i) => this.jsonToObject(langJSON, i));

    }

    private static jsonToObject(langJson: any, langJsonIndex : number) {

        return new Language(langJsonIndex, langJson.name, (langJson.langCode ?? langJson), langJson.flagCode, Boolean(langJson?.isInNavbar))

    }

}