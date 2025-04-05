import { useEffect } from "react";

export function useSpeechSynthesis(setHasSpeechSynthesis: (hasSpeechSynthesis: boolean) => void) {
    useEffect(() => {
        if (!('speechSynthesis' in window)) {
            setHasSpeechSynthesis(false);
        }
    }, [])
}