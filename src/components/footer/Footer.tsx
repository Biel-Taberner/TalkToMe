import React, { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useLetterize } from "../../hooks/letterize/useLetterize";
import { useGSAPFooterAnimations } from "../../hooks/gsap-animations/useGSAPAnimations";
import { t } from "i18next";
import { useLanguageDetection } from "../../hooks/language/useLanguageDetection";
import Language from "../../models/Language";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

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
                                    <img className="image is-32x32" src="linkedIn_logo.png" alt="linkedin"/>
                                </a>
                            </div>
                            <div>
                                <a target="_blank" href="https://www.instagram.com/_bbiillyy03_/">
                                    <img className="image is-32x32" src="instagram_logo.png" alt="instagram"/>
                                </a>
                            </div>
                            <div>
                                <a target="_blank" href="https://github.com/Biel-Taberner">
                                    <img className="image is-32x32" src="github_logo.png" alt="github"/>
                                </a>
                            </div>
                        </div>
                        <div className="subtitle is-5 is-flex is-align-items-center icon-text-gap">
                            <FontAwesomeIcon icon={faEnvelope} color="white" />
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