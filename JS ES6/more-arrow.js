const difference =(x,y) =>x-y;
const multiply =(first, second, third) => first * second* third;
//single parameter
const getAge =(person) => person.age;
const student ={name: 'ananta', age: 45}
const age =getAge(student);
console.log(age);


const getThird = (numbers) => numbers[2];
const third = getThird([5,9,88,2,18])
console.log(third)
const doubleIt = num => num*2;

//no parameter
const getPI =() => Math.PI //implicity return
console.log(getPI())

//large arrow function
const doMath =(x,y,z) =>{
    const sum = x+y+z;
    const mult = x*y*z;
    const result = sum + mult
    return result // explicity return
}
/**
 * diff arrow function vs regular function
 * 1. this
 * 2. argument
 * 3.constructor
 * 4.Implicity return
 * 5.duplicate name parameter
 * 6.hosting
 * 
 */

