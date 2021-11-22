var arrayHTML = [];
const pHTML = document.getElementById("parrafoResult");

function mediaAritmetica(lista) {
    // let sumaLista = 0;
    // for(let i = 0; i < lista.length; i++) {
    //     sumaLista = sumaLista + lista[i];
    // }

    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento
        }
    )
    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

function agregarItem() {
    const valor = document.getElementById("valorBox");
    const valueValor = Number(valor.value);

    arrayHTML.push(valueValor);
}

function calcularMediaAritmetica() {
    var result = mediaAritmetica(arrayHTML);

    pHTML.innerText = "La media aritmética es: " + result;
}

function limpiar() {
    arrayHTML = [];
    pHTML.innerText = "";
    return arrayHTML;
}