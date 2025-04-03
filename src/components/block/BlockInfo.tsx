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
                {/* <Trans i18nKey={"demo_section_2_title"} values={{ prop: titleI18next }} /> */}
                { t(titleI18next) }
            </div>
            {
                displayDescription &&
                <div className={descriptionContentClasses}>
                    {/* <Trans i18nKey={"demo_section_2_title_subtitle"} values={{ prop: titleI18next, voiceProp: voiceProp, determinant: determinant }} components={{ 1: <code className="is-lowercase"/> }}>
                    </Trans> */}
                    { t(descriptionI18next) }
                </div>
            }
        </>
    )
}