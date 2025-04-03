import { t } from "i18next";
import React from "react";
import { Trans } from "react-i18next";

interface BlockInfoProps {
    titleI18next: string;
    descriptionI18next: string;
}

export default function BlockInfo({ titleI18next, descriptionI18next } : BlockInfoProps) {
    return (
        <>
            <div className="title is-capitalized">
                {/* <Trans i18nKey={"demo_section_2_title"} values={{ prop: titleI18next }} /> */}
                { t(titleI18next) }
            </div>
            <div className="subtitle mt-3">
                {/* <Trans i18nKey={"demo_section_2_title_subtitle"} values={{ prop: titleI18next, voiceProp: voiceProp, determinant: determinant }} components={{ 1: <code className="is-lowercase"/> }}>
                </Trans> */}
                { t(descriptionI18next) }
            </div>
        </>
    )
}