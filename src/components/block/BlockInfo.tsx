import { t } from "i18next";
import React from "react";
import SVGIcon from "../icon/SVGIcon";
import { Trans } from "react-i18next";

interface BlockInfoProps {
    titleI18next?: string;
    descriptionI18next?: string[];
    titleContentClasses?: string;
    descriptionContentClasses?: string;
    displayDescription?: boolean;
    icon?: string;
    hasTransKey?: boolean;
    listOfItems?: BlockInfoItemsListProps;
}

interface BlockInfoItemsListProps {
    items: string[] | Object[];
    itemsClasses: string;
    itemKeyToShow?: string;
}

export default function BlockInfo({ icon, titleI18next, descriptionI18next = [], titleContentClasses = "title", descriptionContentClasses = "subtitle mt-3", displayDescription = true, hasTransKey = false, listOfItems = { items: [], itemsClasses: "subtitle", itemKeyToShow: "" } } : BlockInfoProps) {
    return (
        <>
            {
                titleI18next &&
                    <div className={titleContentClasses}>
                        {
                            icon &&
                                <SVGIcon iconInfo={icon}  />
                        }
                        <div>{ t(titleI18next) }</div>
                    </div>
            }
            {
                descriptionI18next.length > 0 ?
                    descriptionI18next.map((description, i) => (
                        <div key={i} className={descriptionContentClasses}>
                            {
                                hasTransKey ? <Trans i18nKey={description}/> : t(description)
                            }
                        </div>
                    ))
                    : ""
            }
            {
                listOfItems.items.length > 0 ?
                    <ul className={listOfItems.itemsClasses}>
                        { 
                            listOfItems.items?.map((item, i) => (
                                <li key={i}>
                                    { 
                                        hasTransKey 
                                            ?
                                                listOfItems.itemKeyToShow?.length > 0 ? <Trans i18nKey={item[`${listOfItems.itemKeyToShow}`]}/> : <Trans i18nKey={item}/>
                                            : 
                                                listOfItems.itemKeyToShow?.length > 0 ? t(item[`${listOfItems.itemKeyToShow}`]) : t(item)
                                    }
                                </li>
                            ))
                        }
                    </ul>
                : ""
            }
        </>
    )
}