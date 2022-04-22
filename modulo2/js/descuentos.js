// const precio = 230;
// const descuento = 15;
// const porcentajeDescontado = 100 - descuento;
// const precioFinal = (precio * porcentajeDescontado) /100;

function calcularDescuento(precio, descuento){
    const porcentajeDescontado = 100 - descuento;
    const precioFinal = (precio * porcentajeDescontado) / 100 ;

    return precioFinal;
}

calcularDescuento(prompt('Ingrese valor del producto'), prompt('ingrese descuento'));