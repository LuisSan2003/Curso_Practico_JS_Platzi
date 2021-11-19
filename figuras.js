//  Código del cuadrado
console.group("Cuadrados");

    function perimetroCuadrado(lado) {
        return lado * 4;
    }

    function areaCuadrado(lado) {
        return lado * lado;
    }

console.groupEnd();


//  Código del triángulo
console.group("Triángulos");

    function perimetroTriangulo(lado1, lado2, base) {
        return lado1 + lado2 + base;
    }

    function areaTriangulo(base, altura) {
        return (base * altura) / 2;
    }

console.groupEnd();


// Código del círculo
console.group("Círculos");

    const PI = Math.PI;

    function diametroCirculo(radio) {
        return radio * 2;
    }

    function perimetroCirculo(radio) {
        var diametro = diametroCirculo(radio);
        return diametro * PI;
    }

    function areaCirculo(radio) {
        return (radio * radio) * PI;
    }

console.groupEnd();


                                                // Interaccion con HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo() {
    const lado1 = document.getElementById("lado1");
    const lado2 = document.getElementById("lado2");
    const base = document.getElementById("base");

    const valueLado1 = Number(lado1.value);
    const valueLado2 = Number(lado2.value);
    const valueBase = Number(base.value);

    const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase);
    alert("El perímetro del triángulo es: " + perimetro);
}

function calcularAreaTriangulo() {
    const base = document.getElementById("base");
    const altura = document.getElementById("altura");

    const valueBase = Number(base.value);
    const valueAltura = Number(altura.value);

    const area = areaTriangulo(valueBase, valueAltura);
    alert("El área del triángulo es: " + area);
}

function calcularDiametroCirculo() {
    const radio = document.getElementById("radio");

    const value = radio.value;

    const diametro = diametroCirculo(value);
    alert("El diámetro del círculo es: " + diametro);
}

function calcularPerimetroCirculo() {
    const radio = document.getElementById("radio");

    const value = radio.value;

    const perimetro = perimetroCirculo(value);
    alert("El perímetro del círculo es: " + perimetro);
}

function calcularAreaCirculo() {
    const radio = document.getElementById("radio");

    const value = radio.value;

    const area = areaCirculo(value);
    alert("El área del círculo es: " + area);
}

                // RETO CLASE 9

function alerta() {
    alert("Debe ser un triángulo isósceles: Todos los lados deben ser iguales.");
}

function alturaTriangulo(lado1, lado2, base) {
    // El triangulo debe ser isosceles
    const verificacion = lado1 + lado2 + base;

    if ((3 * lado1) == verificacion) {
        const hipot = lado1;
        const catetoX = base / 2;
        return (Math.sqrt((hipot * hipot) - (catetoX * catetoX)));
    } else {
        alerta();
    }
}

function calcularAlturaTriangulo() {
    const lado1 = document.getElementById("retoLado1");
    const lado2 = document.getElementById("retoLado2");
    const base = document.getElementById("retoBase");
    const valueLado1 = Number(lado1.value);
    const valueLado2 = Number(lado2.value);
    const valueBase = Number(base.value);

    var result = alturaTriangulo(valueLado1, valueLado2, valueBase);
        alert("La altura del triángulo es: " + result);
};