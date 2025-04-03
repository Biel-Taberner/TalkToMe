import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useGSAPButtonAnimations } from "../../hooks/gsap-animations/useGSAPAnimations";
import { t } from "i18next";

interface ButtonProps {
    isOutlined : boolean;
    color: string;
    icon: IconProp;
    textI18n: string;
    textToSpeak?: string;
    speechConfig?: {};
    isDisabled?: boolean;
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
    toggableTextI18n: string;
    toggableIcon?: IconProp;
}

export default function FuncButton({ color, icon, textI18n, isOutlined, callback, speechConfig, textToSpeak, isPaused, isToggable, isDisabled } : ButtonProps) {
    
    useGSAPButtonAnimations();
    
    return (
        <button disabled={isDisabled} className={`action-button button ${isOutlined ? 'is-outlined' : ''} ${isToggable?.toggleRef ? isToggable?.toggableColor : color}`} onClick={(e) => callback(textToSpeak, speechConfig)}>
            <div className="is-flex is-align-items-center button-icon-text-gap">
                <FontAwesomeIcon className={isPaused?.pauseRef ? 'iconInButton fa-rotate-90' : 'iconInButton'} icon={ isPaused?.pauseRef ? isPaused.iconForResuming : isToggable?.toggleRef ? isToggable?.toggableIcon : icon } />
                <div>
                    {
                        isPaused?.pauseRef ? isPaused?.textForResuming : isToggable?.toggleRef ? t(isToggable?.toggableTextI18n) : t(textI18n)
                    }
                </div>
            </div>
        </button> 
    )
}