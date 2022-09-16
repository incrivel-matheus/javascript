function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('textoano')
    var res = document.getElementById('res')
    if (fano.value.lenght == 0 || fano.value > ano) {
        window.alert('verifique os dados e tente novamente')    
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            genero = 'Masculino'
        } else if(fsex[1].checked) { 
            genero = 'Feminino'
        } else (fsex[2].checked) 
            genero = 'Neutro'
        
        res.innerHTML = 'detectamos pessoa do genero ' + genero + ' com ' + idade + ' anos'
    }
}