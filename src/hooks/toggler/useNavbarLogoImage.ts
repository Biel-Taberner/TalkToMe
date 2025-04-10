import { useEffect, useState } from "react"

export function useNavbarLogoImage(themeToggler : boolean) {

    const [logoSrcRoute, setLogoSrcRoute] = useState<string>("talk&listentome_logo.png")

    useEffect(() => {
        const currentLogoSrc = themeToggler ? "talk&listentome_logo.png" : "talk&listentome_logo_white.png"
        setLogoSrcRoute(prevState => (prevState = currentLogoSrc))
    }, [themeToggler])

    return { logoSrcRoute };

}