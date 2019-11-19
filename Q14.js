var numeroFuncionario = Number(prompt('informe o numero do funcionário'));
var Horas_trabalhadas = Number(prompt('informe a quantidade horas trabalhadas mensais'));
var valorHora = Number(prompt('valor da hora'));
var filhos= Number(prompt('Informe a quantidade de filhos menores de 14 anos:'));


function  Func(Horas_trabalhadas,valorHora,filhos){
    
    var salario = Horas_trabalhadas*valorHora;  
    var acrescimo = salario*filhos*0.1;
    var salario_final = salario + acrescimo;

    var usuario = filhos > 0 ?  salario_final : salario;
    return usuario;  
}


Func(Horas_trabalhadas,valorHora,filhos);