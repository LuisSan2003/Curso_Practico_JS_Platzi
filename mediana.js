const pHTML1 = document.getElementById("parrafoResult1");
const pHTML2 = document.getElementById("parrafoResult2");
var lista1 = [];
var mediana;
var mitadLista1;

function agregarItem() {
    const valor = document.getElementById("valorBox");
    const valueValor = Number(valor.value);

    lista1.push(valueValor);
    mitadLista1 = parseInt(lista1.length / 2);
    lista1.sort();
    pHTML1.innerText = "lista1: [" + lista1 + "]";
}

function mediaAritmetica(lista) {
    var sumaLista = 0;
    for(let i = 0; i < lista.length; i++) {
        sumaLista = sumaLista + lista[i];
    }

    // const sumaLista = lista.reduce(
    //     function(valorAcumulado = 0, nuevoElemento) {
    //         return valorAcumulado + nuevoElemento
    //     }
    // )
    return (sumaLista / lista.length);
}

function esPar(numero) {
 if (numero % 2 === 0) {
     return true;
 } else {
     return false;
 }
}

function calcularMediana() {
    if (esPar(lista1.length)) {
        const elemento1 = lista1[mitadLista1 - 1];
        const elemento2 = lista1[mitadLista1];
        const array = [elemento1, elemento2];
    
        mediana = mediaAritmetica(array);
    
    } else {
        mediana = lista1[mitadLista1];
    }

    pHTML2.innerText = "La mediana es: " + mediana;
}

function limpiar() {
    lista1 = [];
    pHTML1.innerText = "";
    pHTML2.innerText = "";
    mediana = 0;
}