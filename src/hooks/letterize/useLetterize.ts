import { useEffect, useRef, useState } from "react";
import Letterize from "letterizejs";
import { formatLetterizedText } from "../../utils/letterize/formatLetterizedText";

export function useLetterize() {
    const footerRef = useRef<HTMLElement | null>(null);
    const ccRef = useRef<HTMLElement | null>(null);
    const [letterize, setLetterize] = useState<Letterize | null>(null);

    useEffect(() => {
        if (!ccRef.current) return;

        formatLetterizedText(ccRef.current);
        const letterizeInstance = new Letterize({ targets: ccRef.current });

        setLetterize(letterizeInstance);
    }, []);

    return { footerRef, ccRef, letterize };
}
