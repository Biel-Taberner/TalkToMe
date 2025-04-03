import React from "react";
import DropdownTrigger from "../trigger/DropdownTrigger";
import DropdownContent from "../content/DropdownContent.tsx";

interface DropdownContainerProps {
    dropdownTrigger: boolean;
    selectedLanguage: { name: string, flagCode?: string };
    i18nDropdownText: string;
    languagesToMap: any[];
    displayIconInTriggerContent?: boolean;
    displayIconInTrigger?: boolean;
    propertyInArray: string;
    callback?: (...args : any) => void;
    callbackDropdown: (...args : any) => void;
    setterDropdownCallback: (...args : any) => void;
}

export default function DropdownContainer({ dropdownTrigger, propertyInArray, selectedLanguage, displayIconInTrigger, displayIconInTriggerContent, i18nDropdownText, languagesToMap, callback, callbackDropdown, setterDropdownCallback } : DropdownContainerProps) {
    return (
        <div className={`dropdown maxWidth ${dropdownTrigger ? 'is-active' : ''}`} onClick={callback}>
            <DropdownTrigger displayIcon={displayIconInTrigger} selectedLanguage={selectedLanguage} i18nDropdownText={i18nDropdownText} />
            <DropdownContent propertyInArray={propertyInArray} displayIcon={displayIconInTriggerContent} languagesToMap={languagesToMap} callback={callbackDropdown} setterCallback={setterDropdownCallback} />
        </div>
    )
}