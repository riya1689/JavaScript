function loadUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json() //hit API -> json stringify format send -> convert
    .then(data => console.log(data))
    .catch(err => console.log(err))
)
}

async function loadUserAsync(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
}

function loadUserAsyncArrow(){
    const loadUserArrow =async () =>{
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      console.log(data);

    }
}


const loadUserCatch =async () =>{
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        console.log(data);
    }
    catch(error){

    }
}