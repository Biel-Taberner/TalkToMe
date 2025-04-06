import React from "react";
import DropdownTrigger from "../trigger/DropdownTrigger";
import DropdownContent from "../content/DropdownContent.tsx";

interface DropdownContainerProps {
    dropdownTrigger: boolean;
    selectedLanguage: { name?: string, flagCode?: string };
    i18nDropdownText: string;
    languagesToMap: any[];
    displayIconInTriggerContent?: boolean;
    displayIconInTrigger?: boolean;
    propertyInArray: string;
    toggleHelperText?: DropdownToggleHelperProps;
    callback?: (...args : any) => void;
    callbackDropdown: (...args : any) => void;
    setterDropdownCallback?: (...args : any) => void;
}

interface DropdownToggleHelperProps {
    toggleRef?: boolean;
    i18nHelperText?: string;
}

export default function DropdownContainer({ dropdownTrigger, toggleHelperText = { toggleRef: true, i18nHelperText: "demo_section_1_dropdown_helper" }, propertyInArray, selectedLanguage, displayIconInTrigger, displayIconInTriggerContent, i18nDropdownText, languagesToMap, callback, callbackDropdown, setterDropdownCallback } : DropdownContainerProps) {
    return (
        <div className={`dropdown maxWidth ${dropdownTrigger ? 'is-active' : ''}`} onClick={callback}>
            <DropdownTrigger toggleHelperRef={toggleHelperText?.toggleRef} toggleHelperText={toggleHelperText?.i18nHelperText} displayIcon={displayIconInTrigger} selectedLanguage={selectedLanguage} i18nDropdownText={i18nDropdownText} />
            <DropdownContent propertyInArray={propertyInArray} displayIcon={displayIconInTriggerContent} languagesToMap={languagesToMap} callback={callbackDropdown} setterCallback={setterDropdownCallback} />
        </div>
    )
}