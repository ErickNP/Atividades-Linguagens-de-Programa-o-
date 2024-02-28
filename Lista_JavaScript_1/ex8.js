function contarVogais(str) {

    let arrayStr = str.split('');
    let vogaisTotal = 0;

    for (let i = 0; i < arrayStr.length; i++)

        if (arrayStr[i] == 'a' || arrayStr[i] == 'e' || arrayStr[i] == 'i' || arrayStr[i] == 'u') {

            vogaisTotal++;
        }

    return vogaisTotal;
}


let testeString = 'abacate';

console.log('A String ' + testeString + ' contém ' + contarVogais(testeString) + ' vogais.')