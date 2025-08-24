const loadComments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.error('error happend', error))

}

// await can be written only in async function
// const loadComments2 = async() =>{
//     const res =await fetch('https://jsonplaceholder.typicode.com/comments');//fetch() promises and go ahead,not wait
//     const data = await res.json();
//     console.log(data);
// }

const loadComments2 = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/comments');//fetch() promises and go ahead,not wait
        const data = await res.json();
        console.log(data);
    }
    catch(error){
        console.error('data load error');
    }
}

