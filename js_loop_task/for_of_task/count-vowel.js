const str =['a', 'b', 'c', 'e', 'f'];
let cnt=0;
for(let vowel of str){
    if(vowel === 'a' || vowel === 'e'|| vowel === 'i' || vowel === 'o' || vowel === 'u'){
        cnt++;
    }
}
console.log("vowel of this string: ",cnt);