//for each map er moto kaj kore kintu map er moto returrn kore na
//filter select elements based on a condition
//and returns an array with the elements that fullfilled the condition
//filter always return array.if no match then it return 
//empty array
const numbers =[1, 5, 6, 4, 18];
const players =[75, 65,67.72,55,59];

//const selected = players.filter(p => p>70);
//const selected = players.filter(p=>p>80)
const selected = players.filter(p=> p%2===0)

//console.log(selected);
console.log(selected);

const friends =['Tom', 'Kom', 'Gom', 'Khom', ' Jhom'];

const oddFriends = friends.filter(friend => friend.length>4);
console.log(oddFriends);