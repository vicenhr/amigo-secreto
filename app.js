let amigos = [];
let listaAmigos = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');

function entradaAmigo() {
    return document.getElementById('amigo').value;
}

function validarEntrada() {
    if (entradaAmigo() == '') {
        alert('Por favor, ingrese un nombre valido');
        return false;
    } else {
        return true;
    }
}

function validarSorteo() {
    if (amigos.length == 0) {
        alert('Por favor, agrega amigos');
        return false;
    } else {
        return true;
    }
}

function nombreRepetido(amigos,nombre) {
    for (let index = 0; index < amigos.length; index++) {
        if (nombre.toLowerCase() == amigos[index].toLowerCase()) {
            return true;
        }
    }
    return false;
}

function agregarAmigo() {
    if (validarEntrada()) {
        resultado.textContent = '';
        let nombre = entradaAmigo();
        if(nombreRepetido(amigos,nombre)){
            alert('¡Este nombre ya fue ingresado!')
        }else{
            amigos.push(nombre);
            mostrarListaAmigos(amigos);
            limpiarInput();
        }
    }
}

function mostrarListaAmigos(amigos) {
    limpiarLista();
    for (let index = 0; index < amigos.length; index++) {
        let li = document.createElement('li');
        li.textContent = amigos[index];
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo() {
    if (validarSorteo()) {
        limpiarLista();
        let numeroSorteado = Math.floor(Math.random() * amigos.length);
        resultado.textContent = `El amigo secreto es: ${amigos[numeroSorteado]}`;
        amigos = [];
    }
}

function limpiarInput() {
    document.getElementById('amigo').value = '';
}

function limpiarLista() {
    listaAmigos.innerHTML = '';
}