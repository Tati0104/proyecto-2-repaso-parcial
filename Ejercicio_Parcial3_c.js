let x = 4
let y = 3

switch (x+2){
    case 2: console.log("hola")
    break;
    case 4 : console.log(x) 
    break;
    case 6: console.log(y+x)//x+2 nos da como resultado 6, 
                            //por esto se cumple este case y muestra por consola la suma de y+x
    break;
    case 8: console.log(x**2)
    break;
}// el resultado es 7