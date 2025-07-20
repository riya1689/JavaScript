function oddAverege(numbers){
    const odd =[];
    for(const number of numbers){
        if(number % 2 !== 0){
            odd.push(number);
        }
    }
    let sum =0;
    for(let newOdd of odd){
        sum+= newOdd;
    }
    //console.log(odd);

    //console.log(odd.length);
    const result = sum / odd.length ;
    return result;
}
const solve = oddAverege([34, 56,7, 2 , 71, 35,721]);
console.log(solve);