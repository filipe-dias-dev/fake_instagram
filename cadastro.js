// Nome do usuario em negrito
let usuario = document.querySelector('.user');
usuario.innerHTML = '<strong> Nome Usuario </strong>';

// Alterando nomenclatura placeholder name
document.getElementsByName('name')[0].placeholder='Digite seu primeiro nome'

// Alterado background da page
let color = document.querySelector('body');
color.style.backgroundColor = '#fafafa';

// Modificando o texto da tag photos
document.querySelector('.photos').innerText = 'Cadastre-se para ver photos dos seus amigos'