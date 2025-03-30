import React, { useRef, useState } from "react"
import Container from "../components/container/Container"
import { Trans, useTranslation } from "react-i18next"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import DrawSVGPlugin, { ScrollTrigger } from "gsap/all"
import SVGIcon from "../components/icon/SVGIcon";
import { CODE_ICON, MICROPHONE_ICON, PODCAST_ICON, SLIDERS_ICON } from "../constants/icons/svg";
import { BLUE_COLOR, GREEN_COLOR, RED_COLOR, YELLOW_COLOR } from "../constants/colors/colors";
import { useGSAPHomePageAnimations } from "../hooks/gsap-animations/useGSAPAnimations";

gsap.registerPlugin(useGSAP, DrawSVGPlugin, ScrollTrigger);

function Render() {

    const { t, i18n: {language} } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(language);

    const iconsRef = useRef<SVGSVGElement[]>([]);
    const firstSection = useRef(null);
    const secondSection = useRef(null);
    const thirdSection = useRef(null);
    const lastSection = useRef(null);
    const referencedSections = [firstSection, secondSection, thirdSection, lastSection];

    const colors = [
        BLUE_COLOR,
        GREEN_COLOR,
        YELLOW_COLOR,
        RED_COLOR
    ]

    useGSAPHomePageAnimations(iconsRef, referencedSections, colors);

    return (
        <div className="content mt-6">
            <section className="section section-scroll">
                <h1 className="title letterize is-1 mt-6">TalkToMe</h1>
                <p className="subtitle mt-3">
                    { t('home_subtitle') }
                </p>
            </section>

            <section className="section section-scroll" ref={firstSection}>
                <div className="is-flex title icon-text-gap is-align-items-center">
                    <SVGIcon iconInfo={MICROPHONE_ICON} />
                    <div>{ t('home_section_2_title') }</div>
                </div>
                <p className="subtitle mt-3">
                    { t('home_section_2_subtitle') }
                </p>
            </section>

            <section className="section section-scroll" ref={secondSection}>
                <div className="is-flex title icon-text-gap is-align-items-center">
                    <SVGIcon iconInfo={PODCAST_ICON} />
                    <div>{ t('home_section_3_title') }</div>
                </div>
                <p className="subtitle mt-3">
                    { t('home_section_3_subtitle_1') }
                </p>
                <p className="subtitle mt-3">
                    { t('home_section_3_subtitle_2') }
                </p>
            </section>

            <section className="section section-scroll" ref={thirdSection}>
                <div className="is-flex title icon-text-gap is-align-items-center"> 
                    <SVGIcon iconInfo={SLIDERS_ICON} />    
                    <div>{ t('home_section_4_title') }</div>
                </div>
                <p className="subtitle mt-3">
                    { t('home_section_4_subtitle') }
                </p>
                <ul className="subtitle">
                    <li><Trans i18nKey={"home_section_4_list_1"}/></li>
                    <li><Trans i18nKey={"home_section_4_list_2"}/></li>
                    <li><Trans i18nKey={"home_section_4_list_3"}/></li>
                </ul>
            </section>

            <section className="section section-scroll" ref={lastSection}>
                <div className="is-flex title icon-text-gap is-align-items-center">
                    <SVGIcon iconInfo={CODE_ICON} />
                    <div>{ t('home_section_5_title') }</div>
                </div>
                <p className="subtitle mt-3">
                    <Trans i18nKey={"home_section_5_subtitle"}/>
                </p>
            </section>
        </div>
    )
}

export default function Home() {

    return (
        <Container children={<Render/>}/>
    )

}