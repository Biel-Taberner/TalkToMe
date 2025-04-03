import { t } from "i18next";
import React from "react";

interface TextareaProps {
    contentToShow: string;
    classes?: string[];
    isDisabled?: boolean;
    placeholderI18nText: string;
    numRows?: number;
    numCols?: number;
    callback?: (...args : any) => void;
}

export default function Textarea({ contentToShow, classes, isDisabled = false, placeholderI18nText, numRows = 0, numCols = 0, callback } : TextareaProps) {

    return (
        <div className="my-4">
            <textarea disabled={isDisabled} className={classes?.join(" ")} placeholder={t(placeholderI18nText)} value={contentToShow} rows={numRows} cols={numCols} onChange={callback} />
        </div>
    )
}