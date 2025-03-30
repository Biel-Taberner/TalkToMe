import Language from "../models/Language.ts";
import axios from "axios";

export default class LanguageService {

    static async findAllLanguages() : Promise<Language[]> {

        const req = await axios.get(`./languages.json`);

        const res = req.data.langs;

        return res.map((langJSON, i) => this.jsonToObject(langJSON, i));

    }

    private static jsonToObject(langJson: any, langJsonIndex : number) {

        return new Language(langJsonIndex, langJson.name, langJson.langCode, langJson.flagCode)

    }

}