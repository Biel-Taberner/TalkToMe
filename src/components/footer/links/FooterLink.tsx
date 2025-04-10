import React from "react";

interface FooterLinkProps {
    redirectTo: string;
    imgLogo: string;
    imgLogoAlt?: string;
}

export default function FooterLink({ redirectTo, imgLogo, imgLogoAlt } : FooterLinkProps) {
    return (
        <div>
            <a target="_blank" href={redirectTo}>
                <img className="is-hoverable image is-32x32" src={imgLogo} alt={imgLogoAlt} />
            </a>
        </div>
    )
}