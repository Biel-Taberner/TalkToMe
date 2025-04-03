import { t } from "i18next";
import React from "react";
import BlockInfo from "../block/BlockInfo";
import SliderInput from "../input/slider/SliderInput";

interface SubsectionColumnProps {
    titleI18next: string;
    disableTrigger?: boolean;
    descriptionI18next: string;
    callback: (...args : any) => void;
}

export default function SubsectionColumn({ titleI18next, descriptionI18next, disableTrigger, callback } : SubsectionColumnProps) {
    return (
        <div className="column">
            <BlockInfo titleI18next={titleI18next} descriptionI18next={descriptionI18next} />
            <SliderInput isDisabled={disableTrigger} callback={callback} />
        </div>
    )
}