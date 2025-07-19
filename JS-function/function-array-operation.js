/**
 * write a function to give me the sum of all numbers in an array
 * step -1:  declare a functio
 * step -2: call check whether the function is called properly
 * step -3: set a parameter(s)
 * step -4: pass the parameter(s),check whether parameter is passed in a proper format
 * step -5: do the function tasks(step by step)
 */
function sumOfNumbers(numbers){
    console.log(numbers);
    let sum =0;
    for(let numbs of num){
        console.log(numbs);
        sum +=numbs;    
    }
    return sum;
}
const num=[54, 67, 12, 8, 19];
const sum=sumOfNumbers(num);
console.log("Sum of numbers is",sum);