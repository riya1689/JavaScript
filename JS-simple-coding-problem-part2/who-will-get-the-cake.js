function getMax(n1, n2){
    if(n1 > n2){
        return n1;
    }
    else{
        return n2;
    }
}
const max1 = getMax(96,79);
const max2 = getMax(56, 98);
const ultimateMax = getMax(max1 , max2);
console.log("max of two is:",ultimateMax);