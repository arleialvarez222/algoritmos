// diseñe un algoritmo que determine el porcentaje de varones y de mujeres que hay en un salón de clases. Debe ingresar el valor total de varones y de mujeres

// var total = prompt("numero de estudiantes");
var mujeres;
var hombres;
var total;
var p_hombres;
var p_mujeres;
var 
 hombres = prompt("numero de hombres");
 hombres =parseInt(hombres);
 mujeres = prompt("numero de mujeres");
 mujeres = parseInt(mujeres);


 total = hombres + mujeres;
 p_hombres = 100 * hombres / total;
 p_mujeres = 100 * mujeres / total;

document.write("porcentage de mujeres:" + " " + p_mujeres + "%", '<br>');
console.log("porcentage de mujeres:" + " " + p_mujeres + "%");
document.write("porcentage de hombres:" + " " + p_hombres + "%");
console.log("porcentage de hombres:" + " " + p_hombres + "%");