var salario = window.Number(prompt("informe o valor do salário:"));

function salario_final (salario){
    var acrescimo = salario * 0.1;
    return acrescimo + salario;
};

var salario_liquido = salario_final(salario);

alert("o salario final é: " + salario_liquido);