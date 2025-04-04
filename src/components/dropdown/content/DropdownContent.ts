export function setVoiceToUse(voiceToUse : {} , setterCallback: (value: React.SetStateAction<{
    name: string;
    flagCode: string;
    langCode: string;
  }>) => void) {
    
    setterCallback(prevState => ({ ...prevState, name: voiceToUse?.name, flagCode: voiceToUse?.langCode.split("-")[1], langCode: voiceToUse?.langCode }))
}