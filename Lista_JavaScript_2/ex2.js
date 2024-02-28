function numeroFormatado(numero) {
    return numero.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
}

let numero = 0.30000000000000004
console.log(numeroFormatado(numero))