
function carregar()  { 
    var img = window.document.getElementById('imagem')
    var msg = window.document.getElementById('msg')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        //BOM DIA
        img.src = 'manha.jpg'
        document.body.style.background = 'yellow'
    }
    else if (hora >= 12 && hora < 18) {
        //BOA TARDE
        img.src = 'tarde.jpg'
        document.body.style.background = 'orange'
    }
    else {
        //BOA NOIE
        img.src = 'noite.jpg'
        document.body.style.background = 'black'
    }

}