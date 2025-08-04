function add ( num1,nun2){
    console.log(num1,num2);
    console.log(arguments);//work only inside functon
    console.log(arguments[3]);
}
add(12,13,45,89,78);