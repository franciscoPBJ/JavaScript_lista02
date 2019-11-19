var a = window.Number(prompt("informe um valor:"));
var b = window.Number(prompt("informe um valor:"));
var c = window.Number(prompt("informe um valor:"));

function media_aritmetica(a,b,c) {
    var soma = a + b + c ;
    return soma/3;
};

var media = media_aritmetica(a,b,c);

window.alert("a media é  " + media);