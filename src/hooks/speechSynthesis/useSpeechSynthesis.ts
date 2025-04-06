import { useEffect } from "react";

export function useSpeechSynthesis(setHasSpeechSynthesis: (hasSpeechSynthesis: boolean) => void) {
    useEffect(() => {
        if (!('speechSynthesis' in window)) {
            setHasSpeechSynthesis(false);
        }
    }, [])
}

export function useSpeechSynthesisCookie(cookies : any, keyToFind : string, setSpeechSynthesis : (...args : any) => void) {
    useEffect(() => {
        const cookieConfig = cookies[keyToFind];
        if (cookieConfig) {
            setSpeechSynthesis(cookieConfig);
        }
    }, []);
}

export function useSpeechSynthesisSetCookie(speechSynthesisConfig: any, ketToSave : string, setCookie: (...args : any) => void) {
  useEffect(() => {
    if (speechSynthesisConfig || speechSynthesisConfig === false) {
      setCookie(ketToSave, speechSynthesisConfig, {
        path: "/",
      });
    }
  }, [speechSynthesisConfig]);
}

export function useSpeechSynthesisVoiceCookie(cookies: any, voices : SpeechSynthesisVoice[], setSelectedVoice : (...args : any) => void, setSelectedVoiceToPlay : (voiceToPlay : SpeechSynthesisVoice) => void) {
  useEffect(() => {
    const cookiesVoiceConfig = cookies["speechVoiceConfig"];
    if (cookiesVoiceConfig) {
      setSelectedVoice(cookiesVoiceConfig);
      const voiceToPlay = voices.find((voice : SpeechSynthesisVoice) => voice.voiceURI === cookiesVoiceConfig.voiceURI);
      setSelectedVoiceToPlay(voiceToPlay);
    }
  }, [])
}

export function useSpeechSynthesisVoiceSetCookie(setCookie: (...args : any) => void, voices : SpeechSynthesisVoice[], selectedVoice : { voiceURI : string }, setSelectedVoiceToPlay : (voiceToPlay : SpeechSynthesisVoice) => void) {
    useEffect(() => {
        if (selectedVoice) {
          setCookie("speechVoiceConfig", selectedVoice, {
            path: "/"
          })
        }
        const voiceToPlay = voices.find((voice : SpeechSynthesisVoice) => voice.voiceURI === selectedVoice.voiceURI );
        setSelectedVoiceToPlay(voiceToPlay);
    }, [selectedVoice])
}

export function useSpeechSynthesisSetVoiceToPlay(cookies : any, setSelectedVoice : (...args : any) => void, setSelectedVoiceToPlay : (voiceToPlay : SpeechSynthesisVoice | null) => void, voices : SpeechSynthesisVoice[]) {
    useEffect(() => {
        if (voices.length === 0) return;
    
        const cookiesVoiceConfig = cookies["speechVoiceConfig"];
        if (cookiesVoiceConfig) {
            setSelectedVoice(cookiesVoiceConfig);
        
            const voiceToPlay = voices.find(
                (voice: SpeechSynthesisVoice) => voice.voiceURI === cookiesVoiceConfig.voiceURI
            );
            setSelectedVoiceToPlay(voiceToPlay || null);
        }
    }, [voices]);
}