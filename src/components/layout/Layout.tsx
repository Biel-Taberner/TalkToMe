import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react"
import Flag from "react-flagkit";
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom";
import ProgressBar from "../progressBar/ProgressBar";
import Language from "../../models/Language";
import { useLanguageDetection } from "../../hooks/language/useLanguageDetection";
import { handleLanguageChange } from "../../utils/language/handleLanguageChange";
import { NAVBAR_ROUTES } from "../../constants/ui/navbarRoutes";
import ThemeToggler from "../input/toggler/ThemeToggler.tsx";
import { useThemeToggler } from "../../hooks/toggler/useThemeToggler.ts";
import { useNavbarLogoImage } from "../../hooks/toggler/useNavbarLogoImage.ts";

export default function Layout() {

    const { t } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState<Language>();
    const { languages } = useLanguageDetection<Language>(setCurrentLanguage);

    const [active, setActive] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(false);

    const themeTogglerRef = useRef(null);
    const [themeToggler, setThemeToggler] = useThemeToggler(themeTogglerRef);

    const { logoSrcRoute } = useNavbarLogoImage(themeToggler);

    return (
        <nav className="is-fixed-top navbar is-justify-content-space-between p-4 has-background-info" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a href="/">
                    <img className="logo is-hoverable" src={logoSrcRoute} />
                </a>

                <a role="button" className={`navbar-burger ${active && "is-active"}`} id="navbarBurger" data-target="navMenu" aria-label="menu" aria-expanded="false" onClick={() => setActive(prevState => prevState = !prevState)}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div className={`${!active && "navbar-menu"} is-flex-grow-0 is-shadowless has-background-transparent ${active && 'is-active'}`} id="navbarBasicExample">
                <div className={`navbar-start navbar-items-gap ${!active && "columns"} is-1 is-align-items-center`}>

                    {
                        NAVBAR_ROUTES.map((route: Object, i : number) => (
                            <div key={i} className={`is-flex ${active && "mt-3"} maxWidth`}>
                                <div className="link-navbar-container">
                                    <Link className="navbar-item is-size-5" to={route?.route}>
                                        <div className="letterize-navbar-item">
                                            { t(route?.name) }
                                        </div>
                                    </Link>
                                    <ProgressBar />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className={`navbar-menu is-flex-grow-0 is-align-items-center icon-text-gap is-shadowless has-background-transparent ${active && "is-active"}`} id="navbarBasicExample">
                <ThemeToggler classes="p-3" isThemeToggled={Boolean(themeToggler)} setThemeToggler={setThemeToggler} />
                <div className="link-navbar-container">
                    <div className={`navbar-item has-dropdown ${activeDropdown ? 'is-active' : ''}`}>
                        <a className={`navbar-link is-size-5 is-flex`} onClick={() => setActiveDropdown(!activeDropdown)}>
                            <FontAwesomeIcon icon={faLanguage} size="lg" />
                            <Flag country={currentLanguage?.getFlagCode()} />
                        </a>

                        {
                            activeDropdown &&
                                <div className="navbar-dropdown is-right">
                                    {
                                        languages.map((lang : any, i : number) => (
                                            <div key={i} className="is-flex px-3 py-2 navbar-dropdown-item is-capitalized is-clickable" onClick={() => handleLanguageChange(lang, languages, setCurrentLanguage)}>
                                                <div>
                                                    <Flag country={lang.getFlagCode()} />
                                                </div>
                                                <div>
                                                    { lang.getName() }
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                        }
                    </div>
                    <ProgressBar />
                </div>
            </div>
            
        </nav>
    )

}