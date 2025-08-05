//for of used in array or string.Not in object
//for iin used in object


const numbers =[1, 6, 7 ,3];
// for(let i=0;i<i<numbers.length;i++){

// }
//while
for(const num of numbers){ //for of (for array)
    //console.log(num);
}
const nobab ='Siraj Ud Doula';
for(const char of nobab){ //for of (for array)
    console.log(char);
}
//object ES5
const glass ={
    name:'glass', 
    color:'golden',
    price:12,
    isCleaned: true
};
for(const key in glass){ // for in (for object)
    const value = glass[key];
    //console.log(key, value);
}
//optional to get property with for of
const keys = Object.keys(glass);
console.log(keys) // get keys with array
for(const key of keys){
    const value = glass[key]; //property er naam hole dot . diye access , varible er moddhe thakle []
    console.log(key, value);
}

