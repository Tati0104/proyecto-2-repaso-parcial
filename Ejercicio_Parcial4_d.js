let x = 2
let y = 4

do{
    console.log(x+y)
    x++;
}while (x>y);// El resultado es 6
/*El ciclo do...while se ejecuta al menos una vez, porque la condición se evalúa al final del ciclo. 
En este caso, la condición x > y es falsa desde el principio, ya que x (2) no es mayor que y (4). 
Esto significa que el ciclo se ejecutará una vez y luego se detendrá.*/