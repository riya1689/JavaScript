const persons =['rakib', 'nokib','sakib', 'akib','dakib'];
const sortedPersons = persons.sort();
console.log(sortedPersons);
//sort -->
/**
 * ascending --> smaller to larger
 * Descending -->larger to smaller
 */
const numbers=[5, 7, 28 ,2, 4, 1, 6];
//const num_asc =numbers.sort();//not working properly .cause sort() take each element as string.compare eith first letter
// const num_asc = numbers.sort(function(a, b){return a-b})
// const num_dsc = numbers.sort(function(a, b){return b-a})
const num_asc = [...numbers].sort(function(a, b){return a-b})
const num_dsc = [...numbers].sort(function(a, b){return b-a})
console.log(num_asc);
coniisole.log(num_dsc);