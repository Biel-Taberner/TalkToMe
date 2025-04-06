import React from "react";
import { useProgressBarAnimations } from "../../hooks/gsap-animations/useGSAPAnimations";

interface ProgressBarProps {
    bgColor?: string;
    width?: string;
    height?: string;
}

export default function ProgressBar({ bgColor = "hsl(217, 71%, 53%)", width = "0px", height = "5px" } : ProgressBarProps) {

    useProgressBarAnimations();

    return (
        <div id="progress" style={{ backgroundColor: bgColor, width: width, height: height }}></div>
    )
}