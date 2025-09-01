console.log(1);
console.log(2);
// setTimeout(() =>{
//     console.log(3);
// }, 4000)
console.log(4);
console.log(5);
console.log(6);

setInterval(() =>{
    console.log('i eat udon') //repeat continuously after 2s
}, 2000)

let num =0;
setInterval(() =>{
    num++;
    console.log(num)
}, 2000)

let num2 =0;
const intervalId = setInterval(() =>{
    num++;
    if(num >6){
        clearInterval(intervalId);
    }
    console.log(intervalId, num)
}, 2000)

//clearInterval(intervalId) //it will stop the loop

