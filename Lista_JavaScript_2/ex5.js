function maior_E_Menor(lista) {

    let maior = lista[0]
    let menor = lista[0]

    for (let i = 0; i < lista.length; i++) {
        if (lista[i] > maior) {
            maior = lista[i];
        }
        if (lista[i] < menor) {
            menor = lista[i];
        }
    }

    return {maior: maior, menor: menor}
}

let lista = [3, 8, 2, 10, 5];
let resultado = maior_E_Menor(lista);


console.log("O maior elemento é: " + resultado.maior);

console.log("O menor elemento é: " + resultado.menor);
