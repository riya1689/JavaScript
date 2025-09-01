//function declaration
// function add(a,b){
//     const result = a+b;
//     return result;
// }
function add(a,b){
    //const result = a+b;
    return a+b;
}
const sum = add(5,90);
console.log(sum);
//function expression  annonymous function
const add2 = function(a,b){
    return a+b;
}
// arrow function
const add3 =(a,b) => a+b;
const sum3 = add3(5,100);
console.log(sum3);
const mult4 =(num1,num2,num3,num4) => num1*num2*num3*num4
const solve =mult4(1,2,3,1)

const greet = (who)=>{
    return `hello, ${who}!`;
}