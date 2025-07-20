function longestWord(str){
    const subStr = str.split(" ");
    let maxSubStr = "";
    let maxLength=0;
    for(let word of subStr){
        if(word.length > maxLength){
            maxLength = word.length;
            maxSubStr = word;
        }
    }
    return maxSubStr;
}
const sentence ="I am learning Programming to become a programmer";
const result = longestWord(sentence);
console.log(result);