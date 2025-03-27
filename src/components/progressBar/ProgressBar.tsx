import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

interface ProgressBarProps {
    bgColor?: string;
    width?: string;
    height?: string;
}

export default function ProgressBar({ bgColor = "hsl(217, 71%, 53%)", width = "0px", height = "5px" } : ProgressBarProps) {

    useGSAP(() => {

        document.querySelectorAll(".link-navbar-container").forEach((linkNavbar) => {

            linkNavbar.addEventListener("mouseover", () => {

                gsap.to(linkNavbar.children[1], {
                    width: "100%",
                    duration: 1,
                })
    
            })
    
            linkNavbar.addEventListener("mouseout", () => {
    
                gsap.to(linkNavbar.children[1], {
                    width: "0%",
                    duration: 1,
                })
    
            })

        })

    }, [])

    return (
        <div id="progress" style={{ backgroundColor: bgColor, width: width, height: height }}></div>
    )
}