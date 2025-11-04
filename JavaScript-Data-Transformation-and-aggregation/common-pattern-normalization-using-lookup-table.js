// look up table helps in optimization time complexity
//look up table ekti object/ map / table hote pare.ekhane key - value pair akare data thake.without 
//any operation and with complexity O(1) it gives the output

//* Generate a lookup table

//? Input
const postsArray = [
  { id: "p-101", title: "Intro to SQL", author: "Alex" },
  { id: "p-102", title: "Data Structures in JS", author: "Beth" },
  { id: "p-103", title: "Understanding Reduce", author: "Chris" },
  { id: "p-104", title: "CSS Grid Tricks", author: "Alex" },
];

const lookupTable = postsArray.reduce((table, post) => {
    table[post.id] = post;
    return table;
}, {})
console.log(lookupTable);

//? Output
// {
//   "p-101": { "id": "p-101", "title": "Intro to SQL", "author": "Alex" },
//   "p-102": { "id": "p-102", "title": "Data Structures in JS", "author": "Beth" },
//   "p-103": { "id": "p-103", "title": "Understanding Reduce", "author": "Chris" },
//   "p-104": { "id": "p-104", "title": "CSS Grid Tricks", "author": "Alex" }
// }


//worst case
// const post = postsArray.find((post) => post.id === "p-103");
// console.log(post);

// const post = lookupTable["p-103"];
// for(let post in lookupTable){
//     console.log(post);
// }

const post = lookupTable["p-103"];
for(let post in lookupTable){
    console.log(lookupTable[post]);
}

//console.log(post);