const ar =['hello', 'world', 'javascript','react'];
const capitalArr =[];
for(let word of ar){
    let capitalized =word[0].toUpperCase() + word.slice(1);
    capitalArr.push(capitalized);
}
console.log(capitalArr);
