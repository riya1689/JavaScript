const str ="hey you are a good person if you are good";
const sepStr = str.split(" ");
let capWord=[];
for(let i=0;i<sepStr.length;i++){
    let word= sepStr[i];
    let words =  word[0].toUpperCase()+word.slice(1);
    capWord.push(words);

}
const capitalWord = capWord.join(" ");
console.log(capitalWord);