const user ={id:1, name:'Riya',job:'Software Engineer'};
//JavaScript Object Notation(JSON) a text based format to store data and data exchange.Written with key-value pair,and data formate stringifiy
//Stringify -> Converts a JavaScript Value to a JavaScript Object Notation(JSON) string
const stringified =JSON.stringify(user);
// console.log(stringified);
// console.log(user);


const shop ={
    owner :'Alia',
    address:{
        street:'goldplace',
        city:'kuwajh',
        country:'Bangladesh'

    },
    products:['laptop','mic','monitor','keyboard'],
    revenue:45000,
    isOpen:true,
    isNew: false

};
console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
typeof shop;
typeof shopJSON;
const shopObj = JSON.parse(shopJSON);
console.log(shopObj);