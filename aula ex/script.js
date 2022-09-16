function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()

    msg.innerHTML = 'Agora são ' + hora + ':' + minuto
    if (hora >=0 && hora < 12) {
        //Bom dia
        img.src = 'manha.png'
        document.body.style.background = '#5e729e'
    } else if (hora >= 12 && hora <= 18) {
            //Boa Tarde
            img.src = 'tarde.png'
            document.body.style.background = '#be4002'
    } else {
            //Boa Noite
            img.src = 'noite.png'
            document.body.style.background = '#20171c'
    }
}
