console.log('app.js');
function loadData2(){
      const url ='https://jsonplaceholder.typicode.com/todos/1';
        fetch(url)
      .then(Response =>Response.json())
      .then(data => console.log(data))

    }

// function loadUser(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data =>console.log(data))
// }
function loadUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data =>displayUsers(data))
}



function displayUsers(data){
    console.log(data);

}