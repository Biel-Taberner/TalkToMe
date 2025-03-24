import React, { useEffect, useState, useCallback } from "react";
import Container from "../components/container/Container";
import Flag from "react-flagkit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faStop, faPause, faEject, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import SpeechInput from "../components/input/SpeechInput";
import FuncButton from "../components/button/FuncButton";
import BlockInfo from "../components/block/BlockInfo";

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

  useEffect(() => {
    const filterLanguages = () => {
      const voices = speechSynthesis.getVoices();
      const uniqueLanguages = [...new Set(voices.map(voice => voice.lang))];
      const intlDisplay = new Intl.DisplayNames(["es"], { type: "language" });
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

  return (
    <div className="content mt-6">
      <section className="section">
        <h1 className="title is-1 mt-6">Demo</h1>
        <p className="subtitle mt-3">
          Customize the following properties to create custom audios with different effects!
        </p>

        <div className="is-widescreen">
          <div className={`dropdown maxWidth ${dropdown ? 'is-active' : ''}`} onClick={() => setDropdown(!dropdown)}>
            <div className="dropdown-trigger maxWidth">
              <button className="button maxWidth is-justify-content-space-between" aria-haspopup="true" aria-controls="dropdown-menu">
                <div className="is-flex icon-text-gap">
                  {speechSynthesisConfig.flagCode && 
                    <span className="icon is-small">
                      <Flag country={speechSynthesisConfig.flagCode} />
                    </span>
                  }
                  <span>{speechSynthesisConfig.name || 'Select language'}</span>
                </div>
                <span className="icon is-small">
                  <FontAwesomeIcon icon={faCaretDown} />
                </span>
              </button>
              <p className="help">If not selected, the browser's current language will be used.</p>
            </div>
            <div className="dropdown-menu maxWidth" id="dropdown-menu" role="menu">
              <div className="dropdown-content p-3 dropdown-content-height">
                {languages.map((voice, i) => (
                  <div key={i} className="dropdown-country-item icon-text-gap p-3 is-flex is-justify-content-start" onClick={() => handleConfiguration(voice.name, voice.langCode.split("-")[1], voice.langCode)}>
                    <Flag country={voice.langCode.split("-")[1]} />
                    <div className="has-text-black">{voice.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <div className="columns">
            <div className="column">
              <BlockInfo title="Rate" voiceProp="speed" />
              <SpeechInput showCurrentValue fieldKey="rate" type="range" minValue={0.1} maxValue={1} value={speechSynthesisConfig.rate} speechConfigKeyCallback={handleChange} isNumericValue />
            </div>
            <div className="column">
              <BlockInfo title="Pitch" voiceProp="pitch" />
              <SpeechInput showCurrentValue fieldKey="pitch" type="range" minValue={0} maxValue={2} value={speechSynthesisConfig.pitch} speechConfigKeyCallback={handleChange} isNumericValue />
            </div>
          </div>
          <BlockInfo title="Volume" voiceProp="volume" />
          <SpeechInput showCurrentValue fieldKey="volume" type="range" minValue={0} maxValue={1} value={speechSynthesisConfig.volume} speechConfigKeyCallback={handleChange} isNumericValue />
        </div>

        <div className="mt-6">
          <BlockInfo title="Voice" voiceProp="voice" />
          <div className="is-widescreen">
            <div className={`dropdown maxWidth ${dropdownVoices ? 'is-active' : ''}`} onClick={() => setDropdownVoices(!dropdownVoices)}>
              <div className="dropdown-trigger maxWidth">
                <button className="button maxWidth is-justify-content-space-between" aria-haspopup="true" aria-controls="dropdown-menu">
                  <div className="is-flex icon-text-gap">
                    <span>{speechSynthesisConfig.voice?.voiceURI || 'Select voice'}</span>
                  </div>
                </button>
                <p className="help">The voice used will be the default available for the utterance's language if not set.</p>
              </div>
              <div className="dropdown-menu maxWidth" id="dropdown-menu" role="menu">
                <div className="dropdown-content p-3 dropdown-content-height">
                  {voices.length > 0 ? voices.map((voice, i) => (
                    <div key={i} className="dropdown-country-item icon-text-gap p-2 is-flex is-justify-content-start" onClick={() => setSpeechSynthesisConfig(prevState => ({ ...prevState, voice }))}>
                      <div className="has-text-black">{voice.name}</div>
                    </div>
                  )) : 
                    <div className="p-2 is-flex is-justify-content-start">
                      <p className="has-text-black is-italic has-text-grey">No voices available for the selected language.</p>
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <div className="title">Content</div>
          <textarea className="textarea" placeholder="e.g. Hello world" value={textToSpeak} onChange={(e) => setTextToSpeak(e.target.value)} />
        </div>

        <div className="buttons mt-5">
          <FuncButton color="is-success" isOutlined icon={faPlay} text="Play" callback={() => handleAudioControl('play', paused, textToSpeak, speechSynthesisConfig)} />
          <FuncButton color="is-warning" isOutlined icon={faPause} text="Pause" isPaused={{ pauseRef: paused, textForResuming: "Resume", iconForResuming: faEject }} callback={() => { setIsPaused(!paused); handleAudioControl(paused ? 'resume' : 'pause', paused, textToSpeak, speechSynthesisConfig); }} />
          <FuncButton color="is-danger" isOutlined icon={faStop} text="Stop" callback={() => handleAudioControl('stop', paused, textToSpeak, speechSynthesisConfig)} />
        </div>
      </section>
    </div>
  );
};

export default function Demo() {
  return <Container children={<Render />} />;
}