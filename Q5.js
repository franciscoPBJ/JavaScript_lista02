
function num_reais(num_a , num_b , codigo) {
    if(codigo == 1){
        return num_a + num_b;
    }
    if(codigo == 2){
        return num_a*num_b;
    }
    if(codigo == 3){
        return num_a/num_b;
    }
    else{
        return alert("codigo invalido");
    }
}

var num_a = window.Number(prompt("informe um numero real:"));
var num_b = window.Number(prompt("informe um numero real:"));
var codigo = window.Number(prompt("informe a ação desejada:"));

num_reais(num_a,num_b,codigo);