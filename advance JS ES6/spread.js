const max =Math.max(98, 56,34,23,56,2);
const numbers =[3, 4,5,6,90,12,34,12];
const arrayMax = Math.max(numbers);
const arrayMax1 = Math.max(...numbers);//spread operator
console.log(numbers);
console.log(...numbers);
console.log(max);

//use spread operator to copy
const nums =[3, 4, 6,23];
const nums2 = nums;
nums2.push(12);
console.log(nums2);
console.log(nums);//they hold references

// not holding reference

const dst =[nums];
console.log(dst);
const dst2 =[...nums];
console.log(dst2);

const digits =[2, 7, 43, 12, 6];
const songkha = digits;
const gonona =[...digits]//copy
console.log(gonona)

//advance
const songkha1 = [ ...digits, 567] //add extra elements while copy
console.log(songkha1)
// ...rest parameter