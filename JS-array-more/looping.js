/*
looping technique
1.for loop
2.while loop
3.do while --> ignore
4.for of --> array
5.for in --> object
*/
const richMan =['Elon', 'Bill', 'Mark','Waren'];
for(let friend of richMan){
    console.log(friend);
}
for(let i=0;i<6;i++){
    console.log(i);
    console.log(richMan[i]);
}
const num =[5, 23, 43, 54, 65];
for(let i=0; i< num.length;i++){
    console.log(num[i]);
}
let i=0;
while(i<richMan.length){
    console.log(richMan[i]);
    i++;
}