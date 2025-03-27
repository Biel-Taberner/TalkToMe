import React, { useEffect, useRef, useState } from "react"
import Container from "../components/container/Container"
import { Trans, useTranslation } from "react-i18next"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import DrawSVGPlugin, { ScrollTrigger } from "gsap/all"
import SVGIcon from "../components/icon/SVGIcon";
import Letterize from "letterizejs"

gsap.registerPlugin(useGSAP, DrawSVGPlugin, ScrollTrigger);

function Render() {

    const { t, i18n: {changeLanguage, language} } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(language);

    const iconSize = '35px';

    const iconRef = useRef(null);
    const iconRef2 = useRef(null);
    const podcastIcon = useRef(null);
    const slidersIcon = useRef(null);
    const codeIcon = useRef(null);
    const firstSection = useRef(null);
    const secondSection = useRef(null);
    const thirdSection = useRef(null);
    const lastSection = useRef(null);

    useGSAP(() => {
        gsap.set([iconRef.current, iconRef2.current, podcastIcon.current, slidersIcon.current, codeIcon.current], {
            strokeDasharray: (i, target) => target.getTotalLength(),
            strokeDashoffset: (i, target) => target.getTotalLength(),
            strokeWidth: (i) => (i == 4 ? 1.5 : 0.5),
        });

        gsap.to([iconRef.current, iconRef2.current], {
            fill: "hsl(217, 71%, 53%)",
            strokeOpacity: 0,
            strokeDashoffset: 0,
            duration: 3,
            scrollTrigger: {
                trigger: firstSection.current,
                start: "top 100%",
                toggleActions: "play none none none",
            },
        });

        gsap.to(podcastIcon.current, {
            fill: "hsl(171, 100%, 41%)",
            strokeOpacity: 0,
            strokeDashoffset: 0,
            duration: 3,
            scrollTrigger: {
                trigger: secondSection.current,
                start: "top 100%",
                toggleActions: "play none none none",
            },
        });
        

        gsap.to(slidersIcon.current, {
            fill: "hsl(48, 100%, 67%)",
            strokeOpacity: 0,
            strokeDashoffset: 0,
            duration: 3,
            scrollTrigger: {
                trigger: thirdSection.current,
                start: "top 100%",
                toggleActions: "play none none none",
            },
        });

        gsap.to(codeIcon.current, {
            stroke: "hsl(348, 100%, 61%)",
            strokeDashoffset: 0,
            duration: 3,
            scrollTrigger: {
                trigger: lastSection.current,
                start: "top 100%",
                toggleActions: "play none none none",
            },
        });


    }, { scope: [iconRef, iconRef2, podcastIcon, codeIcon, slidersIcon] });

    useGSAP(() => {
        let sections = gsap.utils.toArray(".section-scroll")

        sections.forEach((section, i) => {

            gsap.set(section, {
                alpha: 0,
                y: 15,
            })
    
            gsap.to(section, {
                alpha: 1,
                stagger: 1,
                y: 0,
                scrollTrigger: {
                    trigger: section,
                    start: "top 100%",
                    toggleActions: "play none none none",
                }
            })

        })
    })

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

                    <SVGIcon iconInfo={
                        <svg width={iconSize} height={iconSize} version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <g id="SVGRepo_bgCarrier" strokeWidth={"0"}></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap={"round"} strokeLinejoin={"round"}></g>
                            <g id="SVGRepo_iconCarrier"> 
                                <path style={{fill: "none"}} stroke="black" ref={iconRef} strokeLinecap={"round"} strokeLinejoin={"round"} id="icon1" d="m439.5,236c0-11.3-9.1-20.4-20.4-20.4s-20.4,9.1-20.4,20.4c0,70-64,126.9-142.7,126.9-78.7,0-142.7-56.9-142.7-126.9 0-11.3-9.1-20.4-20.4-20.4s-20.4,9.1-20.4,20.4c0,86.2 71.5,157.4 163.1,166.7v57.5h-23.6c-11.3,0-20.4,9.1-20.4,20.4 0,11.3 9.1,20.4 20.4,20.4h88c11.3,0 20.4-9.1 20.4-20.4 0-11.3-9.1-20.4-20.4-20.4h-23.6v-57.5c91.6-9.3 163.1-80.5 163.1-166.7z"></path> 
                                <path style={{fill: "none"}} stroke="black" strokeLinecap={"round"} strokeLinejoin={"round"} ref={iconRef2} id="icon2" d="m256,323.5c51,0 92.3-41.3 92.3-92.3v-127.9c0-51-41.3-92.3-92.3-92.3s-92.3,41.3-92.3,92.3v127.9c0,51 41.3,92.3 92.3,92.3zm-52.3-220.2c0-28.8 23.5-52.3 52.3-52.3s52.3,23.5 52.3,52.3v127.9c0,28.8-23.5,52.3-52.3,52.3s-52.3-23.5-52.3-52.3v-127.9z"></path> 
                            </g>
                        </svg>
                    }></SVGIcon>

                    <div>{ t('home_section_2_title') }</div>
                </div>
                <p className="subtitle mt-3">
                    { t('home_section_2_subtitle') }
                </p>
            </section>

            <section className="section section-scroll" ref={secondSection}>
                <div className="is-flex title icon-text-gap is-align-items-center">

                    <SVGIcon iconInfo={
                        <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" strokeWidth={"0"}></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap={"round"} strokeLinejoin={"round"}></g>
                            <g id="SVGRepo_iconCarrier"> 
                                <path style={{ fill: "none" }} stroke="black" ref={podcastIcon} fillRule={"evenodd"} clipRule={"evenodd"} d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 14.4856 19.9937 16.7342 18.364 18.364C17.9734 18.7545 17.9734 19.3876 18.364 19.7782C18.7545 20.1687 19.3876 20.1687 19.7782 19.7782C21.7677 17.7887 23 15.0373 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 15.0373 2.23231 17.7887 4.22183 19.7782C4.61235 20.1687 5.24551 20.1687 5.63604 19.7782C6.02656 19.3876 6.02656 18.7545 5.63604 18.364C4.00626 16.7342 3 14.4856 3 12ZM7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 13.381 16.4415 14.6296 15.5355 15.5355C15.145 15.9261 15.145 16.5592 15.5355 16.9497C15.9261 17.3403 16.5592 17.3403 16.9497 16.9497C18.2154 15.6841 19 13.9327 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 13.9327 5.7846 15.6841 7.05025 16.9497C7.44078 17.3403 8.07394 17.3403 8.46447 16.9497C8.85499 16.5592 8.85499 15.9261 8.46447 15.5355C7.55855 14.6296 7 13.381 7 12ZM14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5C13.3807 9.5 14.5 10.6193 14.5 12ZM9.67319 17.494C9.57955 16.1455 10.6482 15 12 15C13.3518 15 14.4205 16.1455 14.3268 17.494L14.0049 22.1295C13.9317 23.1829 13.0559 24 12 24C10.9441 24 10.0683 23.1829 9.9951 22.1295L9.67319 17.494Z" fill="#000000">
                                </path> 
                            </g>
                        </svg>
                    }></SVGIcon>
                    
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

                    <SVGIcon iconInfo={
                        <svg width={iconSize} height={iconSize} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none" className="bi bi-sliders">
                            <g id="SVGRepo_bgCarrier" strokeWidth={"0"}></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap={"round"} strokeLinejoin={"round"}></g>
                            <g id="SVGRepo_iconCarrier"> 
                                <path ref={slidersIcon} stroke="black" style={{ fill: "none" }} fillRule={"evenodd"} d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z"></path> 
                            </g>
                        </svg>
                    }></SVGIcon>                    
                
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
                
                    <SVGIcon iconInfo={
                        <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" strokeWidth={"0"}></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap={"round"} strokeLinejoin={"round"}></g>
                            <g id="SVGRepo_iconCarrier"> 
                                <path strokeWidth={1.5} stroke="black" ref={codeIcon} style={{ fill: "none" }} d="M7 8L3 11.6923L7 16M17 8L21 11.6923L17 16M14 4L10 20" strokeLinecap={"round"} strokeLinejoin={"round"}></path> 
                            </g>
                        </svg>
                    }></SVGIcon>
                    
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