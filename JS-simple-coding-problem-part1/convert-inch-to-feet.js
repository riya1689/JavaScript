//12 inch 1 feet
function inchTofeet(inch){
    const feet = inch/12;
    return feet;
}
const personHeight = inchTofeet(75);

function inchTofeet2(inch){
const feetFraction = inch/12;
const feetNumber = parseInt(feetFraction);  //float convert into integer
const inchRemaining = inch % 12;
const result = feetNumber+" ft " + inchRemaining+" inch ";
return result;
}
const personHeightPro = inchTofeet2(75);
console.log(personHeightPro);