//pass through one loop
//take two array odd and even
//which are odd;goes to odd array else in even array
//then print those array 
console.log("Even and odd Numbers from 61 to 100");
let oddArray =[] , evenArray = [] ;
for(num = 61;num<=100;num++){
    if(num%2 ===0){
        evenArray.push(num);
    }
    else{
        oddArray.push(num);
    }
}

console.log("Even number from 61 to 100")
for(let evenNum of evenArray){
    console.log(evenNum);
}
console.log("Odd number from 61 to 100")
    for(let oddNum of oddArray){
        console.log(oddNum);
    }