//when a internal function can access variable from outer function and 
// also can remember its variable after finished
// outer function then it is called closure.
//private variable that cant access from outside of class and
//function.

//Encapsulation --> data and method are packed inside that it cant directly access or changed from outside

function stopwatch(){
    let counter = 0;
    return function(){
        cnt++;
        return cnt;
    }
}

const firstServer = stopwatch();
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());

const watch1 = stopwatch();
console.log(watch1);
console.log(watch1);
console.log(watch1);
const watch2 = stopwatch();
console.log(watch2);
console.log(watch2);
console.log(watch2);
const watch3 = stopwatch();
console.log(watch2);