let x = true
let y = 1

do{
    x =  y <= 3
    console.log(x)
    y++;
}while(x);//El resultado es true, true, true, false.
/*Ejecución paso a paso:

Primera iteración (y = 1):
x = (1 <= 3) → x = true
Se imprime true.
y se incrementa a 2.

Segunda iteración (y = 2):
x = (2 <= 3) → x = true
Se imprime true.
y se incrementa a 3.

Tercera iteración (y = 3):
x = (3 <= 3) → x = true
Se imprime true.
y se incrementa a 4.

Cuarta iteración (y = 4):
x = (4 <= 3) → x = false
Se imprime false.
y se incrementa a 5.
Ahora que x es false, el ciclo do...while termina.*/