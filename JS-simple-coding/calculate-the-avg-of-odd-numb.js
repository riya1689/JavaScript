/**
 * declare function
 * argument array
 * if the value is odd then sum it
 * divide sum with total element
 */
function oddAvg(array){
    let sum =0,cnt=0;
    for(let odd of array){
        if(odd % 2 !==0){
            console.log(odd);
            sum+=odd;
            cnt++;
        }
    
    }
    console.log(cnt);
    const oddAverege = sum / cnt;
    return oddAverege;
}
const ar =[5, 8, 11, 14, 18, 20,46,19];
const result = oddAvg(ar);
console.log(result);
