const products = [
    //ctrl+alt+down array
    {name: 'shampoo', price: 300,quantity:2},
    {name: 'chiruni', price: 300,quantity:1},
    {name: 'oil', price: 300    ,quantity:2},
    {name: 'herbal', price: 300 ,quantity:2}

]
function getShoppingTotal(products){
    let total=0
    for(const product of products){
        // console.log(product);
        const thisProductCost = product.price * product.quantity;
        total = total +thisProductCost;
        
    }
    return total;
}
const total=getShoppingTotal(products);
console.log('total expense: ',total);