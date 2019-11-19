
function valor(preco , parcela) {
    if(parcela == 3){
        var valor_total = preco*1.1;
        var prestacao = valor_total/parcela;
        return alert(`a parcela é de ${prestacao} e o valor total é ${valor_total}`);
    }
    if(parcela == 5) {
        var valor_total = preco*1.2;
        var prestacao = valor_total/parcela;
        return alert(`a parcela é de ${prestacao} e o valor total é ${valor_total}`);
    }
    else{
        return alert('numero indisponivel');
    }
}

var produto = window.Number(prompt("informe o valor do produto:"));
var num_parcelas = window.Number(prompt("informe o numero de parcelas:"));

valor(produto , num_parcelas);