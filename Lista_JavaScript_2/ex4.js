function dividePorTres(numero) {
    if (numero % 3 === 0) {
        return true;
    }
    else {
        return false;
    }
}

var numero = 15;
console.log('O número '+ numero +' pode ser dividido por três?\n- ' + dividePorTres(numero) + '\n')

var numero = 10;
console.log('O número '+ numero +' pode ser dividido por três?\n- ' + dividePorTres(numero) + '\n')