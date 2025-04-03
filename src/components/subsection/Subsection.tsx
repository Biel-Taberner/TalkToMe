import React from "react";
import SubsectionColumn from "./SubsectionColumn";

interface SubsectionProps {
    titleI18next: string[];
    subsectionDescriptionI18next: string[];
    disableTrigger?: boolean;
    numOfSubsections?: number;
    callbacks: ((...args: any[]) => void)[];
}

export default function Subsection({ titleI18next, subsectionDescriptionI18next, disableTrigger, numOfSubsections = 1 , callbacks } : SubsectionProps) {
    
    const render = () => {
        const rows = [];

        for (let i = 0; i < numOfSubsections; i++) {
            rows.push(<SubsectionColumn key={i} titleI18next={titleI18next[i]} descriptionI18next={subsectionDescriptionI18next[i]} disableTrigger={disableTrigger} callback={callbacks[i]} />)
        }
        
        return rows;
    }
    
    return (
        <div className="columns">
            {
                render()
            }
        </div>
    )
}