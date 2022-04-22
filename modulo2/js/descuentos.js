function calcularDescuento(precio, descuento){
    const porcentajeDescontado = 100 - parseInt(descuento);
    const precioFinal = ( parseInt(precio) * porcentajeDescontado) / 100 ;

    return precioFinal;
}

function calculadorDeDescuento(){
    let priceInput = document.getElementById('precio');
    let price = priceInput.value;
    let discountInput = document.getElementById('descuento');
    let discount = discountInput.value;

    let result = calcularDescuento(price, discount);

    document.getElementById('resultado').innerHTML = '<p> El precio final del producto es $' + result;
}