import React, { useEffect, useState } from "react";
import Container from "../components/container/Container.tsx";
import { faPlay, faStop, faPause, faEject, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import FuncButton from "../components/button/FuncButton.tsx";
import BlockInfo from "../components/block/BlockInfo.tsx";
import { t } from "i18next";
import { useGSAPDemoPageAnimations, useGSAPSectionScrollAnimations } from "../hooks/gsap-animations/useGSAPAnimations.ts";
import { handleAudioControl, handleChange } from "../components/button/FuncButton.ts";
import { useVoices } from "../hooks/voice/useVoice.ts";
import { SPEECH_CONFIG_DEFAULT } from "../constants/speech_synthesis/speech_synthesis.ts";
import ErrorModal from "../components/error/ErrorModal.tsx";
import DropdownContainer from "../components/dropdown/container/DropdownContainer.tsx";
import Textarea from "../components/textarea/Textarea.tsx";
import { LANG_CONFIG } from "../constants/languages/language.ts";
import { setVoiceToUse } from "../components/dropdown/content/DropdownContent.ts";
import Subsection from "../components/subsection/Subsection.tsx";
import { useSpeechSynthesis } from "../hooks/speechSynthesis/useSpeechSynthesis.ts";

const Render = () => {

  const [dropdown, setDropdown] = useState<boolean>(false);
  const [dropdownVoices, setDropdownVoices] = useState<boolean>(false);
  const [paused, setIsPaused] = useState<boolean>(false);
  const [textToSpeak, setTextToSpeak] = useState<string>("");
  const [speechSynthesisConfig, setSpeechSynthesisConfig] = useState<SpeechSynthesisUtterance>(SPEECH_CONFIG_DEFAULT);
  const [speechSynthesisSupport, setSpeechSynthesisSupport] = useState<boolean>(true);
  const [selectedVoice, setSelectedVoice] = useState<SpeechSynthesisVoice>({});
  const [selectedLanguage, setSelectedLanguage] = useState<{ name: "", flagCode: "", langCode: "" }>(LANG_CONFIG);
  const { voices, languages } = useVoices(selectedLanguage.langCode);

  useSpeechSynthesis(setSpeechSynthesisSupport);

  useGSAPDemoPageAnimations();

  useGSAPSectionScrollAnimations();

  return (
    <>
      <title>TalkToMe | Talk&ListenToMe</title>
      <div className="content mt-6">
        <section className="section section-scroll">
          {
            !speechSynthesisSupport &&
              <ErrorModal icon={faCircleExclamation} contentI18n="speech_synthesis_not_supported" />
          }
          <div className={`${speechSynthesisSupport ? '' : 'disable-page'}`}>
            <BlockInfo titleI18next="TalkToMe" titleContentClasses={`section-1 title is-1 mt-6`} descriptionI18next="demo_section_1_subtitle" descriptionContentClasses="section-1 subtitle mt-3" />
          
            <DropdownContainer 
              dropdownTrigger={dropdown}
              selectedLanguage={selectedLanguage} 
              i18nDropdownText={"demo_section_1_dropdown_opt"} 
              callback={() => speechSynthesisSupport && setDropdown(!dropdown)}
              languagesToMap={languages}
              callbackDropdown={setVoiceToUse}
              setterDropdownCallback={setSelectedLanguage}
              propertyInArray="name"
              toggleHelperText={{ toggleRef: true, i18nHelperText: "demo_section_1_dropdown_helper" }}
            />

            <div className="mt-6 section-2">
              <Subsection
                speechInputs={[
                  { speechInputFieldKey: 'rate', speechInputValue: speechSynthesisConfig.rate, speechInputMinValue: 0.1, speechInputMaxValue: 1 },
                  { speechInputFieldKey: 'pitch', speechInputValue: speechSynthesisConfig.pitch, speechInputMinValue: 0, speechInputMaxValue: 2 }
                ]} 
                numOfSubsections={2} 
                titleI18next={['rate', 'pitch']} 
                subsectionDescriptionI18next={['talkToMe_page_rate_description', 'talkToMe_page_pitch_description']} 
                callbacks={[
                  (e) => handleChange('rate', e.target.value, setSpeechSynthesisConfig),
                  (e) => handleChange('pitch', e.target.value, setSpeechSynthesisConfig),
                ]} 
                disableTrigger={!speechSynthesisSupport} />
              <Subsection
                speechInputs={[
                  { speechInputFieldKey: "volume", speechInputValue: speechSynthesisConfig.volume, speechInputMinValue: 0, speechInputMaxValue: 1 }
                ]} 
                numOfSubsections={1} 
                titleI18next={['volume']} 
                subsectionDescriptionI18next={['talkToMe_page_volume_description']} 
                callbacks={[
                  (e) => handleChange('volume', e.target.value, setSpeechSynthesisConfig),
                ]} 
                disableTrigger={!speechSynthesisSupport} />
            </div>

            <div className="section-3 mt-6">
              <BlockInfo titleI18next={t('voice')} />  
              <DropdownContainer 
                dropdownTrigger={dropdownVoices}
                selectedLanguage={{ name: selectedVoice.voiceURI }}
                i18nDropdownText={"demo_section_1_dropdown_opt"} 
                callback={() => speechSynthesisSupport && setDropdownVoices(!dropdownVoices)}
                languagesToMap={voices}
                callbackDropdown={setSelectedVoice}
                propertyInArray="name"
                toggleHelperText={{ toggleRef: true, i18nHelperText: "demo_section_2_voice_dropdown_helper" }}
                displayIconInTrigger={false}
                displayIconInTriggerContent={false}
              />
            </div>

            <div className="section-4 mt-6">
              <BlockInfo titleI18next="content" />
              <Textarea isDisabled={!speechSynthesisSupport} classes={["textarea"]} placeholderI18nText="demo_section_3_textarea_placeholder" contentToShow={textToSpeak} callback={(e) => setTextToSpeak(e.target.value)} />
              <div className="buttons mt-5">
                <FuncButton isDisabled={!speechSynthesisSupport} color="is-success" isOutlined icon={faPlay} textI18n={ t('play_button_text') } callback={() => handleAudioControl('play', paused, textToSpeak, speechSynthesisConfig, selectedVoice, selectedLanguage.langCode)} />
                <FuncButton isDisabled={!speechSynthesisSupport} color="is-warning" isOutlined icon={faPause} textI18n={t('pause_button_text')} isPaused={{ pauseRef: paused, textForResuming: t('resume_button_text'), iconForResuming: faEject }} callback={() => { setIsPaused(!paused); handleAudioControl(paused ? 'resume' : 'pause', paused, textToSpeak, speechSynthesisConfig, selectedVoice, selectedLanguage.langCode); }} />
                <FuncButton isDisabled={!speechSynthesisSupport} color="is-danger" isOutlined icon={faStop} textI18n={ t('stop_button_text') } callback={() => handleAudioControl('stop', paused, textToSpeak, speechSynthesisConfig, selectedVoice, selectedLanguage.langCode)} />
              </div>
            </div>

          </div>
        </section>
      </div>
    </>
  );
};

export default function Demo() {
  return (<Container children={<Render />} />);
}