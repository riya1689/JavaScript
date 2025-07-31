function countRepeated(array, find){
    let newArray=[];
    const notFind =0;
    const max =Math.max(...array);
    let findValue = new Array(max+1).fill(1);
    for(let element of array){
        if(newArray.includes(element) === false){
            newArray.push(element);
        }
        else{
            findValue[element]++;
        }
    }
    if(newArray.includes(find)===true){
        const getValue = findValue[find];
    return getValue;
    }
    else{
        return notFind;
    }

}
const solve =countRepeated([5, 6, 11, 12, 98, 5], 34);
console.log(solve);