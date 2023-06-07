//Lo Arreglos puedes tener mucha informacion pero no es facil saber que es cada cosa, los puedes suponer pero no tienes certeza
const personaArreglo =['Carlos', 27, 'correo@correo.com', true,];

// por eso existen los objetos, los cuales podemos tener PROPIEDADES y VALORES (Las propiedades van seguidas de dos puntos : para asignar el valor)

const persona = {
    nombre: 'Tere',
    edad: 27,
    correo: 'correo@correo.com',
    suscripciones: {
        web: true,
        correo: true,
    },
    coloresFavoritos: ['negro', 'Rojo', 'Amarillo'],
    saludo: function() {
        alert('Hola');
    },


};
console.log(persona.nombre);
console.log(persona.coloresFavoritos[0]); // Se llama a Persona. la propiedad y como esa propiedad contiene arreglo, se llama al indice que se quiere con[]
console.log(persona['correo']); //esta es otra manera de llamar propiedades, se pone corchete y se pone entre comillas

const variable = 'correo';
console.log(persona[variable]); //En este caso llamamos a persona por que es donde contiene la propiedad 'correo' que es donde queremos jalar la info
//Se usan corchetes 

//Si queremos agregar mas propiedades al objeto solo se escribe de la siguiente manera:

persona.pais= 'Mexico';
persona.pais = 'Alemania'; //En este caso se sobre escribio el pais por que siempre se imprime lo que este mas abajo
console.log(persona);

//Para llamar a las funciones o METODOS
//el METODO saludo es una funcion dentro de un objeto y para llamarla se hace de la siguiente manera
//no Olvidar que las funciones o en este caso METODO llevan parentesis
persona.saludo();
