import React from "react";

interface SliderInputProps {
    isDisabled?: boolean;
    isChecked: boolean;
    callback: (...args : any) => void;
}

export default function SliderInput({ isChecked, isDisabled, callback } : SliderInputProps) {
    return (
        <label className="switch">
            <input disabled={isDisabled} checked={isChecked} type="checkbox" onChange={callback} />
            <span className="slider round"></span>
        </label>
    )
}