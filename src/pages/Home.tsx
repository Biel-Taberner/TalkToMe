import React from "react"
import Container from "../components/container/Container"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMicrophone, faCode, faPodcast, faSliders } from '@fortawesome/free-solid-svg-icons'

function Render() {
    return (
        <div className="content mt-6">
            <section className="section">
                <h1 className="title is-1 mt-6">TalkToMe</h1>
                <p className="subtitle mt-3">
                    A simple fun and innovate application to interact with audio!
                </p>
            </section>

            <section className="section">
                <div className="is-flex title icon-text-gap is-align-items-center">
                    <FontAwesomeIcon icon={faMicrophone} className="has-text-link" />
                    <div>What is TalkToMe?</div>
                </div>
                <p className="subtitle mt-3">
                    TalkToMe is an innovative and fun application that allows users to convert text into audio and audio into text quickly and accessibly. Designed to enhance communication and accessibility, it also lets users experiment with different voice modulation settings, making the experience more dynamic and entertaining.
                </p>
            </section>

            <section className="section">
                <div className="is-flex title icon-text-gap is-align-items-center">
                    <FontAwesomeIcon icon={faPodcast} className="has-text-success" />
                    <div>Why use TalkToMe?</div>
                </div>
                <p className="subtitle mt-3">
                    TalkToMe was born from the need to explore the field of speech synthesis and recognition, as well as the possibility of interacting with audio input peripherals, such as microphones. Its goal is to simplify text-to-audio conversion in a flexible and user-friendly way, enabling users to improve accessibility, optimize learning, and create content efficiently.
                </p>
                <p className="subtitle mt-3">
                    Whether you need to transcribe notes, listen to documents, experiment with different tones and speech speeds, or download customized audio files, TalkToMe adapts to a wide range of needs, providing a practical and versatile solution.
                </p>
            </section>

            <section className="section">
                <div className="is-flex title icon-text-gap is-align-items-center">
                    <FontAwesomeIcon icon={faSliders} className="has-text-warning" />
                    <div>What can I do with TalkToMe?</div>
                </div>
                <p className="subtitle mt-3">
                    Inside the app, users can:
                </p>
                <ul className="subtitle">
                    <li><strong>Convert text to speech</strong> with support for multiple languages.</li>
                    <li><strong>Adjust voice parameters,</strong> such as speed, pitch, and style, to personalize the audio experience.</li>
                    <li><strong>Download generated audio</strong> in <strong>.wav and .mp3 formats</strong>, making it easy to use in other projects or devices.</li>
                </ul>
            </section>

            <section className="section">
                <div className="is-flex title icon-text-gap is-align-items-center">
                    <FontAwesomeIcon icon={faCode} className="has-text-danger" />
                    <div>How does TalkToMe work?</div>
                </div>
                <p className="subtitle mt-3">
                    TalkToMe uses the <strong>JavaScript SpeechSynthesis API</strong> for text-to-speech conversion, allowing users to generate natural and customizable audio. For speech-to-text conversion, it employs advanced voice recognition technologies, ensuring precise and real-time transcription.
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