function add ( num1,nun2){
    console.log(num1,num2);
    console.log(arguments);//work only inside functon
    console.log(arguments[3]);
}
add(12,13,45,89,78);


function sum(a, b,c){//parameter
    const args =[...arguments];
    //console.log(args);
    //console.log(arguments);
    const result = a+b+c;
    return result;
}

const total = sum(45,89,12);//arguments --> ans return array like object
//console.log(total);
console.log(sum.length);