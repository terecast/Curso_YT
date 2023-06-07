/*Operadore Logicos
&& And
|| Or (Tecla abajo de Esc)
! Not

*/
const nombre = 'Tere';
const edad = 17;
const tieneEntrada = true;
const tienePermiso = true;

//Ejemplo 1 operador &&
const permitirAcceso = edad >= 18 && tieneEntrada;
console.log('Acceso permitido: ' + permitirAcceso);

//Ejemplo 2 Operador Or
const permitirAcceso1 = (edad >= 18 && tieneEntrada) || (tienePermiso && tieneEntrada);
console.log('Acceso permitido: ' + permitirAcceso1);

//Ejemplo 3 Operador - ! not

const variable = true;
console.log(!variable);
