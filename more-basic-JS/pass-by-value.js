/**
 * premitive type er khetre
 * parameter hisebe premitive type er data pass 
 * korle function er vetore data modify korleo outer varaible er value modify 
 * kore na
 * non - premitive type function er vetore + bahirer varaible er value modify kore
 * pass by reference
 */

let num1 =5;
let num2 =7;
function multiply(a, b){
    a = 27;
    const result = a*b;
    return result;
}
//console.log(a);
console.log(num1);
const output = multiply(num1,num2);
console.log(output);
//array object pass by reference
let student1 ={name :'jalil', partner: 'borsha'};
let student2 ={name :'raj', partner: 'anika'};

function makeMonie(couple1, couple2){
    couple1.name ='ononto';
    couple2.partner='mimm';
}
console.log(student1,student2);
makeMonie(student1, student2);