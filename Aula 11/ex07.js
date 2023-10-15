

function calcular(){
    var txtv = window.document.getElementById('txtvel')
    var vel = Number(txtv.value)
    var res = window.document.getElementById('res')
    res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel} km/h</strong></p>`
    if (vel > 60){
        res.innerHTML += 'Você ultrapassou o limite de velocidade. <strong>MULTADO</strong>!'
    } else {
        res.innerHTML += `<p>Dirija sempre com sinto de segurança!</p>`
    }

}