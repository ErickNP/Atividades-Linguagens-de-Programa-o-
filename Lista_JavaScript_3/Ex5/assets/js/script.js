function contarCaracter(frase){

 let tirarEspaco = frase.replace(/\s/g, "");

    let numChar = tirarEspaco.length;

    document.getElementById('valor').textContent = numChar;
}
