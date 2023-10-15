var a = window.document.getElementById('area')
a.addEventListener('click', clicar)
a.addEventListener('mouseout', sair)
a.addEventListener('mousemove', entrar)

function clicar(){
    a.innerText = 'Clicou!'
    a.style.background = 'red'
}
function entrar(){
    a.innerText = 'Entrou!'
    a.style.background = 'green'
}
function sair(){
    a.innerText = 'Saiu!'
    a.style.background = 'blue'
}