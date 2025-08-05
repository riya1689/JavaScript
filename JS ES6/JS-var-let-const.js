//var : no reason to use var
//let : allow it to re assign
//const : do not allow it to reassign
const money =25;
money = 50;

let count =8;
count = count + 10;
console.log(count);

const numbers =[23,4, 25, 26];
//numbers =[4,5,6,8];
numbers[1]= 55;
numbers.push(4,6,98);
console.log(numbers);
//object
const student ={
    name: 'moyna pakhi',
    class: 12
}
//student = {name :'kokil konthi }
student.name = 'moyur konthi';
student ={ name:'kokil konthi'}
console.log(student);
//loop
let sum =0;
for(let i=0;i<10;i++){
    const num  =i;
    //sum = sum + num;
    sum = sum+i;
}
console.log(sum);