function mudarCor(elemento) {

    let cores = ["red", "blue", "green", "yellow", "orange", "purple", "cyan", "magenta", "brown"];

    let corAleatoria = cores[Math.floor(Math.random() * cores.length)];

    elemento.style.backgroundColor = corAleatoria;

}