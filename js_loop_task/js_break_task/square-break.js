let num =2;
while(num<=100){
    let sqrt = Math.sqrt(num);
    if(Number.isInteger(Math.sqrt(num))){
        break;
    }
    num++;
}
console.log("First square number found", num);