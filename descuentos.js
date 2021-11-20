const precioOriginal = 120;
const descuento = 18;

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function priceDiscount() {
    const inputPrice = document.getElementById("inputPrice");
    const inputDiscount = document.getElementById("inputDiscount");
    
    const valuePrice = inputPrice.value;
    const valueDiscount = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(valuePrice, valueDiscount);
    
    const resultP = document.getElementById("resultPrice");

    resultP.innerText = "El precio con descuento es: $" + precioConDescuento;
}