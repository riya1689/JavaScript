function loadPost(){
    console.log('loading posts data');
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPosts(data))
}

//kono element e element add korar step
/**
 * 1.get the container element where you want to add the new elements
 * 2.create child element
 * 3.set ineerText or innerHTML
 * 4.appendChind
 */
function displayPosts(posts){
    //console.log(posts);
    const postContainer =document.getElementById('posts-container');
    for(const post of posts){
        
        console.log(post)
        const postdiv = document.createElement('div');
        postdiv.classList.add('post')//here post is a class of style
        postdiv.innerHTML =`
            <h4>User-${post.userId}</h4>
            <h5>Post: ${post.title}</h5>
            <p>Post Description${post.body}</p>
        `;
        postContainer.appendChild(postdiv);
    }
}


loadPost();

