import { useCallback, useEffect, useState } from "react";
import LanguageService from "../services/LanguageService.ts";

export function useLanguage<Language>() {
    const [languages, setLanguages] = useState<Language[]>([]);

    const fetchData = useCallback(async () => {
        const data = await LanguageService.findAllLanguages();
        setLanguages(data);
    }, [])

    useEffect(() => {
        fetchData();
    }, [fetchData])

    return { languages };
}