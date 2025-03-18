const aumentarFonte = document.getElementById('aumentar-fonte');
const diminuirFonte = document.getElementById('diminuir-fonte');
const altoContraste = document.getElementById('alto-contraste');
const sections = document.querySelectorAll('main section');

aumentarFonte.addEventListener('click', () => {
    document.body.style.fontSize = parseInt(window.getComputedStyle(document.body).fontSize) + 2 + 'px';
});

diminuirFonte.addEventListener('click', () => {
    document.body.style.fontSize = parseInt(window.getComputedStyle(document.body).fontSize) - 2 + 'px';
});

altoContraste.addEventListener('click', () => {
    document.body.classList.toggle('alto-contraste');
});

function verificarVisibilidade() {
    sections.forEach(section => {
        const posicaoTopo = section.getBoundingClientRect().top;
        if (posicaoTopo < window.innerHeight * 0.75) {
            section.classList.add('aparecer');
        }
    });
}

window.addEventListener('scroll', verificarVisibilidade);
verificarVisibilidade(); // Verifica a visibilidade inicial

// Navegação por teclado: permitir navegação com a tecla Tab
document.addEventListener('keydown', function(event) {
    if (event.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-navigation');
});

// Menu de acessibilidade (exemplo básico)
const accessibilityMenu = document.createElement('div');
accessibilityMenu.innerHTML = `
    <button id="increase-font">A+</button>
    <button id="decrease-font">A-</button>
`;
document.body.appendChild(accessibilityMenu);

document.getElementById('increase-font').addEventListener('click', function() {
    document.body.style.fontSize = parseInt(window.getComputedStyle(document.body).fontSize) + 2 + 'px';
});

document.getElementById('decrease-font').addEventListener('click', function() {
    document.body.style.fontSize = parseInt(window.getComputedStyle(document.body).fontSize) - 2 + 'px';
});