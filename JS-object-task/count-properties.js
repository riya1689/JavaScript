let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};       
const prop = Object.keys(student);
console.log(prop);
const key = prop.slice(0,prop.length+1).join(" ");
console.log(prop.join(" "));
console.log(key);
console.log(prop.length);
console.log(key.length);//?
console.log(Object.keys(student).length);