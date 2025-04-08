import React from "react";
import BlockInfo from "../block/BlockInfo";
import SliderInput from "../input/slider/SliderInput";
import SpeechInput from "../input/speech/SpeechInput";

interface SubsectionColumnProps {
    titleI18next: string;
    disableTrigger?: boolean;
    descriptionI18next: string;
    speechInput?: SpeechInputProps;
    isChecked: boolean; 
    callback: (...args : any) => void;
}

interface SpeechInputProps {
    speechInputFieldKey: string;
    speechInputValue: number;
    speechInputMinValue: number;
    speechInputMaxValue: number;
}

export default function SubsectionColumn({ titleI18next, descriptionI18next, speechInput, disableTrigger, isChecked, callback } : SubsectionColumnProps) {
    return (
        <div className="column">
            <BlockInfo titleI18next={titleI18next} descriptionI18next={[descriptionI18next]} />
            {
                speechInput
                ? <SpeechInput showCurrentValue fieldKey={speechInput?.speechInputFieldKey} type="range" minValue={speechInput?.speechInputMinValue} maxValue={speechInput?.speechInputMaxValue} value={speechInput?.speechInputValue} speechConfigKeyCallback={callback} isDisabled={disableTrigger} />
                : <SliderInput isChecked={isChecked} isDisabled={disableTrigger} callback={callback} />
            }
        </div>
    )
}