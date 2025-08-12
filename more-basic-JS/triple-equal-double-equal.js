// always use ===
// equal comparison doesnt work for non-primitive
const first =2;
const second ='2';
if(first == second){
    console.log('values are equal');
}
else{
    console.log('value are not equal');
}

const first1 =2;
const second2 ='2';
//checks value as well as typel
if(first === second){
    console.log('values are equal');
}
else{
    console.log('value are not equal');
}
//value ta k type casting kore convert kore se vibinno  step e check kore convert korbe  

//type casting
//type coercion
//type conversion
//javcascript type coercion example
//non primitive data type === check kore na. non primitive er khetre === check kore reference

const third =[];
const fourth = third;
if(third === fourth){
    console.log('values are equal')
}
else{
    console.log('values are not equal');
}