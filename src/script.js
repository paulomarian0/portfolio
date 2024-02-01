let languageBtn = document.getElementById("languageBtn");
let language = "EN";

function toggleLanguage() {
    if (language === "EN") {
        language = "PT";
    } else {
        language = "EN";
    }
    languageBtn.textContent = language;
}

let modeBtn = document.getElementById("modeBtn");
let mode = "light";

function toggleMode() {
    const body = document.body;
    const modeBtn = document.getElementById("modeBtn");
    const isDark = body.classList.toggle("dark");
    modeBtn.innerHTML = isDark ? getMoonSVG() : getSunSVG();
}

function getMoonSVG() {
    return `<img src="icons/moon.svg" alt="moon" width="20px" />`;
}

function getSunSVG() {
    return `<img src="icons/sun.svg" alt="sun" width="20px" />`;
}
