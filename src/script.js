var language = 'pt'; // Default language is Portuguese

function toggleLanguage() {
    if (language === 'pt') {
        // Change to English
        document.getElementById('name').innerHTML = 'My name is Paulo Mariano';
        document.getElementById('job').innerHTML = 'Web Developer';
        document.getElementById('work').innerHTML = 'Work experience';
        
        var experienceItems = document.querySelectorAll('#experience > div');
        experienceItems.forEach(item => {
            item.querySelector('h1').innerHTML = 'Web Developer';
            item.querySelector('h2').innerHTML = 'Company: 4Linux';
            item.querySelector('h3').innerHTML = 'Period: 2019 - 2020';
            item.querySelector('p').innerHTML = 'Development of web applications with PHP and Laravel';
        });

        language = 'en';
    } else {
        // Change to Portuguese
        document.getElementById('name').innerHTML = 'Meu nome é Paulo Mariano';
        document.getElementById('job').innerHTML = 'Desenvolvedor Web';
        document.getElementById('work').innerHTML = 'Experiência profissional';
        
        var experienceItems = document.querySelectorAll('#experience > div');
        experienceItems.forEach(item => {
            item.querySelector('h1').innerHTML = 'Desenvolvedor Web';
            item.querySelector('h2').innerHTML = 'Empresa: 4Linux';
            item.querySelector('h3').innerHTML = 'Período: 2019 - 2020';
            item.querySelector('p').innerHTML = 'Desenvolvimento de aplicações web com PHP e Laravel';
        });

        language = 'pt';
    }
}
