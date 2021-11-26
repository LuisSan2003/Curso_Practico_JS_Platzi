var pHTML1 = document.getElementById("parrafoResult1");
var pHTML2 = document.getElementById("parrafoResult2");
var valores = [];

function agregarItem() {
    const datos = document.getElementById("valorBox");
    const valueDatos = Number(datos.value);

    valores.push(valueDatos);
    pHTML1.innerText = "Valores: [" + valores + "]";
}

function calcularMedGeo() {
    var indice = (1 / valores.length);
    var radicando = 1;

    for (var i = 0; i < valores.length; i++) {
        radicando = radicando * valores[i];
    }

    var medGeo = Math.pow(radicando, indice);
    pHTML2.innerText = "El valor de la media geométrica es: " + medGeo;
}

function limpiar() {
    valores = [];
    pHTML1.innerText = "";
    pHTML2.innerText = "";
}