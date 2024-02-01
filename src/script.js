let languageBtn = document.getElementById("languageBtn");
let language = "EN";

function toggleLanguage() {
    if (language === "EN") {
        language = "PT";
        hiText.textContent = "Olá! 👋,";
        myNameIs.textContent = "Meu nome é Paulo";
        imASoftwareDeveloper.textContent = "Sou desenvolvedor de software";
        techStacks.textContent = "Minhas Tecnologias:"
        technologies.textContent = "Tecnologias que tenho usado ultimamente:"
    } else {
        language = "EN";
        hiText.textContent = "Hi! 👋,";
        myNameIs.textContent = "My name is Paulo";
        imASoftwareDeveloper.textContent = "I'm a Software Developer";
        techStacks.textContent = "My Tech Stack:"
        technologies.textContent = "Technologies I've been working with:"
    }
    languageBtn.textContent = language;
}


let modeBtn = document.getElementById("modeBtn");
let mode = "light";

function toggleMode() {
    const body = document.body;
    const modeBtn = document.getElementById("modeBtn");
    const isDark = body.classList.toggle("dark");
    modeBtn.innerHTML = isDark ? getSunSVG():  getMoonSVG()
}

function getMoonSVG() {
    return `<img src="icons/moon.svg" alt="moon" width="20px" />`;
}

function getSunSVG() {
    return `<img src="icons/sun.svg" alt="sun" width="20px" />`;
}
