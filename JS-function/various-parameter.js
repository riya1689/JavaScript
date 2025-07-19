/**
 * for a given string tell me whether it has even number of character or not
 */
function evenSizedString(string){
    const size = string.length;
    if(size%2===0){
        console.log("Even size", string, size);
    }
    else{
        console.log("odd size",string,size);
    }
}
evenSizedString("Khana");
evenSizedString("Dana");
//object ,number , boolean,array, string as parameter

//array as parameter

function getAge(person){
    const len = person.length;
    console.log(person);
    return len;
}
//getAge([4, 78, 9, 43, 26]);
const allAge=getAge([4, 78, 9, 43, 26]);
console.log(allAge );

//object as parameter

function personInfo(persons){
    const age =persons.age;
    return age;
}
const personAge=personInfo({name:"Riya", age: 25})
console.log(personAge);
