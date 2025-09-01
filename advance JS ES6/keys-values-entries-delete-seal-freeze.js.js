const glass ={name:'glass', color:'golden',price:12,isCleaned: true};
console.log(glass);
//return all property name
const keys =Object.keys(glass);
console.log(keys);

//values 
const values =Object.values(glass);
console.log(values);
//array of array  ,, two dimensional array

const pair =Object.entries(glass);
console.log(glass);
//remove property from object
delete glass.isCleaned;
console.log(glass);
//complex delete
const { isCleaned,...newGlass} =glass;
console.log(newGlass);

//freeze
//Object.freeze(glass);//kono kichu add korte dibe na,remove ,update korte dibe na
Object.seal(glass);//read, updates
glass.source ="Bangladesh";
glass.price =5600;
delete glass.name;
console.log(glass)


