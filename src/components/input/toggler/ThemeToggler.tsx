import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";
import { useThemeToggler } from "../../../hooks/toggler/useThemeToggler";
import { changeTheme } from "./ThemeToggler.ts";

export default function ThemeToggler() {
    
    const themeTogglerRef = useRef(null);
    const [themeToggler, setThemeToggler] = useThemeToggler(themeTogglerRef);

    return (
        <div>
            <div>
                <input ref={themeTogglerRef} type="checkbox" className="checkbox" id="checkbox" value={themeToggler} onChange={(e) => changeTheme(e, setThemeToggler)} />
                <label htmlFor={"checkbox"} className="checkbox-label">
                    <FontAwesomeIcon icon={faMoon} />
                    <FontAwesomeIcon icon={faSun} />
                    <span className="ball"></span>
                </label>
            </div>
        </div>
    )
}