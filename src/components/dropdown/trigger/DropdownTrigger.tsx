import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { t } from "i18next";
import React from "react";
import Flag from "react-flagkit";

interface DropdownTriggerProps {
    selectedLanguage: { name : string, flagCode? : string };
    i18nDropdownText: string;
    displayIcon?: boolean;
    toggleHelperRef: boolean;
    toggleHelperText: string;
}

export default function DropdownTrigger({ selectedLanguage, displayIcon = true, toggleHelperRef, toggleHelperText, i18nDropdownText } : DropdownTriggerProps) {
    return (
        <div className="dropdown-trigger maxWidth">
            <button className="section-1 button maxWidth is-justify-content-space-between" aria-haspopup="true" aria-controls="dropdown-menu">
                <div className="is-flex icon-text-gap">
                    {displayIcon && selectedLanguage?.flagCode && 
                        <span className="icon is-small">
                            <Flag country={selectedLanguage?.flagCode} />
                        </span>
                    }
                    <span className="is-capitalized">{selectedLanguage?.name || t(i18nDropdownText) }</span>
                </div>
                <span className="icon is-small">
                    <FontAwesomeIcon icon={faCaretDown} />
                </span>
            </button>
            {
                toggleHelperRef &&
                    <p className="help section-1">{ t(toggleHelperText) }</p>
            }
        </div>
    )
}