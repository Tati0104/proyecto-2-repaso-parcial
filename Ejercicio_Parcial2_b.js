let a = 3, b = 2, c = 3

if(a>b && b>c){
    a++
    console.log(a)
}else if (a===c){
    console.log((a>b)? b:c)
}else{
    console.log(c)
}