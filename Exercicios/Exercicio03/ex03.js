function contar(){
    let inicio = document.getElementById("txti")
    let fim = document.getElementById("txtf")
    let passo = document.getElementById("txtp")
    let resultado = document.getElementById('res')
    if (inicio.value.length == 0) {
        window.alert('ERROR! Você esqueceu de digitar um valor em (Inicio!)')
    } else if(fim.value.length == 0) {
        window.alert('ERROR! Você esqueceu de digitar um valor em (Fim)!')
    } else if (passo.value.length == 0) {
        window.alert('ERROR! Você esqueceu de digitar um valor em (Passo)!')
    } else {
        resultado.innerHTML = 'Contando...'
        let i = Number(inicio.value)
        let p = Number(passo.value)
        let f = Number(fim.value)
        if (p <= 0) {
            alert('Passo inválido! Considerando passo 1...')
        }
        if (i < f){
            for (let c = i; c <= f; c += p){
   
                resultado.innerHTML += ` ${c}  👉`
            }       
        } else if (i > f) {
            for (let c = i; c >= f; c += p) {
                resultado.innerHTML += ` ${c} 👉`
            } 
        }
        resultado.innerHTML += '🚩'
    }   
}

