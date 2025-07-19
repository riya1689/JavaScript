/**
 * objective to return array from fuction
 * function decclare
 * array pass through function
 * check whether the function receive and return the array or not
 * declare another empty array
 * for loop get each element and check it even or not
 * if even then push it empty array and print   
 */
function evenNumbArray(numbers){
    console.log(numbers);
    let evenNum =[];
    for(let numb of numbers){
        if(numb % 2 === 0){
            evenNum.push(numb);
        }
    }
    return evenNumbArray;

}
const numbers =[98, 67, 43, 32, 56, 54,8, 9];
const getEven = evenNumbArray(numbers);
console.log(getEven)