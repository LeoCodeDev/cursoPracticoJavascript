const valores = [];

function incluirValor (){
    let valor = document.getElementById('valor');
    valores.push(parseInt(valor.value));
    document.getElementById('mostrarValor').innerText = valores;
}

function calcularMediaGeometrica(){
    let multiplo = 1;
    let radical = valores.length;

    for(let i = 0; i < valores.length ; i++){
        multiplo *= parseInt(valores[i]);
    }

    let mediaGeometrica = Math.pow(multiplo, (1/radical));

    document.getElementById('conjuntoOrdenado').innerText =
    valores.sort(function(a,b){return b-a;});

    document.getElementById('mediaGeometrica').innerText =
    'La media aritmetica es: ' + mediaGeometrica + '.';
}