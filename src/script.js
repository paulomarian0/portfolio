let languageBtn = document.getElementById("languageBtn");
let language = "EN";

function toggleLanguage() {
    if (language === "EN") {
        language = "PT";
        hiText.textContent = "Olá! 👋,";
        myNameIs.textContent = "Meu nome é Paulo";
        imASoftwareDeveloper.textContent = "Sou desenvolvedor de software";
        techStacks.textContent = "Minhas Tecnologias:";
        technologies.textContent = "Tecnologias que tenho usado ultimamente:";
        aboutTitle.textContent = "Sobre mim:";
        aboutMeText.textContent = "Sou um desenvolvedor de software com experiência em desenvolvimento web e mobile. Atualmente, estou trabalhando com tecnologias como React, React Native, Node.js, TypeScript, entre outras. Estou sempre em busca de novos desafios e oportunidades para aprender e crescer.";
        workExperienceTitle.textContent = "Experiência Profissional:";
        developerIntern.textContent = "Full Stack Developer - Estágio";
        intern.textContent = "Estagiário";
        ilumeoDescription.textContent = "Desenvolvimento de aplicações web e mobile, utilizando tecnologias como React, React Native, Node.js, TypeScript, entre outras.";
        ketraDescription.textContent = "Desenvolvimento de aplicações web e mobile, utilizando tecnologias como React, React Native, Node.js, TypeScript, entre outras.";
        infosisDescription.textContent = "Desenvolvimento de aplicações web e mobile, utilizando tecnologias como React, React Native, Node.js, TypeScript, entre outras.";
        internDescription.textContent = "Desenvolvimento de aplicações web e mobile, utilizando tecnologias como React, React Native, Node.js, TypeScript, entre outras.";
        ilumeoTime.textContent = "Mar 2023 - Atualmente";
        educationTitle.textContent = "Escolaridade:";
        bachelorTitle.textContent = "Bacharelado em Ciência da Computação";
        postgraduateTitle.textContent = "Pós-Graduação em Engenharia de Software";
        findMe.textContent = "Entre em contato:";
        anyQuestions.textContent = "Para qualquer dúvida, mande um e-mail:";
        findMeOn.textContent = "me encontre em:";
        or.textContent = "ou";
    } else {
        language = "EN";
        hiText.textContent = "Hi! 👋,";
        myNameIs.textContent = "My name is Paulo";
        imASoftwareDeveloper.textContent = "I'm a Software Developer";
        techStacks.textContent = "My Tech Stack:";
        technologies.textContent = "Technologies I've been working with:";
        aboutTitle.textContent = "About me:";
        aboutMeText.textContent = "I'm a software developer with experience in web and mobile development. Currently, I'm working with technologies like React, React Native, Node.js, TypeScript, among others. I'm always looking for new challenges and opportunities to learn and grow.";
        workExperienceTitle.textContent = "Work Experience:";
        developerIntern.textContent = "Full Stack Developer - Intern";
        intern.textContent = "Intern";
        ilumeoDescription.textContent = "Development of web and mobile applications, using technologies like React, React Native, Node.js, TypeScript, among others.";
        ketraDescription.textContent = "Development of web and mobile applications, using technologies like React, React Native, Node.js, TypeScript, among others.";
        infosisDescription.textContent = "Development of web and mobile applications, using technologies like React, React Native, Node.js, TypeScript, among others.";
        internDescription.textContent = "Development of web and mobile applications, using technologies like React, React Native, Node.js, TypeScript, among others.";
        ilumeoTime.textContent = "Mar 2023 - Currently";
        educationTitle.textContent = "Education:";
        bachelorTitle.textContent = "Bachelor's Degree in Computer Science";
        postgraduateTitle.textContent = "Postgraduate in Software Engineering";
        findMe.textContent = "Contact me:";
        anyQuestions.textContent = "For any questions please mail me:";
        or.textContent = "or";
        findMeOn.textContent = "find me on:";
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
