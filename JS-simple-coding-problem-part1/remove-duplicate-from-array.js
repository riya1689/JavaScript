const festivalFood=['sini', 'tini', 'rini', 'sini', 'rini','taya','megha','taya'];
const numbers =[1,4, 8, 1, 3,8,9, 5,4];
function removeDuplicate(array){
    const unique =[];
    for(const item of array){
            if(unique.includes(item) === false){
                unique.push(item);
            }
        }
        return unique;
}
const uniqueArray = removeDuplicate(numbers);
console.log(uniqueArray);
