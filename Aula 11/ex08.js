function verificar(){
    var nasc = window.document.getElementById('nacionalidade')
    var nacionalidade = nasc.value
    var res = window.document.getElementById('res')
    res.innerHTML = `<p>Você nasceu no(a) <strong>${nacionalidade}!</strong></p>`
    if (nacionalidade == 'Brasil'){
        res.innerHTML += 'Você é brasileiro!'
    } else {
        res.innerHTML += 'Você é estrangeiro!' 
    }
    
}