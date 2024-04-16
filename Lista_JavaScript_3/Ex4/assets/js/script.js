function somar(valor1, valor2) {

    if (valor1 === '' || valor2 === '') {

        alert('Operação Inválida! Por favor, insira valores nos campos.');
    } else {

        let soma = parseInt(valor1) + parseInt(valor2);
        document.getElementById('valor').textContent = soma;
    }
}

function subtrair(valor1, valor2) {

    if (valor1 === '' || valor2 === '') {

        alert('Operação Inválida! Por favor, insira valores nos campos.');
    } else {

        let diferenca = parseInt(valor1) - parseInt(valor2);
        document.getElementById('valor').textContent = diferenca;
    }
}

function multiplicar(valor1, valor2) {

    if (valor1 === '' || valor2 === '') {

        alert('Operação Inválida! Por favor, insira valores nos campos.');
    } else {

        let produto = parseInt(valor1) * parseInt(valor2);
        document.getElementById('valor').textContent = produto;
    }
}

function dividir(valor1, valor2) {

    if (parseInt(valor1) === 0 || parseInt(valor2) === 0) {

        alert('Impossível dividir por zero!');
    } else if (valor1 === '' || valor2 === '') {

        alert('Operação Inválida! Por favor, insira valores nos campos.');
    }
    else {

        let produto = parseInt(valor1) / parseInt(valor2);
        document.getElementById('valor').textContent = produto;
    }
}