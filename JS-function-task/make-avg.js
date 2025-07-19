/**
 * Write a function called make_avg() which will take an array of integers and 
 * the size of that array and return the average of those values.
 */
/**
 * declare function
 * argument array,size of array
 * make average of array integer
 * return result
 */
function make_avg(array,arraySize){
    //console.log(arraySize);
    let sum =0;
    for(let integer of array){
        console.log(integer);
        sum+=integer;
    }
    const average = (sum / arraySize);
    return average;

}
const array=[90, 45, 87, 123,58];
const arraySize = array.length;
console.log(arraySize);
const avg = make_avg(array, arraySize);
console.log(avg);
