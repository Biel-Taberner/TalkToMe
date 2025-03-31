import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export const useVoices = (langCode: string) => {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [languages, setLanguages] = useState<{ langCode: string; name: string }[]>([]);
  const { i18n: {language} } = useTranslation();

  useEffect(() => {
    const filterLanguages = () => {
      const voices = speechSynthesis.getVoices();
      const uniqueLanguages = [...new Set(voices.map(voice => voice.lang))];
      const intlDisplay = new Intl.DisplayNames([language], { type: "language" });
      const languageList = uniqueLanguages.map(langCode => ({
        langCode,
        name: intlDisplay.of(langCode) || langCode,
      }));
      setLanguages(languageList);
    };
    
    filterLanguages();
    speechSynthesis.addEventListener("voiceschanged", filterLanguages);

    return () => {
      speechSynthesis.removeEventListener("voiceschanged", filterLanguages);
    };
  }, []);

  useEffect(() => {
    const filteredVoices = langCode ? 
      speechSynthesis.getVoices().filter(voice => voice.lang.startsWith(langCode)) : 
      speechSynthesis.getVoices().filter(voice => voice.lang.startsWith("es"));
    setVoices(filteredVoices);
  }, [langCode]);

  useEffect(() => {
    const updateListName = () => {
      const translatedLangs = new Intl.DisplayNames([language], { type: "language" });

      languages.map((lang) => {
        lang.name = translatedLangs.of(lang.langCode);
      })
    };

    updateListName();
  })

  return { voices, languages };
};