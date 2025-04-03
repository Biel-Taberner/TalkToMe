export function setVoiceToUse(voiceToUse : {} , setterCallback: (value: React.SetStateAction<{
    name: string;
    flagCode: string;
    langCode: string;
  }>) => void) {
    
    setterCallback(prevState => ({ ...prevState, name: voiceToUse?.name, flagCode: voiceToUse?.langCode.split("-")[1], langCode: voiceToUse?.langCode }))
}

export function setDeviceToUse(deviceToUse : {} , setterCallback: (value: React.SetStateAction<{
  deviceId: string;
  groupId: string;
  kind: string;
  label: string;
}>) => void) {
  
  setterCallback(prevState => ({ ...prevState, deviceId: deviceToUse?.deviceId, groupId: deviceToUse?.groupId, kind: deviceToUse?.kind, label: deviceToUse?.label }))
}