const salarios = [];
let onlySalary = [];
let percent10 = Calcular10(onlySalary.length, 10);
let SalaryTop10 = onlySalary.splice(0,percent10);
const mediaGeneral = sumarValores();

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

    return promedio;
}

function Calcular10(cantidad, top){
    const restante = 100 - parseInt(top);
    const cantidadFinal = ( parseInt(cantidad) * restante) / 100 ;

    return cantidadFinal;
}