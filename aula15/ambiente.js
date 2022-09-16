let num = [5,4,8,9,2]
console.log(num)

num.sort()
console.log(num)
console.log('o vetor tem '+num.length+' posiçoes')
console.log('o primeiro valor do vetor é '+num[0])
let pos = num.indexOf(8)
if(pos == -1){
    
console.log('O valor nao foi encontrado')
} else {
    console.log('O numero 8 esta na posição '+pos)
}