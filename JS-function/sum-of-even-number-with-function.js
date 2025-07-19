/**
 * objective sum of even numbers with function array
 * step 1 declare function
 * step 2 pass array
 * step 3 check whether element passing or not
 * step 4 use loop to get each element and sum
 */
function sumOfEvenNumber(numbers){
    console.log(numbers);
    let sum =0;
    for(let numbs of numbers){
        console.log(numbs);
        if(numbs % 2 === 0){
            sum += numbs;
        }
    }
    return sum;

}
const numbers  =[56, 87, 98, 81, 103];
const sum = sumOfEvenNumber(numbers);
console.log(sum);