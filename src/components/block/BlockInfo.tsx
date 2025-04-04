import { t } from "i18next";
import React from "react";

interface BlockInfoProps {
    titleI18next: string;
    descriptionI18next?: string;
    titleContentClasses?: string;
    descriptionContentClasses?: string;
    displayDescription?: boolean;
}

export default function BlockInfo({ titleI18next, descriptionI18next, titleContentClasses = "title", descriptionContentClasses = "subtitle mt-3", displayDescription = true } : BlockInfoProps) {
    return (
        <>
            <div className={titleContentClasses}>
                { t(titleI18next) }
            </div>
            {
                displayDescription &&
                <div className={descriptionContentClasses}>
                    { t(descriptionI18next) }
                </div>
            }
        </>
    )
}