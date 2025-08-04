const numbers =[45, 65, 23, 98, 19];
for(let i=0;i<numbers.length;i++){
    const number = numbers[i];
    console.log(number);
}
for(const number of numbers){
    console.log(number);
}
const products=[
    {id:1, name:'walton laptop',price:19000},
    {id:2, name:'lenovo phone',price:19000},
    {id:3, name:'xiaomi phone',price:19000},
    {id:4, name:'one plus phone',price:19000},
    {id:5, name:'samsung laptop',price:19000},
    {id:6, name:'symphony phone',price:19000},
    {id:7, name:'infnix phone',price:19000},
    {id:8, name:'heloi laptop',price:19000},
]
for(const product of products){
    console.log(product);
}
function matchedProducts(products, search){
    
    for(const product of products){
        console.log(product);
    }
}
const resul1t = matchedProducts(products,'phone');
console.log(result);

function matchedProducts(products, search){
    const matched =[];//ekadhik pete hole
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
        console.log(product);
    }
    return matched;
}
const result2 = matchedProducts(products,'phone');
console.log(result2);