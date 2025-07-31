const numbers = [167, 190, 120, 165, 137];

function findLowestNumber(arr) {
    if (arr.length === 0) return null; // Handling empty array
    let lowest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < lowest) {
            lowest = arr[i];
        }
    }
    return lowest;
}

const lowestNumber = findLowestNumber(numbers);
console.log("The lowest number is:", lowestNumber);
