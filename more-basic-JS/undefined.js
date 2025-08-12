/**
 * 8 ways to get undefine is not initialized will give undefined
 * 
 * 1.variable that is not initialized will give undefined.
 * 2.function with no return
 * 3.parameter that is not pass is undefine
 * 4.if return has nothing on right side return undefine.
 * 5.property that doesn't exists on an object wil give you undefine
 * 6.accessing array elements outside of the index range
 * 7.deleting an element inside an array
 * 8.set a value directly to undefined
 */
let first;
//console.log(first);
function third(a,b,c){
    const total = a+b+c;;
}
third(2,5);
//console.log(result);
function noNegative(a,b){
    if(a<0|| b<0){
        return
    }
    return a+b;
}
const total = noNegative(2,5);
//console.log(total);

const fifth ={id:2,name:'ponchom',age:40};

//console.log(fifth.name , fifth.salary);

const sixth =[4, 8, 9, 50 ,598];
//should not do it.Instead use splice
delete sixth[1];
//console.log(sixth[5], sixth[200]);
//console.log(sixth);

const eight = undefined;

const ninth = null;

const data ={results :[], updated:null}
//console.log(typeof undefined);
//kono ekti value nei.kintu seti explicitly set korte chaile null use
console.log(typeof ninth);
//non primitive data type === check kore na. non primitive er khetre === check kore reference

const third =[];
const fourth = third;
if(third === fourth){
    console.log('values are equal')
}
else{
    console.log('values are not equal');
}
