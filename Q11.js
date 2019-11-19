//analisando como string;
var a = prompt("Digite a:");
var b = prompt("Digite b:");

function analise(a,b){
    var variavel = a.endsWith(b) ? "Encaixa" : "nao encaixa"; 
    return variavel;
}

analise(a,b);