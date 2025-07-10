//displaying odd number from 55 to 85 and skip the numbers divisible by 8
let num = 55;
for(num=55;num<=85;num++){
    if(num % 8 === 0){
        continue;
    }
    console.log(num);
}