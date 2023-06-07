//Nos permiten trabajar con variables dentro de cadenas de texto
const nombre = 'Carlos';
const edad = 26;
const pais = 'Mexico';

console.log('La Persona es ' + nombre + 'tiene ' + edad + ' y es de ' + pais);
//esta es una manera de hacerlo pero hay una mas simple usando template Strings que son asi: ${} . Dentro de las llaves se pone las variables que quieres que aparescan
console.log(`La persona es ${nombre} tiene ${edad} y es de ${pais}`);
