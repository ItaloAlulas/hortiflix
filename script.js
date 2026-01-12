const botaoMenu = document.querySelector('.menu')
const navegacao = document.querySelector('.navegacao')
const textoDoHero = document.querySelector('.texto-do-hero')
const ctaDentroDoHeader = document.querySelector('.cta-dentro-do-header')
const hero = document.querySelector('.hero')

botaoMenu.addEventListener('click', () => {
    botaoMenu.classList.toggle('aberto')
    navegacao.classList.toggle('active');
    textoDoHero.classList.toggle('active')
    hero.classList.toggle('active');
    ctaDentroDoHeader.classList.toggle('hidden')

    if (botaoMenu.classList.contains('aberto')) {
        botaoMenu.textContent = '✖';
    } else {
        botaoMenu.textContent = '☰';
    }
})