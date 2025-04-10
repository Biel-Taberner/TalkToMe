import { useCallback, useEffect, useState } from "react";
import LanguageService from "../../services/LanguageService.ts";

export function useLanguage<Language>() {
    const [languages, setLanguages] = useState<Language[]>([]);

    const fetchData = useCallback(async () => {
        const data = await LanguageService.findAllLanguagesForNavbar();
        
        const navbarLanguages = data
        .map((lang) => {
          const langCopy = Object.create(Object.getPrototypeOf(lang));
          Object.assign(langCopy, lang);
          langCopy.setLangCode(lang.getLangCode().split("-")[0]);
          return langCopy;
        })
        .filter((lang) => lang.getIsInNavbar());
      
        setLanguages(navbarLanguages);
    }, [])

    useEffect(() => {
        fetchData();
    }, [fetchData])

    return { languages };
}