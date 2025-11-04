//*sorting
const numbers = [40, 100, 1, 5, 25, 10]; //while using sort it become string
const fruits =["Banana", "apple", "cherry", "date"];
fruits.sort((a, b) => a.localeCompare(b));
console.log(fruits); 

const sortedNumber = numbers.sort((a, b) => a - b); //in place sorting
console.log(sortedNumber) 
console.log(numbers); // also changed numbers  -> main number
//Ascending Order (small → large)
const numberSet = [40, 10, 5, 100, 1];

numberSet.sort((a, b) => a - b);

console.log(numberSet); // [1, 5, 10, 40, 100]

//Descending Order (large → small)
const numbersForDescending = [40, 10, 5, 100, 1];

numbersForDescending.sort((a, b) => b - a);
; //
console.log(numbersForDescending) [100, 40, 10, 5, 1]

//Ascending (A → Z)
const fruitsArray = ["Banana", "Apple", "Cherry"];

fruitsArray.sort();

console.log(fruitsArray); // ["Apple", "Banana", "Cherry"]

//Descending (Z → A)
const fruitsArray2 = ["Banana", "Apple", "Cherry"];

fruitsArray2.sort().reverse();

console.log(fruitsArray2); // ["Cherry", "Banana", "Apple"]
  //--------------flattening Array----------------//

//nested array, large data, chart, ploting --> flat
// const arr = [1, 2, 3, [4, 5, [6, 7, [8, 9, [10, 11]]]]];

// const flatArr = arr.flat(Infinity);

// console.log(flatArr);

const tagsFromPosts = [
  ["javascript", "react", "css"],
  ["node", "express"],
  ["css", "html", "react"],
];
//const filterTags = new Set(tagsFromPosts.flat());
const filterTags = [...new Set(tagsFromPosts.flat())];

console.log(filterTags);
