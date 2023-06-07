//Dentro de un arreglo se pueden ingresar diferente tipos de valores e incluso objetos o mas arreglos
//Los arreglos siempre se ponen con corchetes o braquets

const arreglo =['Texto',456.23, true, {propiedad:'valor'}, [1, 2, 3,]];
console.log(arreglo);

const amigos = ['Cesar', 'Juan', 'Oscar'];
console.log(amigos[0]);

const colores = [];
colores[0] = 'Rojo';
colores[1] = 'Verde';
colores[3] = 'Azul';
console.log('El arreglo colores tiene: ' + colores.length + ' colores.');

colores.push('Morado');
console.log(colores);
//Push agrega un elemento al final del arreglo
