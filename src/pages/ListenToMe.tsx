import React, { useState } from "react";
import Container from "../components/container/Container";
import { faCheck, faCircleExclamation, faCopy, faMicrophone, faMicrophoneSlash, faTrash } from "@fortawesome/free-solid-svg-icons";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import { useVoices } from "../hooks/voice/useVoice";
import FuncButton from "../components/button/FuncButton.tsx";
import { useGSAPDemoPageAnimations, useGSAPSectionScrollAnimations } from "../hooks/gsap-animations/useGSAPAnimations.ts";
import ErrorModal from "../components/error/ErrorModal.tsx";
import { copyContentButton, startListening, stopListening } from "../components/button/FuncButton.ts";
import Subsection from "../components/subsection/Subsection.tsx";
import Textarea from "../components/textarea/Textarea.tsx";
import { setVoiceToUse } from "../components/dropdown/content/DropdownContent.ts";
import DropdownContainer from "../components/dropdown/container/DropdownContainer.tsx";
import { LANG_CONFIG } from "../constants/languages/language.ts";
import BlockInfoList from "../components/block/BlockInfoList.tsx";
import retrieveCommandsToTrigger from "../constants/commands/commands.ts";
import BlockInfo from "../components/block/BlockInfo.tsx";
import useTranscriptedContent from "../hooks/voice/useTranscriptedContent.ts";
import { t } from "i18next";

function Render() {

    const [dropdown, setDropdown] = useState(false);
    const [microphoneAvailable, setMicrophoneAvailable] = useState(true);
    const [interimToggler, setInterimToggler] = useState(false);
    const [copyButtonTrigger, setCopyButtonTrigger] = useState(false);
    const [continuousToggler, setContinuousToggler] = useState(false);
    const [voiceCommandsToggler, setVoiceCommandsToggler] = useState(false);
    const { languages } = useVoices(LANG_CONFIG.langCode);
    const [selectedVoice, setSelectedVoice] = useState(LANG_CONFIG);

    const commands = voiceCommandsToggler ? retrieveCommandsToTrigger() : [];

    const { transcript, listening, resetTranscript, interimTranscript, browserSupportsSpeechRecognition, isMicrophoneAvailable } = useSpeechRecognition({ commands });

    const [trancriptedContent, setTranscriptedContent] = useState(listening);

    useTranscriptedContent(transcript, setTranscriptedContent);

    useGSAPDemoPageAnimations();

    useGSAPSectionScrollAnimations();

    return (
        <>
            <title>ListenToMe | Talk&ListenToMe</title>
            <div className="content mt-6">
                <section className={`section section-scroll`}>
                    {
                        !browserSupportsSpeechRecognition &&
                            <ErrorModal icon={faCircleExclamation} contentI18n="browser_not_support_speech_recognition" />
                    }
                    <div className={!browserSupportsSpeechRecognition ? 'disable-page' : ''}>
                        <BlockInfo titleI18next="ListenToMe" titleContentClasses="section-1 is-capitalized title is-1 mt-6" descriptionI18next="listenToMe_subtitle" descriptionContentClasses="section-1 subtitle mt-3" />

                        <DropdownContainer 
                            dropdownTrigger={dropdown}
                            selectedLanguage={selectedVoice} 
                            i18nDropdownText={"demo_section_1_dropdown_opt"} 
                            callback={() => browserSupportsSpeechRecognition && setDropdown(!dropdown)}
                            languagesToMap={languages}
                            callbackDropdown={setVoiceToUse}
                            setterDropdownCallback={setSelectedVoice}
                            propertyInArray="name"
                            toggleHelperText={{ toggleRef: true, i18nHelperText: "listenToMe_lang_helper_text" }}
                        />

                        <div className="mt-6 section-2">
                            <Subsection numOfSubsections={2} titleI18next={["provisional_transcription", "continuity"]} subsectionDescriptionI18next={["listenToMe_interimResult_description", "listenToMe_continuity_description"]} disableTrigger={!browserSupportsSpeechRecognition} callbacks={[() => setInterimToggler(!interimToggler), () => setContinuousToggler(!continuousToggler)]} />
                            <Subsection numOfSubsections={1} titleI18next={["voice_commands"]} subsectionDescriptionI18next={["listenToMe_voice_commands_description"]} disableTrigger={!browserSupportsSpeechRecognition} callbacks={[() => setVoiceCommandsToggler(!voiceCommandsToggler)]} />
                        </div>

                        {
                            voiceCommandsToggler &&
                                <BlockInfoList mainTitleI18n="voice_commands_list_title" descriptionI18n="voice_commands_list_subtitle" commandsToDisplay={commands} />
                        }
                        
                        <div className="mt-6 section-3">
                            <BlockInfo titleI18next="transcription" titleContentClasses="title" displayDescription={false} />
                            {
                                !isMicrophoneAvailable &&
                                    <ErrorModal icon={faCircleExclamation} wantsTopMargin={false} contentI18n="microphone_not_enabled" />
                            }
                            <div className="buttons mt-5">
                                <FuncButton isDisabled={!browserSupportsSpeechRecognition} isToggable={{ toggleRef: listening, toggableColor: "is-danger", toggableTextI18n: "stop", toggableIcon: faMicrophoneSlash }} color="is-link" isOutlined icon={faMicrophone} textI18n="listen" callback={() => { !listening ? startListening(isMicrophoneAvailable, setMicrophoneAvailable, SpeechRecognition, selectedVoice.langCode, continuousToggler, interimToggler) : stopListening(SpeechRecognition) }} />
                                <FuncButton isDisabled={!browserSupportsSpeechRecognition} color="is-success" isOutlined icon={faTrash} textI18n="clear" callback={resetTranscript} />
                                <FuncButton isDisabled={!browserSupportsSpeechRecognition} color={copyButtonTrigger ? "is-success" : "is-warning"} isOutlined icon={copyButtonTrigger ? faCheck : faCopy} textI18n={copyButtonTrigger ? "copied" : "copy"} callback={() => copyContentButton(trancriptedContent, setCopyButtonTrigger)} />
                            </div>
                            {
                                interimToggler &&
                                    <Textarea contentToShow={interimTranscript} classes={["textarea", "non-resizable", "section-4"]} numRows={1} isDisabled placeholderI18nText="listenToMe_provisional_transcription_placeholder" />
                            }
                            <Textarea contentToShow={trancriptedContent} classes={["textarea", "section-4", "non-resizable"]} isDisabled placeholderI18nText="listenToMe_transcription_placeholder" />
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default function ListenToMe() {
    return (
        <Container children={Render()} />
    )
}