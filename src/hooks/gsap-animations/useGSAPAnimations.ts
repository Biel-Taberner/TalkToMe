import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap"
import Letterize from "letterizejs"
import { SCROLL_TRIGGER_CONFIG } from "../../constants/gsap-animations/scrollTriggerConfig";

gsap.registerPlugin(useGSAP, ScrollTrigger)

export function useGSAPFooterAnimations(footerElement : HTMLElement, ccElement : HTMLElement, letterizedContent : Letterize) {
    useGSAP(() => {

        if (letterizedContent && footerElement && ccElement) {
            gsap.set([footerElement, ccElement], {
                y: 20,
                alpha: 0
            })
    
            gsap.to(footerElement, {
                y: 0,
                alpha: 1,
                scrollTrigger: {
                    trigger: footerElement,
                    start: "top 100%",
                }
            })
    
            gsap.to(ccElement, {
                y: 0,
                alpha: 1,
                scrollTrigger: {
                    trigger: ccElement,
                    start: "top 100%",
                }
            })

            ccElement.addEventListener("mouseover", () => {

                letterizedContent.list.forEach(letterizeEntry => {
                    gsap.to(letterizeEntry, {
                        stagger: 0.03,
                        alpha: 0.5,
                        fontSize: 17
                    })
                })
            })

            ccElement.addEventListener("mouseout", () => {
                gsap.to(letterizedContent.list[0], {
                    stagger: 0.03,
                    alpha: 1,
                    fontSize: 16
                })
            })
        }
    }, [letterizedContent])
}

export function useGSAPHomePageAnimations(iconsRef : SVGSVGElement[], sectionsRef : [], colors : string[]) {
    useGSAP(() => {

        iconsRef.current.splice(0, iconsRef.current.length);

        const svgIcons = document.querySelectorAll("#svgIcon");

        svgIcons.forEach((svgIcon : Element) => {
            iconsRef.current?.push(svgIcon as SVGSVGElement);
        })
        
        gsap.set(iconsRef.current, {
            strokeDasharray: (i, target) => target.getTotalLength(),
            strokeDashoffset: (i, target) => target.getTotalLength(),
            strokeWidth: (i) => (i == 4 ? 1.5 : 0.5),
        });

        iconsRef.current.forEach((icon, i) => {
            
            if (sectionsRef[i]?.current) {

                if (i == 0 || i == 3) {
                    gsap.to(icon, {
                        stroke: colors[i],
                        strokeDashoffset: 0,
                        duration: 3,
                        scrollTrigger: {
                            trigger: sectionsRef[i].current,
                            start: "top 100%",
                            toggleActions: "play none none none",
                        },
                    });
                } else {
                    gsap.to(icon, {
                        fill: colors[i],
                        strokeOpacity: 0,
                        strokeDashoffset: 0,
                        duration: 3,
                        scrollTrigger: {
                            trigger: sectionsRef[i].current,
                            start: "top 100%",
                            toggleActions: "play none none none",
                        },
                    });
                }
            }
        });

    }, [])

    /* useGSAP(() => {
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
    }) */
}

export function useGSAPSectionScrollAnimations() {
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
    }, [])
}

export function useGSAPDemoPageAnimations() {
    useGSAP(() => {
        const sections = [".section-1", ".section-2", ".section-3", ".section-4"];
      
        gsap.set([...sections], { y: 20, alpha: 0 });
      
        gsap.to(sections.slice(0, 3), {
            alpha: 1,
            stagger: 0.25,
            duration: 1,
            y: 0,
        });

        sections.slice(0,3).forEach(selector => {
            gsap.to(selector, {
                alpha: 1,
                duration: 1,
                y: 0,
                stagger: 0.25,
            });
        });
      
        [".section-4"].forEach(selector => {
            gsap.to(selector, {
                alpha: 1,
                duration: 1,
                y: 0,
                stagger: 0.25,
                scrollTrigger: {
                    ...SCROLL_TRIGGER_CONFIG,
                    once: true
                }
            });
        });
    }, []);
}

export function useGSAPButtonAnimation() {
    useGSAP(() => {
        const buttons = document.querySelectorAll(".action-button");

        if (!buttons.length) return;

        buttons.forEach((btn) => {
            btn.addEventListener("mouseenter", () => {
                gsap.to(btn, { scale: 1.075, duration: 0.2 });
            });
            btn.addEventListener("mouseleave", () => {
                gsap.to(btn, { scale: 1, duration: 0.2 });
            });
        });

    }, []);
}