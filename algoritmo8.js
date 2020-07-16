// . Leer dos números 
// Si son iguales que los multiplique 
// Si el primero es mayor al segundo que los sume 
// Si el segundo es mayor al primero que los multiplique


var numero1;
var numero2;
var total;

numero1 = parseInt(prompt('digite su numero'));
numero2 = parseInt(prompt('digite su numero'));

if(numero1 == numero2){
    total = numero1 * numero2;
    document.write(total);
    console.log(total);
}
if( numero1 > numero2){
    total = numero1 + numero2;
    document.write(total);
    console.log(total);
}
else if(numero2 > numero1){
    total = numero1 * numero2;
    document.write(total);
    console.log(total);
}