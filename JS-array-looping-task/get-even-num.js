//writing JS code to get even number from an array using any looping technique
//set array
const numbers =[12 , 98, 5, 41 , 23, 78, 46]
const evenNumArray=[]
for(let i=0;i<numbers.length;i++){
    if(numbers[i]%2===0){
        evenNumArray.push(numbers[i]);
    }
}

//pass through a loop 
// get even number
console.log(evenNumArray);
