function somar() {
    var t1 = window.document.getElementById('txtn1')
    var t2 = window.document.getElementById('txtn2')
    var n1 = Number(t1.value)
    var n2 = Number(t2.value)
    var res = window.document.getElementById('res')
    var s = n1 + n2
    res.innerHTML = `A soma entre ${n1} e ${n2} é igual <strong>${s}</strong>.`
}
