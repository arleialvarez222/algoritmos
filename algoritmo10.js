// Se desea un algoritmo para convertir metros a pies y pulgadas (1 metro = 39.37 pulgadas, 1 pie = 12 pulgadas)


var metros;
var pulgadas;
var pie;
var metropulgada;
var metropie;

metros = parseInt(prompt('digite numero de metros'));
pulgadas = 39.37;
pie = 3.28;

metropulgada = pulgadas * metros;
metropie = pie * metros;

// document.write('pulgadas:', " ", metropulgada, '<br>');
// document.write('pie', " ", metropie);
 
console.log('metros a convertir:', " ", metros);
console.log('pulgadas:', " ", metropulgada);
console.log('pie:', " ", metropie);

