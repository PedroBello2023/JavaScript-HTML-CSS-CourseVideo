let num = [5, 8, 2, 9, 3]
num[3] = 6 // coloca o valor 6 na posição 3
num.push(7) // coloca o valor 7 na ultima posição
num.length //fornece o numero de elementos de um array
num.sort()// ordena os elementos de um array
console.log(`Nosso vetor tem os valores ${num}.`)
console.log(`O vetor ${num} tem ${num.length} posições e estão ordenadas por conta do sort()`)
console.log(`O primeiro valor do array é ${num[0]}`)
console.log(`Aqui meus valores estão ordenados: ${num}`)
num.push(1)
console.log(`Agora perceba que o elemento ${num[6]} não esta na ordem ${num}.. isso ocorre por que adicionei ele após a ordenação.`)
//para mostrar os elementos de um array:
for(let pos = 0; pos < num.length; pos ++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
} 
//usando uma estrutura mais simplificada
for (let pos in num){
    console.log(num[pos])
}