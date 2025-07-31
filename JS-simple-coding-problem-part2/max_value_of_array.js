const value =[65, 66,68, 72, 78, 60];
function getMax(element){
    //console.log(element);
    let max = value[0];
    for(const num of element){
        if(num > max){
            max = num;
        }
        console.log(num);
    }
    return max;
}
const max = getMax(value); //double check after error fix
console.log('max value is', max);