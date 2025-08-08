//map ==> loops through each element of the array and do the
// operation that you passed in the call back function and 
// hold the array and do the operation that you passed in the call back function and hold the result from each operration in array and finally returns you the array

const numbers=[4, 5,6,7,10];

function doubleIt(num){
    //console.log('num now', num)
    return num*2;
}
const double2 =(n) => n*2;
const result = numbers.map(doubleIt)

const output = numbers.map(double2)

const output2 = numbers.map(n => n*2);
//console.log(output)
// const doubled =[];
// for(const num of numbers){
//     const double = num*2;
//     doubled.push(double)
// }
// console.log(doubled)