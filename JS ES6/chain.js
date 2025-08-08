//data access
//data kisher moddhe ki style e ache
//array of object
const data =[{id: 1, name:'abul',address:'koko para'}];
console.log(data[0].address);

const product={
    count:5000,
    data:[
        {id:1,name:'lenovo laptop',price: 65000},
        {id: 2, name:'macbook',price: 165000},
    ]
}
console.log(product.data[0].price);
console.log(product.data[1].price);

const user ={
    id: 5001,
    name: 'sakib raj',
    address:{
        street:{
            first:'54/9 utto side',
            second:'poribag er goli',
            third: 'no doria'
        },
        city:'Dhaka'
    }
}

const user2 ={
    id:5002,
    name :'pori bibir majar',
    address:{
        city:'chittagong',
        country :'bangladesh'
    }
}
console.log(user.address.street.second);
console.log(user2.address.street?.second);//? define ,if second value present then proceed next otherwise not proceed