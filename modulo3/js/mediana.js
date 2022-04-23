const valores = [];

function parInpar(){
    if(valores.length % 2 === 0){
        return true;
    }else{
        return false;
    }
}

function incluirValor(){
    let valor = document.getElementById('valor');
    valores.push(valor.value);

    document.getElementById('mostrarValor').innerText = valores.sort(function compareNumbers(a,b){return a-b;});
}

function sumarValores(){
    if(parInpar() === true){
        const mitadArray = valores.length / 2;
        let elemento1 = parseInt(valores[mitadArray -1]);
        let elemento2 = parseInt(valores[mitadArray]);

        promedio = ((elemento1 + elemento2) / 2);
        console.log({
            mitadArray,
            elemento1,
            elemento2,
            promedio,
        });
    }else{
        const mitadArray = valores.length / 2;
        promedio = valores[parseInt(mitadArray)];
    }

    return document.getElementById('mediana').innerText = 'La mediana es: ' + promedio;
}