import React, { useRef, useState } from "react"
import Container from "../components/container/Container"
import { useTranslation } from "react-i18next"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import DrawSVGPlugin, { ScrollTrigger } from "gsap/all"
import { CODE_ICON, MICROPHONE_ICON, PODCAST_ICON, SLIDERS_ICON } from "../constants/icons/svg";
import { BLUE_COLOR, GREEN_COLOR, RED_COLOR, YELLOW_COLOR } from "../constants/colors/colors";
import { useGSAPHomePageAnimations, useGSAPSectionScrollAnimations } from "../hooks/gsap-animations/useGSAPAnimations";
import BlockInfo from "../components/block/BlockInfo";

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

    useGSAPSectionScrollAnimations();

    return (
        <div className="content mt-6">
            <section className="section section-scroll">
                <BlockInfo titleI18next="Talk&ListenToMe" titleContentClasses="title letterize is-1 mt-6" descriptionI18next={["home_subtitle"]} descriptionContentClasses="subtitle mt-3" />
            </section>

            <section className="section section-scroll" ref={firstSection}>
                <BlockInfo icon={MICROPHONE_ICON} titleI18next="home_section_2_title" titleContentClasses="is-flex title icon-text-gap is-align-items-center" descriptionI18next={["home_section_2_subtitle"]} descriptionContentClasses="subtitle mt-3" />
            </section>

            <section className="section section-scroll" ref={secondSection}>
                <BlockInfo icon={PODCAST_ICON} titleI18next="home_section_3_title" titleContentClasses="is-flex title icon-text-gap is-align-items-center" descriptionI18next={["home_section_3_subtitle_1", "home_section_3_subtitle_2"]} descriptionContentClasses="subtitle mt-3" />
            </section>

            <section className="section section-scroll" ref={thirdSection}>
                <BlockInfo icon={SLIDERS_ICON} hasTransKey={true} titleI18next="home_section_4_title" titleContentClasses="is-flex title icon-text-gap is-align-items-center" descriptionI18next={["home_section_4_subtitle"]} descriptionContentClasses="subtitle mt-3" listOfItems={{ items: ["home_section_4_list_1", "home_section_4_list_2"], itemsClasses: "subtitle" }} />
            </section>

            <section className="section section-scroll" ref={lastSection}>
                <BlockInfo icon={CODE_ICON} hasTransKey={true} titleI18next="home_section_5_title" titleContentClasses="is-flex title icon-text-gap is-align-items-center" descriptionI18next={["home_section_5_subtitle"]} descriptionContentClasses="subtitle mt-3" />
            </section>
        </div>
    )
}

export default function Home() {

    return (
        <Container children={<Render/>}/>
    )

}