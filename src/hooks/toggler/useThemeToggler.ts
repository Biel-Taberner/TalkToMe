import React, { useEffect, useState } from "react";

export function useThemeToggler(themeTogglerRef : React.RefObject<null | HTMLInputElement>) {
    const [themeToggler, setThemeToggler] = useState<boolean>(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("currentDataTheme");
        const isChecked = localStorage.getItem("checked") === "true"; // Verifica si está marcado

        // Establecer el tema al cargar la página
        document.documentElement.setAttribute("data-theme", savedTheme === "dark" ? "dark" : "light");

        // Establecer el estado del interruptor
        if (themeTogglerRef.current) {
            themeTogglerRef.current.checked = isChecked;
        }
        setThemeToggler(isChecked);
    }, [])

    return [themeToggler, setThemeToggler];
}