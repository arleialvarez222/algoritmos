// .  Leer dos números; 
// si son iguales que los multiplique, 
// si son distintos que los sume


var numero1;
var numero2;
var total;

numero1 = parseInt(prompt('digite # 1'));
numero2 = parseInt(prompt('digite # 2'));

if(numero1 == numero2){
    total = numero1 * numero2;
}
 else{
     total = numero1 + numero2;
 }

document.write('total:' + " " + total);
console.log('total:' + " " + total);