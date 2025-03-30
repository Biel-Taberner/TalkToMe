import React from "react";
import parse from "html-react-parser";

interface IconInfoProps {
    iconInfo: any,
}

export default function SVGIcon({ iconInfo } : IconInfoProps) {
    return (
        parse(`${iconInfo}`)
    )
}