// // count a or A
// const str ="A man named A.Aslam Amin was walking on the road ";
// const newStr = str.toUpperCase();
// let count =0,i=0;
// for(i=0;i<newStr.length;i++){
//     if(newStr[i] === 'A'){
//         count++;
//     }
// }
// console.log(count);
// 
const str = "A man named A.Aslam Amin was walking on the road ";
const count = (str.match(/a/gi) || []).length;
console.log(count);

const str2 = "A man named A.Aslam Amin was walking on the road ";
let count2 = 0;

for (let i = 0; i < str.length; i++) {
  if (str2[i].toUpperCase() === 'A') {
    count2++;
  }
}

console.log(count2);


