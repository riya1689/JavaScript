//writing JS code to reverse the array colors without using reverse method
//set array
const colors = ['red', 'blue','green','yellow','orange']
const reverse_array=[]
//use unshift
for(let rev_color of colors){
    reverse_array.unshift(rev_color);
}
//console
console.log(reverse_array);