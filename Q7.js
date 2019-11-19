var nota_1 = Number(prompt('Nota do primeiro bimestre:'));
var nota_2 = Number(prompt('Nota do segundo bimestre:'));
var nota_3 = Number(prompt('Nota do terceiro bimestre:'));
var nota_4 = Number(prompt('Nota do quarto bimestre:'));

function media(nota_1 ,nota_2 ,nota_3 ,nota_4){
    var media_parcial = (nota_1 + nota_2 + nota_3 + nota_4)/4;
    if(media_parcial < 7){
        var prova_final = Number(prompt("informe a nota da final:"))
        return (prova_final + media_parcial)/2;
    } 
    else{
        return media_parcial;
    }
}

media(nota_1,nota_2,nota_3,nota_4);