import { t } from "i18next";

export default function retrieveCommandsToTrigger() {

    const activate = t("activate");
    const deactivate = t("deactivate");
    const darkMode = t("darkMode");
    
    const darkModeCommand = new RegExp(`(${activate}|${deactivate})?\\s?${darkMode}`, "i");

    return [
        {
            name: t('voice_commands_command_1'),
            command: t('voice_commands_command_1'),
            callback: (site : string) => window.open(`https://www.${site}.com`, "_blank")
        },
        {
            name: t('voice_commands_command_2'),
            command: t('voice_commands_command_2'),
            callback: (query : string) => window.open(`https://www.google.com/search?q=${query}`, "_blank")
        },
        {
            name: `${activate} / ${deactivate} ${darkMode}.`,
            command: darkModeCommand,
            callback: (query : string) => {
                const themeToChange = query.toLowerCase() === activate.toLowerCase() ? "dark" : "light";
                const currentTheme = document.documentElement.getAttribute("data-theme");

                if (currentTheme === themeToChange) {
                    return;
                }

                localStorage.setItem("currentDataTheme", themeToChange);
                localStorage.setItem("checked", String(query.toLowerCase() !== "activar"));
                document.documentElement.setAttribute("data-theme", themeToChange)
                document.querySelector<HTMLInputElement>("#checkbox").click();
            }
        }
    ]
}