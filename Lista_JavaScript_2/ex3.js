function numeroFormatado(numero) {
    return numero.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
}

function jurosSimples(capitalInicial, taxaJuros, tempo) {
    let juros = capitalInicial * (taxaJuros / 100) * tempo;
    let montante = capitalInicial + juros;
    return numeroFormatado(montante);
}

function jurosCompostos(capitalInicial, taxaJuros, tempo) {
    let montante = capitalInicial * (1 + (taxaJuros / 100)) ** tempo;
    return numeroFormatado(montante);

}

// Juros Simples;
console.log('Montante: ' + jurosSimples(1000, 10, 30))

// Juros Compostos:
console.log('Montante: ' + jurosCompostos(1000, 10, 30))
