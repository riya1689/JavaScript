function multiply(num1,num2){
    //add validation
    if(typeof num1!== 'number' || typeof num2 != 'number'){
        return "Please provide a number."
    }
    const mult = num1*num2;
    return mult;
}
const result = multiply(5,'seven');
//console.log(result);
function fullName(first,second){
    if(typeof first!== 'string' || typeof second != 'stringr'){
        return "Name should be string."
    }
    const full =first +' '+second;
    return full;
}
const full =fullName('Rahan','Sohan')
//console.log(full);
function getPrice(product){
    if(typeof product!== "object"){
        return "Please provide an object"
    }
    const price = product.price;
    return price;
}
//function er vitore parameter -> argument hisebe object
const price = getPrice({name: "Icching stick", price :35,color: "blue"})
//const price = getPrice(5)
//console.log(price);
function getSecond(numbers){
    if(Array.isArray(numbers)===false){
        return "Please provide an array"
    }
    //console.log(Array.isArray(numbers))
    console.log(typeof numbers);
    const second = numbers[1];
    return second;
}
const second =getSecond([1,25,69])
console.log(second);