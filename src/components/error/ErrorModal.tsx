import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { t } from "i18next";
import React from "react";

interface ErrorModalProps {
    icon: IconProp;
    contentI18n: string;
    wantsTopMargin?: boolean;
}

export default function ErrorModal({ icon, contentI18n, wantsTopMargin = true } : ErrorModalProps) {

    const renderClasses = () => {
        return (wantsTopMargin ? 'mt-6' : '') + " has-background-danger-light box";
    }

    return (
        <div className={renderClasses()}>
            <div className="is-flex icon-text-gap">
                <FontAwesomeIcon icon={icon} size="xl" />
                <div>{ t(contentI18n) }</div>
            </div>
        </div>
    )
}