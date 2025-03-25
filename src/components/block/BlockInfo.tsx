import React from "react";
import { Trans } from "react-i18next";

interface BlockInfoProps {
    title: string;
    voiceProp: string;
    determinant: string;
}

export default function BlockInfo({ title, voiceProp, determinant } : BlockInfoProps) {
    return (
        <>
            <div className="title is-capitalized">
                <Trans i18nKey={"demo_section_2_title"} values={{ prop: title }} />
            </div>
            <div className="subtitle mt-3">
                <Trans i18nKey={"demo_section_2_title_subtitle"} values={{ prop: title, voiceProp: voiceProp, determinant: determinant }} components={{ 1: <code className="is-lowercase"/> }}>
                </Trans>
            </div>
        </>
    )
}