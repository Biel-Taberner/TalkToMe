import { t } from "i18next";
import React from "react";

interface FooterCopyrightContainerProps {
    ccRef: React.RefObject<HTMLElement | null>;
}

export default function FooterCopyrightContainer({ ccRef } : FooterCopyrightContainerProps) {
    return (
        <div className="has-background-dark p-4 is-flex is-justify-content-center has-text-white-bis">
            <div ref={ccRef} className="mr-1">
                &copy; 2025 { t('by') } Gabriel Taberner Machado
            </div>
        </div>
    )
}