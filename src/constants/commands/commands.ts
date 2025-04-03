import { t } from "i18next";

export default function retrieveCommandsToTrigger() {
    return [
        {
            command: t('voice_commands_command_1'),
            callback: (site : string) => window.open(`https://www.${site}.com`, "_blank")
        },
        {
            command: t('voice_commands_command_2'),
            callback: (query : string) => window.open(`https://www.google.com/search?q=${query}`, "_blank")
        },
    ]
}