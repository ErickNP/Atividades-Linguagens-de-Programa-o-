function dobro(x) {
    if (x > 0) {
        let resultado = 2 * x;
        return resultado;
    }
    else {
        return '(ERRO: Só é aceito números positivos e maiores que zero)'
    }
}

let numeroTeste1 = 10;

console.log('O dobro de ' + numeroTeste1 + ' é ' + dobro(numeroTeste1) + '.')

//Números negativos ou zero:
let numeroTeste2 = -10;

console.log('O dobro de ' + numeroTeste2 + ' é ' + dobro(numeroTeste2) + '.')

let numeroTeste3 = 0;
console.log('O dobro de ' + numeroTeste3 + ' é ' + dobro(numeroTeste3) + '.')
