// Criei um array contendo 10 valores de salário
let salarios = [1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500];

// Utilizei o método map() para atribuir um aumento de 15% para salários até 2000 e um aumento de 10% para salários acima de 2000
let salariosAjustados = salarios.map(salario => {
if (salario <= 2000) {
return salario * 1.15;
} else {
return salario * 1.10;
}
});

// Utilizei o método filter() para criar um novo array contendo somente os salários superiores a 2500
let salarioSuperior2500 = salariosAjustados.filter(salario => salario > 2500);

// Utilizei o método reduce() para somar os valores do array
let somaSalarios = salarioSuperior2500.reduce((a, b) => a + b);

// Imprime o valor total dos salários
console.log(somaSalarios);

