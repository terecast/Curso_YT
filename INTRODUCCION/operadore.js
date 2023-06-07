/*Operadores Aritmeticos
= operador de asignacion, se usa para asignar valor a una variable
+ suma
- resta
* Multiplicacion
/ Division
% Modulo - Muestra lo que sobra de una division que no es exacta, 10/3 cabe 3 veces pero usando modulo te da lo que sobra que seria 1
++ Aunmento
-- Disminucion
*/

const resultado = 10 + 10;
const resultado2 = 10 - 8;
const resultado3 = 10 % 3;

console.log(resultado3);

let numero = 1;
numero = numero + 1;

console.log(numero);
//Pero lo mas facil seria usando operador ++

let numero1 = 3;
numero1++;

console.log(numero1);

/*Operadores de Asignacion
+= Suma un numero al valor de una variable
-= Resta un numero al valor de una variable
*= Multiplica un numero al de una variable

*/

let number = 10;
number = number + 5
console.log(number);

//pero podemos hacerlo tambiend e la siguiente manera

let number1 = 10;
//number1 += 5;
//number1 -= 2;
//number1 *= 3;
//number1 /= 2;
console.log(number1);


/*Operadores de comparacion
Permiten comparar valores

== Igual que
=== Igual en valor y tipo de valor
!= diferente
!== Diferente en valor y diferente en tipo
> Mayor que
< Menor que
>= Mayor o igual
<= Menor o igual
? Operador Ternario /Lo puedes leer en el codigo como "Por lo tanto"
*/

const result = 5 > 1;
const result1 = 20 >= 20;
const result2 = 10 == 10;
const result3 = 10 === '10';
const result5 = 5 > 6 ? 'El primer valor es mayor que el segundo': 'El segundo valor es mayor que el';

console.log(result1,result2,result3, result5);

