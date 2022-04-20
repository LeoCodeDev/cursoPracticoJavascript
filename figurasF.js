function areaCuadrado(lado){
    return 'El area del cuadrado es: ' + (lado * lado) + 'cm2';
}

function perimetroCuadrado(lado){
    return 'El perimetro del cuadrado es: ' + (lado * 4) + 'cm';
}

function perimetroTriagulo(lado1, lado2, base){
    return 'El perimetro del triangulo es: ' + (lado1 + lado2 + base) + 'cm';
}

function areaTriangulo(altura, base){
    return 'El area del triangulo es: ' + ((altura * base)/ 2) + 'cm2';
}

function diametroCirculo(radio){
    return 'El diametro del circulo es: ' + (radio * 2) + 'cm';
}

function perimetroCirculo(radio){
    return 'El perimetro del circulo es: ' + ((radio * 2)* Math.PI) + 'cm';
}

function areaCirculo(radio){
    return'El area del circulo es: ' + ((radio * radio)* Math.PI) + 'cm2'
}