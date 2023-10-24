function calcular() {
    let numero = document.getElementById("txtn")
    let tab = document.getElementById("seltab")
    if (numero.value.length == 0) {
        window.alert("ERRO! Digite algum valor!")
    } else {
        let n = Number(numero.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}.`
            tab.appendChild(item) 
            c++
        }    
    } 
}
    