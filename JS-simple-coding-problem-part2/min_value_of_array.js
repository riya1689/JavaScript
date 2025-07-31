const value =[65, 66,68, 72, 78, 60];
function getMax(element){
    //console.log(element);
    let min = value[0];
    for(const num of element){
        if(num < min){
            min = num;
        }
        console.log(num);
    }
    return min;
}
const min = getMax(value); //double check after error fix
console.log('min value is', min);