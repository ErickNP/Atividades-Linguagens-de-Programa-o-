function inverterString(str) {
    return str.split('').reverse().join('');
}

let stringTeste = 'almoço';

console.log('A String "' + stringTeste + '", quando invertida, se transforma em "' + inverterString(stringTeste) + '"')