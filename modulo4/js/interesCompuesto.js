const investmentRaw = document.getElementById('monto');
const percentRaw    = document.getElementById('percentil');
const monthRaw      = document.getElementById('time');

function calcular(){
    let investment    = parseInt(investmentRaw.value);
    let percent       = parseInt(percentRaw.value);
    let month         = parseInt(monthRaw.value);
    const profit = investment * Math.pow(1 + (percent / 100 ),month);

    document.getElementById('result').innerText =
    "El Capital Final sera de: " + profit + '$';
    return profit;
}
