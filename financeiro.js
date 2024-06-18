import prompt from 'prompt-sync'
let ler = prompt()

//Funções
export function depositar(saldo) {
    console.log('Qual valor você deseja depositar?')
    let num = Number(ler())

    let conta = saldo + num

    return conta
} 

export function sacar(saldo) {
    console.log('Qual valor você deseja sacar?')
    let num = Number(ler())

    let conta = saldo - num

    return conta
} 

export  function exibir(saldo) {
    console.log('Infrome o seu saldo:')
    let sald = Number(ler())

    console.log(`Seu saldo é de: ${sald}`)
    
}

export function menu(mensagem, numer) {
    console.log(mensagem)
    let numer = Number(ler())

    return numer
}