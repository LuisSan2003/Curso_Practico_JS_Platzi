//  Código del cuadrado
console.group("Cuadrados");

const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado

console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");
console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");
console.log("El área del cuadrado es: " + areaCuadrado + "cm2");

console.groupEnd();

//  Código del triángulo
console.group("Triángulos");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

console.log(
    "Los lados del triángulo miden: " + ladoTriangulo1
     + "cm, " + ladoTriangulo2 + "cm, "
     + baseTriangulo + "cm"
     );
console.log("La altura del triángulo es: " + alturaTriangulo + "cm");
console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");
console.log("El área del triángulo es: " + areaTriangulo + "cm2");

console.groupEnd();

// Código del círculo
console.group("Círculos");

const radioCirculo = 4;
const diametroCirculo = radioCirculo * 2;
const PI = Math.PI;
const perimetroCirculo = diametroCirculo * PI;
const areaCirculo = (radioCirculo * radioCirculo) * PI;

console.log("El radio del círculo es: " + radioCirculo + "cm");
console.log("El diámetro del círculo es: " + diametroCirculo + "cm");
console.log("PI es: " + PI);
console.log("El perímetro del círculo es: " + perimetroCirculo + "cm");
console.log("El área del círculo es: " + areaCirculo + "cm2");

console.groupEnd();