import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useGSAPButtonAnimations } from "../../hooks/gsap-animations/useGSAPAnimations";

interface ButtonProps {
    isOutlined : boolean;
    color: string;
    icon: IconProp;
    text: string;
    textToSpeak?: string;
    speechConfig?: {};
    isPaused?: PauseProps;
    isToggable?: ToggableProps;
    callback: (textToSpeak? : string, speechConfig?: {}) => void;
}

interface PauseProps {
    pauseRef: boolean,
    iconForResuming: IconProp,
    textForResuming: string,
}

interface ToggableProps {
    toggleRef: boolean,
    toggableColor: string;
    toggableText: string;
    toggableIcon?: IconProp;
}

export default function FuncButton({ color, icon, text, isOutlined, callback, speechConfig, textToSpeak, isPaused, isToggable } : ButtonProps) {
    
    useGSAPButtonAnimations();
    
    return (
        <button className={`action-button button ${isOutlined ? 'is-outlined' : ''} ${isToggable?.toggleRef ? isToggable?.toggableColor : color}`} onClick={(e) => callback(textToSpeak, speechConfig)}>
            <div className="is-flex is-align-items-center button-icon-text-gap">
                <FontAwesomeIcon className={isPaused?.pauseRef ? 'iconInButton fa-rotate-90' : 'iconInButton'} icon={ isPaused?.pauseRef ? isPaused.iconForResuming : isToggable?.toggleRef ? isToggable?.toggableIcon : icon } />
                <div>
                    {
                        isPaused?.pauseRef ? isPaused?.textForResuming : isToggable?.toggleRef ? isToggable?.toggableText : text
                    }
                </div>
            </div>
        </button> 
    )
}