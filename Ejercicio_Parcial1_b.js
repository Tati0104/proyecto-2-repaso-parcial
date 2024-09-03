let x = true, y = false, z = true; // declaro variables X,Y y Z como falsas o verdaderas.

z = false; //Cambio el valor de Z que era true por false
 
let res = ((z || x) && (y || z));// usamos operadores logicos como || que es una OR y && que es una AND
// || (OR): Esta operación devuelve true si al menos uno de los valores es true.
// && (AND): Esta operación devuelve true solo si ambos valores son true.

let res2 = (res) ? "Hola" : "humbouldt";    //Operador Ternario: Es una forma abreviada de hacer un if-else en una sola línea.
//Sintaxis: (condición) ? valor_si_verdadero : valor_si_falso
//Si res es true, entonces res2 será "Hola".
//Si res es false, entonces res2 será "humbouldt".
//Dado que res es false, res2 se establece en "humbouldt".

console.log(z||x);