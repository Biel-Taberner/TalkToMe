import { useEffect } from "react";

export default function useTranscriptedContent(transcript: string, setTranscriptedContent: (transcript: string) => void) {
    useEffect(() => {
        setTranscriptedContent(transcript);
    }, [transcript])
}