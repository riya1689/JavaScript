function countVowel(str){
    let cnt =0;
for(let letter of str.toLowerCase()){
    if(letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u'  ){
        cnt++;
    }
}
return cnt;
}
const solve = countVowel("hello JavaScript");
console.log("total vowel", solve);