import React from "react";

interface SliderInputProps {
    isDisabled?: boolean;
    callback: (...args : any) => void;
}

export default function SliderInput({ isDisabled, callback } : SliderInputProps) {
    return (
        <label className="switch">
            <input disabled={isDisabled} type="checkbox" onChange={callback} />
            <span className="slider round"></span>
        </label>
    )
}