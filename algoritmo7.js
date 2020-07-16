// Se requiere una aplicación que lea el nombre de 3 estudiantes de un salón de clase, las
// 2 notas parciales de cada uno y presente un mensaje con sus nombres y notas ﬁnales.
// Si la nota ﬁnal es inferior a 3, presentar el mensaje “REPROBADO”, en caso contrario
// presentar el mensaje “APROBADO” a cada estudiante.


var nombre;
var nota1;
var nota2;
var notaFinal;



for(var estudiante = 1; estudiante <= 3; estudiante++){
    nombre = prompt(' nombre del estudiante');
    nota1 = parseInt(prompt('nota # 1'));
    nota2 = parseInt(prompt('nota # 2'));
    
    notaFinal = (nota1 + nota2) / 2;

  if (notaFinal < 3){
    console.log('estudiante:' , " " , nombre, "\n", 'nota final:', " ", notaFinal, " " , 'reprovado');
    document.write('estudiante:' , " " , nombre, "<br>", 'nota final:', " ", notaFinal, " " , 'reprovado', '<br>');
    
  } else{
    console.log('estudiante:' , " " , nombre, "\n" , 'nota final:', " ", notaFinal, " " , 'aprovado');
    document.write('estudiante:' , " " , nombre,  "<br>" , 'nota final:', " ", notaFinal, " " , 'aprovado', '<br>');
     
  }
}