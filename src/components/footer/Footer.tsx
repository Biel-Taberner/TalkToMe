import React, { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useLetterize } from "../../hooks/letterize/useLetterize";
import { useGSAPFooterAnimations } from "../../hooks/gsap-animations/useGSAPAnimations";
import { useLanguageDetection } from "../../hooks/language/useLanguageDetection";
import Language from "../../models/Language";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import BlockInfo from "../block/BlockInfo.tsx";
import { FOOTER_LINKS } from "../../constants/footer-links/footerLinks.ts";
import FooterLink from "./links/FooterLink.tsx";
import FooterCopyrightContainer from "./copyright-container/FooterCopyrightContainer.tsx";

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
                        <BlockInfo titleI18next="Talk&ListenToMe" titleContentClasses="title mb-5 has-text-white-bis" displayDescription descriptionContentClasses="subtitle is-4 mb-5 has-text-white-bis" descriptionI18next="footer_subtitle" />
                        <div className="mb-5 is-flex is-justify-content-flex-start icon-text-gap">
                            {
                                FOOTER_LINKS.map((footerLink, i) => <FooterLink key={i} redirectTo={footerLink.redirectTo} imgLogo={footerLink.imgLogo} imgLogoAlt={footerLink?.imgLogoAlt} />)
                            }
                        </div>
                        <div className="subtitle is-5 is-flex is-align-items-center icon-text-gap">
                            <FontAwesomeIcon icon={faEnvelope} color="white" />
                            <a className="is-underlined has-text-white-bis" href="mailto:tabernerbiel@gmail.com">tabernerbiel@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
            <FooterCopyrightContainer ccRef={ccRef} />
        </div>
    )
}