var agora = new Date()
var diasem= agora.getDay()
/* 
domingo-1
segunda-2
terça-3
quarta-4
quinta-5
sexta-6
sabado-7
*/
/*console.log(diasem)*/
diasem=4

switch(diasem) {
    case 1: 
        console.log('domingo')
        break
    case 2: 
        console.log('segunda')
        break
    case 3: 
        console.log('terça')
        break
    case 4: 
        console.log('quarta')
        break
    case 5: 
        console.log('quinta')
        break
    case 6: 
        console.log('sexta')
        break
    case 7: 
        console.log('sabado')
        break
    default:
        console.log('ERRO Dia Invalido')
}