var q1 = Number(prompt('Сколько у вас с собой есть денег?'));
var q2 = Number(prompt('Сколько вы купили яблок?'));
var q3 = Number(prompt('Сколько вы купили батонов хлеба?'));
var q4 = Number(prompt('Сколько стоит одно яблоко?'))*q2;
var q5 = Number(prompt('Сколько стоит один батон хлеба?'))*q3;
var enough = q1 > (q4+q5);
document.body.innerHTML = enough