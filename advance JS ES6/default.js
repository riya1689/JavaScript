//deafult --> if value is not provided,take this as a default.
function num(val1=99,val2=0){ //default value given
    const sol = val1 + val2;
    console.log(val1,val2,sol);
    return sol;
}
//const addition =num(5,7);

function add(num1,num2){//parameters
    const result = num1 + num2;
    console.log(num1,num2,result);
    return result;
}
//const sum = add(5,7); // argument
const sum = add();
//undefine -> which we not provide,still not given
//NaN = not a number.
//const sum = add(5);
//function call korar somoy argument e value na dile default value asbey.
function friends(numbs =[]){// default empty array

}