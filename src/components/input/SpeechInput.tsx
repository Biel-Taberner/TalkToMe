import { t } from "i18next";
import React from "react";
import { Trans } from "react-i18next";

interface SpeechInputProps {
    type: string;
    minValue: number;
    maxValue: number;
    value: number;
    stepValue?: number;
    fieldKey: string;
    isNumericValue: boolean;
    showCurrentValue?: boolean;
    speechConfigKeyCallback: (fieldKey: string, value: any, isNumericValue: boolean) => void;
}

export default function SpeechInput({ type, minValue, maxValue, value, stepValue, showCurrentValue, fieldKey, speechConfigKeyCallback, isNumericValue } : SpeechInputProps) {
    return (
        <>
            <input type={type} min={minValue} max={maxValue} defaultValue={value} step={stepValue ? stepValue : 0.01} onChange={(e) => speechConfigKeyCallback(fieldKey, e.target.value, isNumericValue)} />
            {
                showCurrentValue &&
                    <div>
                        <Trans i18nKey="demo_section_2_input_show_value_text" values={{ prop: t(fieldKey).toLowerCase(), propValue: value }} />
                    </div>
            }
        </>
    )
}