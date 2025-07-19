const number =45;
function turnoff(){
    console.log("Turn off the device");
    console.log("Device is off");
}
//calling function
turnoff();

// function with multiple parameter
//declare parameter; value giving in parameter is argument
function add(num1, num2, num3,num4){
    const sum = num1+num2+num3+num4;
    console.log(add);
}
add(54, 45, 67, 87);
add(32, 87, 99, 87,67); 

function difference (num1,num2){
    const diff = num1 -num2;
    console.log(num1,num2,"difference is",diff);
}
const fatherAge = 40;
const myAge = 10;
difference(fatherAge,myAge);