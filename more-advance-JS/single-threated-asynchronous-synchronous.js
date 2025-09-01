//------ single threaded ------runs sequentially//
console.log(1);
console.log(2);
//doSomething();
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

setTimeout(doSomething, 4000) //4s
setTimeout(() =>{
    console.log('lazy log')
},5000)
console.log(4);
console.log(5);
console.log(6);
console.log(7);
function doSomething(){
    console.log(3);
}
//fetch only work in browser