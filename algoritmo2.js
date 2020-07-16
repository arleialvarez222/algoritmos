// .  El sueldo neto de un vendedor se calcula como la suma de un sueldo básico de 250000 más el 12% del monto total vendido. Diseñe un algoritmo que determine el sueldo neto de un vendedor sabiendo que hizo tres ventas en el mes



var sueldoB;
var ganancia;
var venta1;
var venta2;
var venta3;
var totalVenta;
var sueldo;



// sueldo = prompt("sueldo");
venta1 = prompt("venta 1");
venta1 = parseInt(venta1);
venta2 = prompt("venta 2");
venta2 = parseInt(venta2);
venta3 = prompt("venta 3");
venta3 = parseInt(venta3);
totalVenta = venta1 + venta2 + venta3;
ganancia = totalVenta * 12 / 100;
sueldoB = 250000;
sueldo = sueldoB + ganancia;


document.write('sueldo a recibir es:' + " " + sueldo);
console.log('sueldo a recibir es:' + " "+ sueldo);