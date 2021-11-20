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


                    // RETO CLASE 13


const cupones = [];

function grabarCupon() {
    const valor = document.getElementById("cupon");
    const valueValor = valor.value;
    const p = document.getElementById("cuponVerf")
    let incluyeValor = cupones.filter(element => element == valueValor);

    if (valueValor == incluyeValor) {
        p.innerText = "ERROR ---- ¡Este cupón ya ha sido usado!";
    } else {
        cupones.push(valueValor);
        p.innerText = "El cupón de descuento se ha grabado con éxito.";
    }
}