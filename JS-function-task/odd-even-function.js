/**
 * Write a function called odd_even() which takes an integer value and tells whether this value is even or odd.
 *  If even return Even. If odd return Odd
 */
/**
 * declare function
 * argument integer
 * if integer is even,return even else return odd
 */
function odd_even(value){
    if(value % 2 === 0){
        return true;
    }
    else{
        return false;
    }

}
const checkOddEven = odd_even(389) ? console.log("Even") : console.log("Odd") ;
