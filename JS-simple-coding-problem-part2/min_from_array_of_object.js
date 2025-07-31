const phones =[
    { name: 'Samsung',price: 20000, camera:'12mp',color:'black'},
    { name: 'xiaomi',price: 18000, camera:'12mp',color:'black'},
    { name: 'Oppo',price: 30000, camera:'12mp',color:'black'},
    { name: 'Iphonee',price: 200000, camera:'12mp',color:'black'},
    { name: 'Walton',price: 22000, camera:'12mp',color:'black'},
    { name: 'Symphony',price: 27000, camera:'12mp',color:'black'},
]
//alt+shft+down array
function getCheapestPhone(phones){
    let min = phones[0];
    for(const phone of phones){
        if(phone.price < min.price){
            min = phone;
        }
    }
    return min;
}
const cheap = getCheapestPhone(phones);
console.log(cheap);