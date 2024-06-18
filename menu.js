import prompt from "prompt-sync"
let ler = prompt()

import { depositar, sacar, exibir, menu } from "./financeiro.js"

let V = true

while (V) {
    console.log(`Escolha essas opções: 
    1- Depositar o seu dinheiro.
    2- Sacar o seu dinheiro.
    3- Exibir o seu saldo. 
    4- Sair do programa. `) 
}

let numer = Number(ler())

console.clear()

if (numer == 1) {
    let j = depositar(saldo)
    console.log('A quantia que você depositou é R$' + j)
}

else if (numer == 2 ) {
    let k = sacar(saldo)
    console.log(k)
}

else if (numer == 3 ) {
    let n = exibir(saldo)
    console.log(n)
}
