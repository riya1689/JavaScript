/**
 * Take a number if the number is odd multiply it by 2 and return the result. 
 * If the number is even divide it by two and return the result.
 */
//declare function
//pass a number
//if the number is odd       multiply 2
//if the number is even divide by 2
function oddEvenMultiplyDivide(num1){
    if(num1%2 !== 0){
        const oddMultiply= num1*2;
        return oddMultiply;
    }
    else{
        const evenDivide = num1 /2;
        return evenDivide;
    }
}
const solve =oddEvenMultiplyDivide(89);
console.log(solve);