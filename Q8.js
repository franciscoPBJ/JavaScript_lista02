
var salario = Number(prompt("informe o seu salário:"));

function reajuste(salario){
    if(salario <= 280){
        salario = salario*1.2;
        return salario
    }
    if(salario <= 700){
        salario = salario*1.15;
        return salario;
    }
    if(salario <= 1500){
        salario = salario*1.1;
        return salario;
    
    }
    else{
        salario = salario*1.05;
        return salario;
    }
}