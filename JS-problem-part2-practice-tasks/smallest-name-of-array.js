const names = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function smallestName(arr) {
    if (arr.length === 0) return null; // Handle empty array
    let smallest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length < smallest.length) {
            smallest = arr[i];
        }
    }
    return smallest;
}

const shortestName = smallestName(names);
console.log("The friend with the smallest name is:", shortestName);
