//If a given string has either x, replace x by y. if the given string has X, replace it by Y.
const str1 = "x axis y axis yellow";
let newStr =" ";
//loop er maddhome index[]===x check kora,y check kora
//x replace with y, y replace with x
for(let i=0;i<str1.length;i++){
    if(str1[i] === 'x'){
        newStr += 'y';
    }
    else if(str1[i] === 'y'){
        newStr += 'x';
    }
    else{
        newStr += str1[i];
    }
}
console.log(newStr);