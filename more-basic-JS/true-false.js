/**
 * truthy
 * 1.true
 * 2.any number (positive and negative except zero)
 * 3.any string other than with only space string
 * 4.'0', 'false'
 * 5.empty object.{}
 * 6.empty array is truthy []
 * falsy
 * 1.false
 * 2.0
 * 3.'' (empty string)
 * 4.undefine is a falsy value
 * 5.null
 * 
 */
let x =null;
console.log(x);
if(x){
    console.log('value of x is truhty');
}
else{
    console.log('value of x is falsy');
}
//optional
//checking falsy value is false or not with (!x)
const y ='';
if(!y){
    console.log('value is falsy')
}
if(!!x){
    console.log('value is truthy')
}