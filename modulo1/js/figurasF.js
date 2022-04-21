function areaCuadrado(lado){
    return 'El area del cuadrado es: ' + (lado * lado) + 'cm2';
}

function perimetroCuadrado(lado){
    return 'El perimetro del cuadrado es: ' + (lado * 4) + 'cm';
}

function perimetroTriangulo(lado1, lado2, base){
    return 'El perimetro del triangulo es: ' + (parseInt(lado1) + parseInt(lado2) + parseInt(base)) + 'cm';
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

function calcularPerimetroCuadrado(){
    const input = document.getElementById("ladoC");
    const value = input.value;
    alert(perimetroCuadrado(value));
}

function calcularAreaCuadrado(){
    const input = document.getElementById("ladoC");
    const value = input.value;
    alert(areaCuadrado(value));
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("radioC");
    const value = input.value;
    alert(perimetroCirculo(value));
}

function calcularAreaCirculo(){
    const input = document.getElementById("radioC");
    const value = input.value;
    alert(areaCirculo(value));
}

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("ladoT1");
    const value1 = input1.value;
    const input2 = document.getElementById("ladoT2");
    const value2 = input2.value;
    const input3 = document.getElementById("baseT");
    const value3 = input3.value;
    alert(perimetroTriangulo(value1, value2, value3));
}

function calcularAreaTriangulo(){
    const input1 = document.getElementById("ladoT1");
    const value1 = input1.value;
    const input2 = document.getElementById("ladoT2");
    const value2 = input2.value;
    const input3 = document.getElementById("baseT");
    const value3 = input3.value;
    alert(areaTriangulo(value1, value2, value3));
}