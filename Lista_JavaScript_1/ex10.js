function stringPalindroma(str) {

    let stringAlterada = str.toLowerCase().split('').reverse().join('');

    if (stringAlterada == str.toLowerCase()) {
        return true;
    }
    else {
        return false;
    }
}


let palavra1 = 'Arara';
console.log('A palavra Arara é um palíndromo?\n-' + stringPalindroma(palavra1))



