const pHTML1 = document.getElementById("parrafoResult1");
const pHTML2 = document.getElementById("parrafoResult2");
const lista1 = [];
const lista1Count = {};

function agregarItem() {
    const datos = document.getElementById("valorBox");
    const valueDatos = datos.value;

    lista1.push(valueDatos);
    pHTML1.innerText = "lista1: [" + lista1 + "]";
}

function calcularModa() {
    lista1.map(
        function (elemento) {
            if (lista1Count[elemento]) {
                lista1Count[elemento] += 1;
            } else {
                lista1Count[elemento] = 1;
            }
        }
    );

    const lista1Array = Object.entries(lista1Count).sort(
        function (a, b) {
            return a[1] - b[1];
        }
    ); //Enviamos a Object.entries() como argumento el objeto que queremos convertir en array
    const moda = lista1Array[lista1Array.length - 1];
    pHTML2.innerText = "La moda es (valor, # repeticiones): " + moda;
}

