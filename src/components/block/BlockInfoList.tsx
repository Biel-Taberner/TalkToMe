import { t } from "i18next";
import React from "react";

interface BlockInfoListProps {
    mainTitleI18n: string;
    descriptionI18n: string;
    commandsToDisplay: Object[];
}

export default function BlockInfoList({ mainTitleI18n, descriptionI18n, commandsToDisplay } : BlockInfoListProps) {
    
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
                    commandsToDisplay.map((commandToDisplay: Object, i: number) => <li key={i}>{ commandToDisplay?.name }</li>)
                }
            </ul>
        </div>
    )
}