import React, { useState } from "react";
import Container from "../components/container/Container";
import Flag from "react-flagkit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faStop, faPause, faEject, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import SpeechInput from "../components/input/SpeechInput";
import FuncButton from "../components/button/FuncButton.tsx";
import BlockInfo from "../components/block/BlockInfo";
import { t } from "i18next";
import { useGSAPDemoPageAnimations } from "../hooks/gsap-animations/useGSAPAnimations";
import { handleAudioControl, handleChange, handleConfiguration } from "../components/button/FuncButton.ts";
import { useVoices } from "../hooks/voice/useVoice.ts";
import { SPEECH_CONFIG_DEFAULT } from "../constants/speech_synthesis/speech_synthesis.ts";

const Render = () => {
  const [dropdown, setDropdown] = useState(false);
  const [dropdownVoices, setDropdownVoices] = useState(false);
  const [paused, setIsPaused] = useState(false);
  const [textToSpeak, setTextToSpeak] = useState("");
  const [speechSynthesisConfig, setSpeechSynthesisConfig] = useState(SPEECH_CONFIG_DEFAULT);
  const { voices, languages } = useVoices(speechSynthesisConfig.langCode);

  useGSAPDemoPageAnimations();

  return (
    <div className="content mt-6">
      <section className="section">
        <h1 className="section-1 title is-1 mt-6">{ t('demo_section_1_title') }</h1>
        <p className="section-1 subtitle mt-3">
          { t('demo_section_1_subtitle') }
        </p>

        <div className="is-widescreen">
          <div className={`dropdown maxWidth ${dropdown ? 'is-active' : ''}`} onClick={() => setDropdown(!dropdown)}>
            <div className="dropdown-trigger maxWidth">
              <button className="section-1 button maxWidth is-justify-content-space-between" aria-haspopup="true" aria-controls="dropdown-menu">
                <div className="is-flex icon-text-gap">
                  {speechSynthesisConfig.flagCode && 
                    <span className="icon is-small">
                      <Flag country={speechSynthesisConfig.flagCode} />
                    </span>
                  }
                  <span className="is-capitalized">{speechSynthesisConfig.name || t('demo_section_1_dropdown_opt') }</span>
                </div>
                <span className="icon is-small">
                  <FontAwesomeIcon icon={faCaretDown} />
                </span>
              </button>
              <p className="help section-1">{ t('demo_section_1_dropdown_helper') }</p>
            </div>
            <div className="dropdown-menu maxWidth" id="dropdown-menu" role="menu">
              <div className="dropdown-content p-3 dropdown-content-height">
                {languages.map((voice, i) => (
                  <div key={i} className="dropdown-country-item icon-text-gap p-3 is-flex is-justify-content-start" onClick={() => handleConfiguration(voice.name, voice.langCode.split("-")[1], voice.langCode, setSpeechSynthesisConfig)}>
                    <Flag country={voice.langCode.split("-")[1]} />
                    <div className="has-text-black is-capitalized">{voice.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 section-2">
          <div className="columns">
            <div className="column">
              <BlockInfo title={t('rate')} voiceProp={t('rate').toLowerCase()} determinant={t("f_determinant")} />
              <SpeechInput showCurrentValue fieldKey="rate" type="range" minValue={0.1} maxValue={1} value={speechSynthesisConfig.rate} speechConfigKeyCallback={() => handleChange} isNumericValue />
            </div>
            <div className="column">
              <BlockInfo title={t('pitch')} voiceProp={t('pitch').toLowerCase()} determinant={t("m_determinant")} />
              <SpeechInput showCurrentValue fieldKey="pitch" type="range" minValue={0} maxValue={2} value={speechSynthesisConfig.pitch} speechConfigKeyCallback={() => handleChange} isNumericValue />
            </div>
          </div>
          <BlockInfo title={t('volume')} voiceProp={t('volume').toLowerCase()} determinant={t("m_determinant")} />
          <SpeechInput showCurrentValue fieldKey="volume" type="range" minValue={0} maxValue={1} value={speechSynthesisConfig.volume} speechConfigKeyCallback={() => handleChange} isNumericValue />
        </div>

        <div className="mt-6">
          <div className="section-3">
            <BlockInfo title={t('voice')} voiceProp={t('voice').toLowerCase()} determinant={t("f_determinant")} />  
          </div>
          <div className="is-widescreen mt-3">
            <div className={`dropdown maxWidth ${dropdownVoices ? 'is-active' : ''}`} onClick={() => setDropdownVoices(!dropdownVoices)}>
              <div className="dropdown-trigger maxWidth">
                <button className="section-3 button maxWidth is-justify-content-space-between" aria-haspopup="true" aria-controls="dropdown-menu">
                  <div className="is-flex icon-text-gap">
                    <span>{speechSynthesisConfig.voice?.voiceURI || t('demo_section_2_voice_dropdown_text')}</span>
                  </div>
                </button>
                <p className="help section-3">{ t('demo_section_2_voice_dropdown_helper') }</p>
              </div>
              <div className="dropdown-menu maxWidth" id="dropdown-menu" role="menu">
                <div className="dropdown-content p-3 dropdown-content-height">
                  {voices.length > 0 ? voices.map((voice, i) => (
                    <div key={i} className="dropdown-country-item icon-text-gap p-2 is-flex is-justify-content-start" onClick={() => setSpeechSynthesisConfig(prevState => ({ ...prevState, voice }))}>
                      <div className="has-text-black">{voice.name}</div>
                    </div>
                  )) : 
                    <div className="p-2 is-flex is-justify-content-start">
                      <p className="has-text-black is-italic has-text-grey">{ t('demo_section_2_voice_dropdown_no_opts') }</p>
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 section-4">
          <div className="title">
            { t('content') }
          </div>
          <textarea className="textarea" placeholder={ t('demo_section_3_textarea_placeholder') } value={textToSpeak} onChange={(e) => setTextToSpeak(e.target.value)} />
        </div>

        <div className="buttons mt-5">
          <FuncButton color="is-success" isOutlined icon={faPlay} text={ t('play_button_text') } callback={() => handleAudioControl('play', paused, textToSpeak, speechSynthesisConfig)} />
          <FuncButton color="is-warning" isOutlined icon={faPause} text={t('pause_button_text')} isPaused={{ pauseRef: paused, textForResuming: t('resume_button_text'), iconForResuming: faEject }} callback={() => { setIsPaused(!paused); handleAudioControl(paused ? 'resume' : 'pause', paused, textToSpeak, speechSynthesisConfig); }} />
          <FuncButton color="is-danger" isOutlined icon={faStop} text={ t('stop_button_text') } callback={() => handleAudioControl('stop', paused, textToSpeak, speechSynthesisConfig)} />
        </div>
      </section>
    </div>
  );
};

export default function Demo() {
  return <Container children={<Render />} />;
}