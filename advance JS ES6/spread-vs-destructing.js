//spread operator operation 
// 1.copy
let fruits =[ 'lemon', 'watermelo'];
let fruitsCopy=[...fruits];
console.log(fruitsCopy);

//2.Merge
let vegtable=['coconut'];
let fruitsAndVeg =[...fruits,...vegtable];
console.log(fruitsAndVeg);

//3. passing as Argument
let num =[1, 2, 3, 4, 5];
const mx = Math.max(...num);
const mn = Math.min(...num);

//destructuring
//take out particular element from array ,object


