var grausC = Number(prompt('informe a temperatura em celsius:'));

var tempFarenheit = grausC*1.8 + 32;

function temperatura(grausCelsius, tempFarenheit){

if(grausCelsius < 10){
    alert(`faz ${tempFarenheit} graus farenheit`);
    return document.write('muito frio');
}
if(grausCelsius <= 15){
    alert(`faz ${tempFarenheit} graus farenheit`);
    return document.write('frio');
}
if(grausCelsius <= 22){
    alert(`faz ${tempFarenheit} graus farenheit`);
    return document.write('normal');
}
if(grausCelsius <=30){
    alert(`faz ${tempFarenheit} graus farenheit`);
    return document.write('quente');
}
};

temperatura(grausC, tempFarenheit);

