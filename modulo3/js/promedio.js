const valores = [];

function incluirValor(){
    let valor = document.getElementById('valor');
    valores.push(valor.value);

    document.getElementById('mostrarValor').innerText = valores;
}

function sumarValores(){
    let suma =0;
    for(let i = 0; i < valores.length ; i++){
        suma += parseInt(valores[i]);
    }

    let promedio = suma / valores.length;

    document.getElementById('promedio').innerText = promedio;
}