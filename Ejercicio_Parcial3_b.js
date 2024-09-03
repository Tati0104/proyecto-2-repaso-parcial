let x = 2
let y = 3

switch (x){
    case 2: console.log("hola")//Solo se esta cumpliendo esta condicion
    break;
    case "3" : console.log(x+3)//Cambiar la cadena "3" a un número 3, si se pone en comillas " "se vuelve cadena 
    break;
    case "dos": console.log(y+x)//No va a realizar la comparacion porque esta comparando una cadena "dos" contra el numero de X
    break;
    case y-1: console.log(x**2)/*Se observa que los casos 2 y y - 1 en el switch son equivalentes 
    (ambos son 2 en este caso). Esto podría causar que solo el primer case coincida y ejecute el console.log("hola").
     ignorando el otro caso.*/
    break;
}//El resultado es "Hola"