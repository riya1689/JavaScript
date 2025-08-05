const actor ={
    name :'Ananta',
    age: 30,
    phone: '01819875632',
    money:1243452312
}
// const phone = actor.phone;
// const name = actor.name;
// const age =actor.age;
//Destructuring : kono ekta object ba kono ekti array theke khub sohoje ekti element niye asa.
//if right side is an object ,left side of destructuring will be object as well.
//object
//use property name as a variable that contains the property value
//const{phone} = actor;
//const {phone,age} =actor;
//elipse.variable changing name set
const {phone, age:boyos} =actor;
console.log(phone);
console.log(boyos);
//console.log(age);
//array destructuring
const numbers =[45, 99];
const [first, second] = numbers;
const [x, y] = [12, 66];
//advance
//array returning

function doubleThem(a, b){
    return [a*2, b*2];
}

const [prothom,ditio] = doubleThem(6, 9);//jodi array return kore tahole array type container e rakhte hbe.
console.log(prothom,ditio);

const [color1, color2] =["red", "pink","blue","black"];
console.log(color1,color2);
//skipping item

let[num1,,num3]=[1,2,3];
console.log(num1);
console.log(num3);

//assign numbers with default value
let [num11=0,num12=0,num13=7]=[1,2];
console.log(num11);
console.log(num12);
console.log(num13);

//swapping values
let digit1=1,digit2 =2;
[num1,num2] = [num2, num1];//swap
console.log(num1);
console.log(num2);