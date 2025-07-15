let myObject={
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
}
for(let keyValue in myObject ){
    console.log("key: ",keyValue, "| type: ",typeof myObject[keyValue]);
}
const keys = Object.keys(myObject);
console.log(keys);
for(let key of keys){
    console.log("key: ",key,"| values: ",myObject[key]," | type: ",typeof myObject[key]);
}

