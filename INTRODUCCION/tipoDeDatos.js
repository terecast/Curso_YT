//Tipos de datos que podemos guardar en las variables:
//String - Cadena de Texto

const nombre = 'Carlos';

//number - Numero

const numero = 1.1;

//Boolean - (Verdadero o Falso)

const usuarioConectado = false;
const mayorQue = 10 > 2;

//array - Arreglos
//siempre se usan corchetes y dentro de ellos se pueden almacenar todos los datos incluso mas arreglos

const arreglo = [1, 2, 5, 10];
//se pueden guardar diferentes tipos de datos dentro de un arreglo
const arreglo2 = ['texto', 456, true, { propiedad: 'valor' }, [1, 2, 3]];
console.log(arreglo2);

//Objeto - Objetos
//En los objetos se usan llaves, se declaran su propiedades y valores
//"nombre" es la propiedad y "Carlos" es el Valor ** se usan 2 puntos : despues de cada propiedad
const persona = {
    nombre: 'Carlos',
    edad: 25,
    carro: {
        marca: 'Audi',
        color: 'negro',
        Año: 2022,

    },
};
console.log(persona.edad);



//Function - Funciones
// si quisieramos imprimir 5 veces "Hola Mundo" tendriamos lo siguiente:
/*
console.log("Hola Mundo");
console.log("Hola Mundo");
console.log("Hola Mundo");
console.log("Hola Mundo");
console.log("Hola Mundo");
*/
//Pero si quisieramos hacerlo 100 veces no es practico asi que usamos funciones, las cuales nos ayudan a reciclar codigo:

function saludar (){
    console.log('Hola Mundo');

};
//Esto no muestra nada en consola, por que esto solo es DEFINIR la funcion
//Para que funcione debemos ejecutarla llamandola
function saludar (){
    console.log('Hola Mundo');

};
saludar();


//null - Valor nulo
const miVariable = null;




//undefined - Valor sin definir
const miVariable2 = undefined;



