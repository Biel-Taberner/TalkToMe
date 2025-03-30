import Letterize from "letterizejs";
import { useCallback, useEffect, useState } from "react";

export function useLetterize<Letterize>(target) {
    const [letterize, setLetterize] = useState<Letterize>();

    const letterizeContent = useCallback(() => {
        const letterizeInst = new Letterize({ targets: target });
        setLetterize(letterizeInst);
    }, [])

    useEffect(() => {
        letterizeContent()
    }, [letterizeContent]);

    return { letterize };
}