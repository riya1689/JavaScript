/**
 * Write a function called count_zero() which will take a binary string 
 * (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
 */
/**
 * declare function
 * argument binary array
 * if element is zero ,count
 * return 
 */
function count_zero(binaryStr){
    let cnt=0;
    for(let str0 of binaryStr){
        if(str0 % 2 === 0){
            cnt++;
        }
    }
    return cnt;

}
const binaryStr ="000110001111010";
const zero = count_zero(binaryStr);
console.log(zero);
