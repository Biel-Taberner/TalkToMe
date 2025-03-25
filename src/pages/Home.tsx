import React, { useEffect, useState } from "react"
import Container from "../components/container/Container"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMicrophone, faCode, faPodcast, faSliders } from '@fortawesome/free-solid-svg-icons'
import { t } from "i18next"
import { Trans, useTranslation } from "react-i18next"

function Render() {

    const { t, i18n: {changeLanguage, language} } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(language);

    return (
        <div className="content mt-6">
            <section className="section">
                <h1 className="title is-1 mt-6">TalkToMe</h1>
                <p className="subtitle mt-3">
                    { t('home_subtitle') }
                </p>
            </section>

            <section className="section">
                <div className="is-flex title icon-text-gap is-align-items-center">
                    <FontAwesomeIcon icon={faMicrophone} className="has-text-link" />
                    <div>{ t('home_section_2_title') }</div>
                </div>
                <p className="subtitle mt-3">
                    { t('home_section_2_subtitle') }
                </p>
            </section>

            <section className="section">
                <div className="is-flex title icon-text-gap is-align-items-center">
                    <FontAwesomeIcon icon={faPodcast} className="has-text-success" />
                    <div>{ t('home_section_3_title') }</div>
                </div>
                <p className="subtitle mt-3">
                    { t('home_section_3_subtitle_1') }
                </p>
                <p className="subtitle mt-3">
                    { t('home_section_3_subtitle_2') }
                </p>
            </section>

            <section className="section">
                <div className="is-flex title icon-text-gap is-align-items-center">
                    <FontAwesomeIcon icon={faSliders} className="has-text-warning" />
                    <div>{ t('home_section_4_title') }</div>
                </div>
                <p className="subtitle mt-3">
                    { t('home_section_4_subtitle') }
                </p>
                <ul className="subtitle">
                    <li><Trans i18nKey={"home_section_4_list_1"}/></li>
                    <li><Trans i18nKey={"home_section_4_list_2"}/></li>
                    <li><Trans i18nKey={"home_section_4_list_3"}/></li>
                </ul>
            </section>

            <section className="section">
                <div className="is-flex title icon-text-gap is-align-items-center">
                    <FontAwesomeIcon icon={faCode} className="has-text-danger" />
                    <div>{ t('home_section_5_title') }</div>
                </div>
                <p className="subtitle mt-3">
                    <Trans i18nKey={"home_section_5_subtitle"}/>
                </p>
            </section>
        </div>
    )
}

export default function Home() {

    return (
        <Container children={<Render/>}/>
    )

}