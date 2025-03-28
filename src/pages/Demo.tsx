import React, { useEffect, useState, useCallback } from "react";
import Container from "../components/container/Container";
import Flag from "react-flagkit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faStop, faPause, faEject, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import SpeechInput from "../components/input/SpeechInput";
import FuncButton from "../components/button/FuncButton";
import BlockInfo from "../components/block/BlockInfo";
import { Trans, useTranslation } from "react-i18next";
import { t } from "i18next";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const speechConfigDefaults = {
  name: "",
  flagCode: "",
  langCode: "",
  voice: null,
  pitch: 1,
  rate: 1,
  volume: 1
};

const useVoices = (langCode: string) => {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [languages, setLanguages] = useState<{ langCode: string; name: string }[]>([]);
  const { i18n: {changeLanguage, language} } = useTranslation();

  useEffect(() => {
    const filterLanguages = () => {
      const voices = speechSynthesis.getVoices();
      const uniqueLanguages = [...new Set(voices.map(voice => voice.lang))];
      const intlDisplay = new Intl.DisplayNames([language], { type: "language" });
      const languageList = uniqueLanguages.map(langCode => ({
        langCode,
        name: intlDisplay.of(langCode) || langCode,
      }));
      setLanguages(languageList);
    };
    
    filterLanguages();
    speechSynthesis.addEventListener("voiceschanged", filterLanguages);

    return () => {
      speechSynthesis.removeEventListener("voiceschanged", filterLanguages);
    };
  }, []);

  useEffect(() => {
    const filteredVoices = langCode ? 
      speechSynthesis.getVoices().filter(voice => voice.lang.startsWith(langCode)) : 
      speechSynthesis.getVoices().filter(voice => voice.lang.startsWith("es"));
    setVoices(filteredVoices);
  }, [langCode]);

  useEffect(() => {
    const updateListName = () => {
      const translatedLangs = new Intl.DisplayNames([language], { type: "language" });

      languages.map((lang) => {
        lang.name = translatedLangs.of(lang.langCode);
      })
    };

    updateListName();
  })

  return { voices, languages };
};

const handleAudioControl = (action: 'play' | 'stop' | 'pause' | 'resume', paused: boolean, text: string, speechConfig: any) => {
  const s = new SpeechSynthesisUtterance(text);
  s.lang = speechConfig?.langCode;
  s.voice = speechConfig?.voice;
  s.pitch = speechConfig?.pitch;
  s.rate = speechConfig?.rate;
  s.volume = speechConfig?.volume;

  switch (action) {
    case 'play':
      speechSynthesis.speak(s);
      break;
    case 'stop':
      if (speechSynthesis.speaking) {
        speechSynthesis.cancel();
      }
      break;
    case 'pause':
      if (speechSynthesis.speaking && !paused) {
        speechSynthesis.pause();
      }
      break;
    case 'resume':
      if (paused) {
        speechSynthesis.resume();
      }
      break;
  }
};

const Render = () => {
  const [dropdown, setDropdown] = useState(false);
  const [dropdownVoices, setDropdownVoices] = useState(false);
  const [paused, setIsPaused] = useState(false);
  const [textToSpeak, setTextToSpeak] = useState("");
  const [speechSynthesisConfig, setSpeechSynthesisConfig] = useState(speechConfigDefaults);
  const { voices, languages } = useVoices(speechSynthesisConfig.langCode);

  const handleConfiguration = useCallback((nameVal: string, flagCodeVal: string, langCodeVal: string) => {
    setSpeechSynthesisConfig(prevState => ({
      ...prevState,
      name: nameVal,
      flagCode: flagCodeVal,
      langCode: langCodeVal
    }));
  }, []);

  const handleChange = useCallback((key: string, val: any, isNumber: boolean) => {
    setSpeechSynthesisConfig(prevState => ({
      ...prevState,
      [key]: isNumber ? Number(val) : val
    }));
  }, []);


  useGSAP(() => {
    const sections = [".section-1", ".section-2", ".section-3", ".section-4"];
    const button = ".action-button";
    const scrollTriggerConfig = {
      trigger: ".section-4",
      start: "top 100%",
    };
  
    gsap.set([...sections, button], { y: 20, alpha: 0 });
  
    gsap.to(sections.slice(0, 3), {
      alpha: 1,
      stagger: 0.25,
      duration: 1,
      y: 0,
    });
  
    [".section-4", button].forEach(selector => {
      gsap.to(selector, {
        alpha: 1,
        duration: 1,
        y: 0,
        stagger: 0.25,
        scrollTrigger: scrollTriggerConfig,
      });
    });
  }, []);

  document.querySelectorAll(".action-button").forEach((iconButton) => {
  
    iconButton.addEventListener("mouseover", (e) => {
      const iconInButton = e.currentTarget.querySelector(".iconInButton");
  
      if (iconInButton) {
        gsap.to(iconInButton, {
          rotationZ: 360,
          ease: "linear",
        });
      }
    });
  
    iconButton.addEventListener("mouseout", (e) => {
      const iconInButton = e.currentTarget.querySelector(".iconInButton");
  
      if (iconInButton) {
        gsap.to(iconInButton, {
          rotationZ: 0,
        });
      }
    });
  
  });
  


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
                  <div key={i} className="dropdown-country-item icon-text-gap p-3 is-flex is-justify-content-start" onClick={() => handleConfiguration(voice.name, voice.langCode.split("-")[1], voice.langCode)}>
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
              <SpeechInput showCurrentValue fieldKey="rate" type="range" minValue={0.1} maxValue={1} value={speechSynthesisConfig.rate} speechConfigKeyCallback={handleChange} isNumericValue />
            </div>
            <div className="column">
              <BlockInfo title={t('pitch')} voiceProp={t('pitch').toLowerCase()} determinant={t("m_determinant")} />
              <SpeechInput showCurrentValue fieldKey="pitch" type="range" minValue={0} maxValue={2} value={speechSynthesisConfig.pitch} speechConfigKeyCallback={handleChange} isNumericValue />
            </div>
          </div>
          <BlockInfo title={t('volume')} voiceProp={t('volume').toLowerCase()} determinant={t("m_determinant")} />
          <SpeechInput showCurrentValue fieldKey="volume" type="range" minValue={0} maxValue={1} value={speechSynthesisConfig.volume} speechConfigKeyCallback={handleChange} isNumericValue />
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