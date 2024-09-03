let i = 3

while(i<6){
    if(i>5){
        console.log(5)//este if NO se cumple porque i nunca es mayor que 5
    } else{
        console.log(i-3)//Se cumple primero 3-3, y luego 4-3 y despues 5-3
    }
    i++;
}