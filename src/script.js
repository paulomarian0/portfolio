let languageBtn = document.getElementById("languageBtn");
let language = "EN";



function toggleLanguage() {
    languageBtn.textContent = language;
    if (language === "EN") {
        language = "PT";
        About.textContent = "Sobre";
        Contact.textContent = "Contato";
        hiText.textContent = "Olá! 👋,";
        myNameIs.textContent = "Meu nome é Paulo";
        imASoftwareDeveloper.textContent = "Sou desenvolvedor de software";
        techStacks.textContent = "Minhas Tecnologias:";
        technologies.textContent = "Tecnologias que tenho usado ultimamente:";
        aboutTitle.textContent = "Sobre mim:";
        aboutMeText.textContent = "Bacharel em Ciência da Computação e desenvolvedor de software apaixonado por resolver problemas complexos e criar soluções inovadoras. Com uma ampla experiência em diversos projetos, estou sempre ansioso para aprender e aprimorar minhas habilidades. Proficiente em desenvolvimento frontend utilizando React e Next.js, assim como em desenvolvimento backend com .NET e Node.js. Além disso, possuo conhecimento avançado em TypeScript, contribuindo para a criação de aplicativos robustos e eficientes.";
        workExperienceTitle.textContent = "Experiência Profissional:";
        developerIntern.textContent = "Estágiário Desenvolvedor";
        intern.textContent = "Estagiário";
        ilumeoDescription.textContent = "Desenvolvimento FrontEnd com ReactJS, Desenvolvimento Backend com NodeJS.";
        ketraDescription.textContent = "Desenvolvimento FrontEnd com ReactJS, ocasionalmente Desenvolvimento Backend com .NET.";
        infosisDescription.textContent = "Desenvolvimento FrontEnd com ExtJS, Desenvolvimento Backend com .NET.";
        internDescription.textContent = "Primeira experiência profissional, desenvolvimento FrontEnd com ExtJS, Desenvolvimento Backend com .NET, trabalhando em um sistema legado.";
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
        About.textContent = "About";
        Contact.textContent = "Contacts";
        hiText.textContent = "Hi! 👋,";
        myNameIs.textContent = "My name is Paulo";
        imASoftwareDeveloper.textContent = "I'm a Software Developer";
        techStacks.textContent = "My Tech Stack:";
        technologies.textContent = "Technologies I've been working with:";
        aboutTitle.textContent = "About me:";
        aboutMeText.textContent = "Bachelor's degree holder in Computer Science and software developer passionate about solving complex problems and crafting innovative solutions. With extensive experience across various projects, I'm always eager to learn and enhance my skills. Proficient in frontend development using React and Next.js, as well as backend development with .NET and Node.js. Additionally, I have advanced knowledge of TypeScript, contributing to the creation of robust and efficient applications.";
        workExperienceTitle.textContent = "Work Experience:";
        developerIntern.textContent = "Intern Developer";
        intern.textContent = "Intern";
        ilumeoDescription.textContent = "FrontEnd Development with ReactJS, Backend Development with NodeJS.";
        ketraDescription.textContent = "FrontEnd Development with ReactJS, occasionally Backend Development with .NET.";
        infosisDescription.textContent = "FrontEnd development with ExtJS, Backend Development with .NET.";
        internDescription.textContent = "First professional experience, FrontEnd development with ExtJS, Backend Development with .NET, working on a legacy system.";
        ilumeoTime.textContent = "Mar 2023 - Currently";
        educationTitle.textContent = "Education:";
        bachelorTitle.textContent = "Bachelor's Degree in Computer Science";
        postgraduateTitle.textContent = "Postgraduate in Software Engineering";
        findMe.textContent = "Contact me:";
        anyQuestions.textContent = "For any questions please mail me:";
        or.textContent = "or";
        findMeOn.textContent = "find me on:";
    }

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
