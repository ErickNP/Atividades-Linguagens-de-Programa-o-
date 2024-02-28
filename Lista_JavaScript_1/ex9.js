function emailValido(str) {

    let temArroba = false;
    let quantidadeArroba = 0;

    let temPonto = false;
    let quantidadePonto = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '@') {
            temArroba = true;
            quantidadeArroba++;

        } else if (temArroba && str[i] === '.') {
            temPonto = true;
            quantidadePonto++;
        }
    }
    if (temArroba == true && temPonto == true &&
        quantidadePonto == 1 && quantidadeArroba == 1) {
        return true;
    }
    else {
        return false;
    }
}

// Email válido:
let email = 'edson.feitosa@facens.br'
console.log(emailValido(email));

//Email sem @: 
let emailInvalido1 = 'edson.feitosa.facens.br'
console.log(emailValido(emailInvalido1));

//Email com mais de um ponto:
let emailInvalido2 = 'edson.feitosa@facens.com.br'
console.log(emailValido(emailInvalido2));

//Email com mais de um @:
let emailInvalido3 = 'edson.feitosa@@facens.br'
console.log(emailValido(emailInvalido3));





