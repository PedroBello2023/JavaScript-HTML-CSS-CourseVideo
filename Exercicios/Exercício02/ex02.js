function verificar() {
    var data = new Date()
    var ano = Number(data.getFullYear())
    var fano = document.getElementById("textano")
    var resultado = document.getElementById("res")
    if (fano.value.length == 0 || fano.value > ano){
        window.alert("[ERROR!] Verifique os dados e tente novamente!")
    }else {
        var sexo = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ''
        var resultado = document.getElementById("res")
        var img = document.createElement("img")
        if (sexo[0].checked) {
            genero = 'Homem'
            if (idade <= 10){
                //criança
                img.setAttribute('src', 'homem-crianca.png')
            } else if (idade <= 20) {
                //jovem
                img.setAttribute('src', 'homem-jovem.png')
            } else if (idade <= 50){
                //adulto
                img.setAttribute('src', 'homem-adulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'cemigsaude_cemigsaude_image_996-780x450.png')
            }
        } else if (sexo[1].checked) {
            genero = 'Mulher'
            if (idade <= 10){
                //criança
                img.setAttribute('src', 'mulher-crianca.png')
            } else if (idade <= 20) {
                //jovem
                img.setAttribute('src', '5628-PS23RQIPKCDbpdPs-s-.png')
            } else if (idade <= 50){
                //adulto
                img.setAttribute('src', 'mulher_adulta.png')
            } else{
                //idoso
                img.setAttribute('src', 'mulher_idosa.png')
            }
        }
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos de idade.`
        resultado.appendChild(img)
    }
}

