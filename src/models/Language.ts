export default class Language {

    private id : number;
    private name : string;
    private langCode : string;
    private flagCode : string;
    private isInNavbar : boolean;

    constructor(id: number, name: string, langCode: string, flagCode: string, isInNavbar : boolean = false) {
        this.id = id;
        this.name = name;
        this.langCode = langCode;
        this.flagCode = flagCode;
        this.isInNavbar = isInNavbar;
    }

    getID() : number {
        return this.id;
    }

    setID(id: number) {
        this.id = id;
    }

    getName() : string {
        return this.name;
    }

    setName(name: string) {
        this.name = name;
    }

    getLangCode() : string {
        return this.langCode;
    }

    setLangCode(langCode: string) {
        this.langCode = langCode;
    }

    getFlagCode() : string {
        return this.flagCode;
    }

    setFlagCode(flagCode: string) {
        this.flagCode = flagCode;
    }

    getIsInNavbar() : boolean {
        return this.isInNavbar;
    }

    setIsInNavbar(isInNavbar: boolean) {
        this.isInNavbar = isInNavbar;
    }

}