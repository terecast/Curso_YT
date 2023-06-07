/*Los condicionales nos permiten hacer preguntas para saber si el programa va a ejecutar codigo o no.
La estructura de la condicional es la siguiente:
if (true) {
    se ejecuta codigo aqui dentro

}; */

const persona = {
    edad: 1,
    pais: 'Mexico',
    ticket: false,
};
/*if(persona.edad > 17){
    console.log('El usuario es mayor de edad y puede entrar al concierto');
}else{
    console.log('El usuario es menor de edad y no debe entrar al concierto');

};*/

/*Si queremos que 2 condiciones se cumplan podemos hacerlo con el operador && y las 2 condiciones se deberan cumpir, ejemplo:*/

if(persona.edad > 18 && persona.ticket){
    console.log('El usuario es mayor de edad y tiene ticket, por lo que puede entrar al concierto');

}else {
    console.log('El usuario o es Menor de edad y/o no tiene ticket. No puede entrar al concierto');

};

/*Si solo queremos que se cumpla una de las condiciones para aprovarlo podemos usar el operador OR el cual es con los simbolos ||. Ejemplo:*/


if(persona.edad > 18 || persona.ticket){

    console.log('El usuario puede entrar al concierto');

}else {
    console.log('El usuario NO puede entrar al concierto');
}; /*else {
    console.log('El usuario es mayor de edad pero NO tiene ticket, No puede entrar al concierto');


};*/