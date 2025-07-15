const str1 = "x axis y axis yellow";

const newStr = str1.replace(/[xy]/g, ch => {
    return ch === 'x' ? 'y' : 'x';
});

console.log(newStr);
