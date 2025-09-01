const products =[
    {id : 1, name: 'lenevo', price : 87000},
    {id : 2, name: 'dell', price : 47000},
    {id : 3, name: 'hp', price : 67000},
    {id : 4, name: 'mac', price : 187000},

]
// map

const names = products.map(product => product.name)
console.log(names);
const prices = products.map(p=>p.price);

//forEach

products.forEach(p =>console.log(p.id));

//filter

const expensive = products.filter(p=>p.price>50000)
//console.log(expensive);

//find

const affordable = products.find(p=>p.price <50000);

console.log(affordable);

//reduce
const total =products.reduce((acum ,curr)=>acum +curr.price, 0);
console.log(total);