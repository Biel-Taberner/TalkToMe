import { t } from "i18next";
import React from "react";

interface BlockInfoListProps {
    mainTitleI18n: string;
    descriptionI18n: string;
    contentList18n: string[];
}

export default function BlockInfoList({ mainTitleI18n, descriptionI18n, contentList18n } : BlockInfoListProps) {
    
    return (
        <div className="section-3 mt-6">
            <div className="is-flex title icon-text-gap is-align-items-center"> 
                <div>{ t(mainTitleI18n) }</div>
            </div>
            <p className="subtitle mt-3">
                { t(descriptionI18n) }
            </p>
            <ul className="subtitle">
                {
                    contentList18n.map((content: string, i: number) => <li key={i}>{ t(content) }</li>)
                }
            </ul>
        </div>
    )
}