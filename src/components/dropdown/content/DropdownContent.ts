export function setLanguageToUse(languageToUse : {} , setterCallback: (value: React.SetStateAction<{
    name: string;
    flagCode: string;
    langCode: string;
  }>) => void) {
    
    setterCallback(prevState => ({ ...prevState, name: languageToUse?.name, flagCode: languageToUse?.langCode.split("-")[1], langCode: languageToUse?.langCode }))
}

export function setVoiceToUse(voiceToUse: {}, setterCallback: (value: React.SetStateAction<{ name: string; voiceURI: string; }>) => void) {
  setterCallback(prevState => ({...prevState, name: voiceToUse?.name, voiceURI: voiceToUse?.voiceURI}));
}