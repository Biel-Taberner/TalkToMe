import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";
import { changeTheme } from "./ThemeToggler.ts";

interface ThemeTogglerProps {
    isThemeToggled: boolean;
    classes: string;
    setThemeToggler: (...args : any) => void;
}

export default function ThemeToggler({ isThemeToggled = true, setThemeToggler, classes } : ThemeTogglerProps) {

    return (
        <div>
            <div className={classes}>
                <input type="checkbox" className="checkbox" id="checkbox" checked={isThemeToggled} onChange={(e) => changeTheme(e, setThemeToggler)} />
                <label htmlFor={"checkbox"} className="checkbox-label">
                    <FontAwesomeIcon icon={faMoon} />
                    <FontAwesomeIcon icon={faSun} />
                    <span className="ball"></span>
                </label>
            </div>
        </div>
    )
}