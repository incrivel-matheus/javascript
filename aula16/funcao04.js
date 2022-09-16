/*let v = function(n){
    return n * 2
}
console.log(v(5))*/

let valor = function(n=0){
    if (n%2==0) {
        console.log('O numero é par')
    } else {
        console.log('O numero é impar')
    }
    return n/2
}
console.log('O resultado é ' + valor(94))


