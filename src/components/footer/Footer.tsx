import React, { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SVGIcon from "../icon/SVGIcon";
import { ScrollTrigger } from "gsap/all";
import { useLetterize } from "../../hooks/letterize/useLetterize";
import { useGSAPFooterAnimations } from "../../hooks/gsap-animations/useGSAPFooterAnimations";
import { t } from "i18next";
import { useLanguageDetection } from "../../hooks/language/useLanguageDetection";
import Language from "../../models/Language";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Footer() {

    const { i18n: {language} } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState<Language>(language);
    const { languages } = useLanguageDetection<Language>(setCurrentLanguage);

    const { footerRef, ccRef, letterize } = useLetterize();

    useGSAPFooterAnimations(footerRef.current, ccRef.current, letterize);

    return (
        <div>
            <div className="section has-background-grey">
                <div className="is-flex is-justify-content-center">
                    <div ref={footerRef} className="is-flex is-flex-direction-column">
                        <div className="title mb-5 has-text-white-bis">TalkToMe</div>
                        <div className="subtitle is-4 mb-5 has-text-white-bis">{ t('footer_subtitle') }</div>
                        <div className="mb-5 is-flex is-justify-content-flex-start icon-text-gap">
                            <div>
                                <a target="_blank" href="https://www.linkedin.com/in/gabriel-taberner-69aa68311">
                                    <img className="image is-32x32" src="https://files.softicons.com/download/social-media-icons/flat-gradient-social-icons-by-guilherme-lima/png/512x512/Linkedin.png" alt="linkedin"/>
                                </a>
                            </div>
                            <div>
                                <a target="_blank" href="https://www.instagram.com/_bbiillyy03_/">
                                    <img className="image is-32x32" src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" alt="instagram"/>
                                </a>
                            </div>
                            <div>
                                <a target="_blank" href="https://github.com/Biel-Taberner">
                                    <img className="image is-32x32" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github"/>
                                </a>
                            </div>
                        </div>
                        <div className="subtitle is-5 is-flex is-align-items-center icon-text-gap">
                            <SVGIcon iconInfo={
                                <svg fill="white" width={20} height={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
                            }></SVGIcon>
                            <a className="is-underlined has-text-white-bis" href="mailto:tabernerbiel@gmail.com">tabernerbiel@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="has-background-dark p-4 is-flex is-justify-content-center has-text-white-bis">
                <div ref={ccRef} className="mr-1">
                    &copy; 2025 { t('by') } Gabriel Taberner Machado
                </div>
            </div>
        </div>
    )
}