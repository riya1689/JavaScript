function multiple(num){
    const result = num * 8;
    return result;
}
const getmultiply = multiple(9);
console.log("get multiply",getmultiply);


function makeSquare(num1){
    const solution = num1 * num1;
    return makeSquare;
}
const square = makeSquare(8);
console.log("Your square value is: ",square);

//direct return
function add(value1, value2){
    return value1 + value2;
}

const sum = add(8, 9);
console.log(sum);