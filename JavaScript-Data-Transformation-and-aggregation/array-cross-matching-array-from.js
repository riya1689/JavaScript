// Some -> if any of or at least one element is matched with another array => return true else false

// const numbers = [1, 5, 3, 7, 5];
// const hasEvenNumber = numbers.some((number) => number % 2 === 0);
// console.log(hasEvenNumber);

// const currentUserRoles = ["user", "editor", "admin"];

// const featureAccessRoles = ["admin", "manager"];

// const canAccess = currentUserRoles.some((role) =>
//   featureAccessRoles.includes(role)
// );

// console.log(canAccess);

// Array.from()

// const arr = array.from({ }, ( _, i) => i); jehutu length theke array banacchi tai value tahkbe na, index (i) thakbe
//const arr = array.from({length: 5}).fill(0);

// const arr = Array.from([1, 2, 3], (value, i) => value * value); 

// console.log(arr);

//start kind of offset

const range = (start, stop, step) =>
  Array.from(
    { length: Math.ceil((stop - start) / step) },
    (_, i) => start + i * step
  );

console.log(range(0, 11, 2));