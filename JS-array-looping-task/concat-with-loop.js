//concatenate all the elements of an array into a single
//set array
const numbers =['Tom', 'Tim', 'Tin', 'Tik'];
//use for loop 
let concatStr="" , concatStr2="";
for(let i=0;i<numbers.length;i++){
    concatStr += numbers[i];
    concatStr2 = concatStr2.concat(numbers[i]);//using concat() method
    //concatStr = numbers.join(" "); --> to create gap
}
console.log(concatStr);
console.log(concatStr2);
//ekta ekta kore input asbe protitai concatenate korbo
