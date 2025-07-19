function doubleodTriple(number, doDouble){
    if(doDouble === true){
        const result = number*2;
        return result;
    }
    else{
        const result = number * 3;
        return result;
    }
}
console.log(doubleodTriple(5, true));
console.log(doubleodTriple(6, false));
