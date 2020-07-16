// . Crear un pseudocódigo que proporcione el precio medio de un producto, calculado a partir del precio del mismo en tres establecimientos distintos.



var local1;
var local2;
var local3;
var total;

local1 = parseInt(prompt('local numero 1'));
local2 = parseInt(prompt('local numero 2'));
local3 = parseInt(prompt('local numero 3'));

total = (local1 + local2 + local3) / 3;

document.write('precio promedio:' + " " + total);
console.log('precio promedio:' + " " + total);