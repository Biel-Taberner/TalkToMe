import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface ButtonProps {
    isOutlined : boolean;
    color: string;
    icon: IconProp;
    text: string;
    textToSpeak?: string;
    speechConfig?: {};
    isPaused?: PauseProps;
    callback: (textToSpeak? : string, speechConfig?: {}) => void;
}

interface PauseProps {
    pauseRef: boolean,
    iconForResuming: IconProp,
    textForResuming: string,
}

export default function FuncButton({ color, icon, text, isOutlined, callback, speechConfig, textToSpeak, isPaused } : ButtonProps) {
    return (
        <button className={`action-button button ${isOutlined ? 'is-outlined' : ''} ${color}`} onClick={(e) => callback(textToSpeak, speechConfig)}>
            <div className="is-flex is-align-items-center button-icon-text-gap">
                <FontAwesomeIcon className={isPaused?.pauseRef ? 'iconInButton fa-rotate-90' : 'iconInButton'} icon={ isPaused?.pauseRef ? isPaused.iconForResuming : icon } />
                <div>
                    {
                        isPaused?.pauseRef ? isPaused?.textForResuming : text
                    }
                </div>
            </div>
        </button> 
    )
}