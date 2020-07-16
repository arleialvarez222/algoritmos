// Se requiere una aplicación que lea el nombre de un estudiante y sus 3 notas parciales y
// presente un mensaje con su nombre y nota final. Si la nota final es inferior a 3, presentar
// el mensaje “REPROBADO”, si su nota final es superior o igual a 3 y menor a 4, presentar
// el mensaje “APROBADO”, y si su nota final es 4 o superior, presentar el mensaje
// “EXCELENTEMENTE APROBADO”. 

var nombre;
var nota1;
var nota2;
var nota3;
var notaFinal;


nombre = prompt('nombre');
nota1 = prompt('nota 1');
nota1 = parseInt(nota1),
nota2 = prompt('nota 2');
nota2 = parseInt(nota2),
nota3 = prompt('nota 3');
nota3 = parseInt(nota3),
notaFinal = (nota1 + nota2 + nota3) / 3;

document.write('nombre del estudiante:' + " " + nombre, '<br>');
console.log('nombre del estudiante:' +  " " + nombre);
document.write( 'nota final:' + " " + notaFinal, '<br>');
console.log("nota final:" + " " + notaFinal, );

if(notaFinal < 3){
    document.write("reprovado");
    console.log("reprovado");
}
else if( (notaFinal >=3) && (notaFinal < 4)){
    document.write("aprovado");
    console.log("aprovado");
}

else if(notaFinal >= 4 && notaFinal <= 5){
    document.write("exelentemente aprovado");
    console.log("exelentemente aprovado");
}
