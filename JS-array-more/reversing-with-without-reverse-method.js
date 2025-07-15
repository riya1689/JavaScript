//with reverse method
const numbers = [1, 2, 3, 4, 5, 6, 7];
//console.log(numbers);
//const revNumbers = numbers.reverse();
//console.log(revNumbers);
//reverse() method also reverse main array

//without reverse(), with unshift.unshift add new element before the value.

const revrsNum=[];
for(const num of numbers){
    revrsNum.unshift(num);
}
console.log(revrsNum);
//using for loop
const reverse_num=[];
for(let i=0;i<numbers.length;i++){
    reverse_num.unshift(numbers[i]);
}
console.log(reverse_num);
//decremental array
const rev_arr =[];
for(let i=numbers.length-1;i>=0;i--){
    rev_arr.push(numbers[i]);
}
console.log(rev_arr);
for(let i=0;i<rev_arr.length;i++){
    console.log(rev_arr[i]);
}
