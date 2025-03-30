export function formatLetterizedText(element : HTMLElement) {
    
    const text = element.textContent || "";

    return element.innerHTML = text.split("")
        .map(char => (char === " " ? "\u00A0" : char))
        .join("");
}
