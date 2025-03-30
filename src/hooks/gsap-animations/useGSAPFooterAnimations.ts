import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap"
import Letterize from "letterizejs"

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