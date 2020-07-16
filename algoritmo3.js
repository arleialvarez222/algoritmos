// En una competencia atlética de velocidad el tiempo se mide en minutos, segundos y centésimas de segundo y, el espacio recorrido se mide en metros. Diseñe un algoritmo para determinar la velocidad promedio de un atleta en km/hr. Considere que: 1 hora = 60 minutos, 1 minuto = 60 segundos, 1 segundo = 100 centésimas de segundo, 1 kilómetro = 1000 metros.

var tiempo;
var distancia;
var hora;
var minuto;
var segundo;
var centesima;
var kilometro;

distancia = prompt('distancia recorrida en metros:');
tiempo = prompt('tiempo realizado enminutos:');
kilometro = 1000;

minuto =  distancia / tiempo;
hora = (((distancia * 60) / tiempo) / kilometro);
segundo = minuto / 60;

console.log('metros por minutos:', " ", minuto);
console.log('kilometros por hora:', " ", hora);
console.log('metros por segundos:', " ", segundo);