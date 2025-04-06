import { t } from "i18next";
import React from "react";
import Flag from "react-flagkit";

interface DropdownContentProps {
    languagesToMap: any[];
    displayIcon?: boolean;
    propertyInArray: string;
    callback: (...args : any) => void;
    setterCallback?: (...args : any) => void;
}

export default function DropdownContent({ languagesToMap, callback, setterCallback, displayIcon = true, propertyInArray } : DropdownContentProps) {
    return (
        <div className="dropdown-menu maxWidth" id="dropdown-menu" role="menu">
            <div className="dropdown-content p-3 dropdown-content-height">
                {   languagesToMap.length > 0 ?
                        languagesToMap.map((voice, i) => (
                            <div key={i} className="dropdown-country-item icon-text-gap p-3 is-flex is-justify-content-start" onClick={() => callback(voice, setterCallback)}>
                                {
                                    displayIcon &&
                                        <Flag country={voice?.langCode.split("-")[1]} />
                                }
                                <div className="is-capitalized">{voice[propertyInArray]}</div>
                            </div>
                        ))
                    :
                    <div className="p-2 is-flex is-justify-content-start">
                        <p className="is-italic">{ t('demo_section_2_voice_dropdown_no_opts') }</p>
                    </div>
                }
            </div>
        </div>
    )
}