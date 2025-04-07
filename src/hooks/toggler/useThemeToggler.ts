import React, { useEffect, useState } from "react";

export function useThemeToggler(themeTogglerRef : React.RefObject<null | HTMLInputElement>) {
    const [themeToggler, setThemeToggler] = useState<boolean>(true);

    useEffect(() => {
        const savedTheme = localStorage.getItem("currentDataTheme");
        const isChecked = localStorage.getItem("checked") === "true";

        if (!isChecked && !savedTheme) {
            setThemeToggler(false);
        } else {
            document.documentElement.setAttribute("data-theme", savedTheme === "dark" ? "dark" : "light");

            if (themeTogglerRef.current) {
                themeTogglerRef.current.checked = isChecked;
            }
            setThemeToggler(isChecked);
        }
    }, [])

    return [themeToggler, setThemeToggler];
}