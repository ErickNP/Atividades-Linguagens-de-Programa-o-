function addLista(event) {
    event.preventDefault();

    let textoInput = document.querySelector('#input-tarefa').value;

    if (textoInput !== "") {
        
        let item = document.createElement('li');
        item.textContent = textoInput;

        let lista = document.getElementById('lista');
        lista.appendChild(item);

        document.querySelector('#input-tarefa').value = '';
    } else {

        alert("Entrada inválida, digite novamente!");

    }
}