// Hacer un algoritmo que imprima el costo de una llamada telefónica, capturando la duración de la llamada en minutos y conociendo lo
// Siguiente:
// Toda llamada que dure 3 minutos o menos tiene un costo de 200 pesos
// Cada minuto adicional cuesta 30 pesos


var duracion;
var costo;
var costoAdicional;


    duracion = parseInt(prompt('duracion de llamada',''));
    costo = 200;
    costoAdicional = 30;

    if(duracion <= 3){
        costo = 200;
        document.write('tiempo de llamada:', " ", duracion, 'min', '<br>');
        document.write('costo de llamada:', " ", costo, '$');
    }
     else if (duracion > 3)
    {
        costoAdicional = (costoAdicional * duracion) - 90;
        costo = costo + costoAdicional;
        document.write('tiempo de llamada:', " ", duracion, 'min', '<br>');
        document.write('costo de la llamada', " ", costo, '$');
    }

