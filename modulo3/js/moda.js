const valores = [];

/* Esta funcion toma el dato ingresado en el html
   y lo incluye dentro del array 'valores' y los
   escribe en el HTML */
function incluirValor (){
    let valor = document.getElementById('valor');
    valores.push(parseInt(valor.value));
    document.getElementById('mostrarValor').innerText = valores;
}

/* Esta funcion cuenta cuantas veces aparece cada dato ingresado en 'valores',
   convierte el objeto en array y ordena el array*/
function agruparConvertirOrdenarValores(){
    const repeticionValores = {};

    valores.map(
        function(elemento){
            if(repeticionValores[elemento]){
                repeticionValores[elemento] += 1;
            }else{
                repeticionValores[elemento] = 1;
            }
        }
    )

    const repeticionValoresArray =
    Object.entries(repeticionValores).sort(function(a,b){return b[1]-a[1]});

    return repeticionValoresArray;
}

function calcularModa(){
    const cantidadValores = agruparConvertirOrdenarValores();
    const moda = cantidadValores[0];
    const modaValor = moda[0];
    const modaCantidad = moda[1];

    document.getElementById('conjuntoOrdenado').innerText = cantidadValores;
    document.getElementById('moda').innerText =
    'La moda de nuestro conjunto de valores es: ' + modaValor +
    ' repetido ' + modaCantidad + ' de veces.';
}
