export function handleAudioControl (action: 'play' | 'stop' | 'pause' | 'resume', paused: boolean, text: string, speechConfig: SpeechSynthesisUtterance, voiceConfig : SpeechSynthesisVoice, langConfig : string) {
  const s = new SpeechSynthesisUtterance(text);
  s.lang = langConfig;
  s.voice = Object.keys(voiceConfig).length > 0 ? voiceConfig : null;
  s.pitch = speechConfig?.pitch;
  s.rate = speechConfig?.rate;
  s.volume = speechConfig?.volume;

  switch (action) {
    case 'play':
      speechSynthesis.speak(s);
      break;
    case 'stop':
      if (speechSynthesis.speaking) {
        speechSynthesis.cancel();
      }
      break;
    case 'pause':
      if (speechSynthesis.speaking && !paused) {
        speechSynthesis.pause();
      }
      break;
    case 'resume':
      if (paused) {
        speechSynthesis.resume();
      }
      break;
  }
};

export const startListening = (isMicrophoneAvailable, setterMicrophoneAvailable : (isMicrophoneAvailable : boolean) => void, speechRecognition: any, selectedLang: string, isContinuous: boolean, wantsInterimResults: boolean) => {
  if (!isMicrophoneAvailable) {
    setterMicrophoneAvailable(true);
    return;
  }

  speechRecognition.startListening({ language: selectedLang, continuous: isContinuous, interimResults: wantsInterimResults });
};

export const stopListening = (speechRecognition: any) => {
  speechRecognition.stopListening();
}

export function handleConfiguration(nameVal: string, flagCodeVal: string, langCodeVal: string, setterCallback: (value: React.SetStateAction<{
  name: string;
  flagCode: string;
  langCode: string;
  voice: null;
  pitch: number;
  rate: number;
  volume: number;
}>) => void) {
  setterCallback(prevState => ({
    ...prevState,
    name: nameVal,
    flagCode: flagCodeVal,
    langCode: langCodeVal
  }));
};

export function handleChange(key: string, val: any, setterCallback: (value: React.SetStateAction<{
    pitch: number;
    rate: number;
    volume: number;
}>) => void) {
    setterCallback(prevState => ({
        ...prevState,
        [key]: Number(val)
    }));
};

export function copyContentButton(contentToCopy : string, setterCallback : (value : boolean) => void) {
  navigator.clipboard.writeText(contentToCopy);
  setterCallback(true);
  setTimeout(() => {
    setterCallback(false);
  }, 1500)
}