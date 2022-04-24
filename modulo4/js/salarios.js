const salarios = [];
let onlySalary = [];

function capturarSalarios(){
    const nombre = document.getElementById('name');
    const salario = document.getElementById('salary');

    salarios.push({
        name: nombre.value,
        salary: parseInt(salario.value)
    })

    onlySalary = [];

    salarios.forEach(function(x){
        onlySalary.push(x.salary)
    })

    onlySalary.sort(function(a,b){
        return b-a;
    })
}

function parInpar(){
    return onlySalary.length % 2 === 0;
}

function sumarValores(){
    if(parInpar() === true){
        const mitadArray = onlySalary.length / 2;
        let elemento1 = parseInt(onlySalary[mitadArray -1]);
        let elemento2 = parseInt(onlySalary[mitadArray]);

        promedio = ((elemento1 + elemento2) / 2);
    }else{
        const mitadArray = onlySalary.length / 2;
        promedio = onlySalary[parseInt(mitadArray)];
    }

    return /* document.getElementById('mediana').innerText = 'La mediana es: ' + */ promedio;
}