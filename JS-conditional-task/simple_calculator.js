const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output : process.stdout, 
});

function ask(question){
    return new Promise((resolve)=>rl.question(question,resolve));
}

async function main(){
    const num1 = Number(await ask("Enter first number: "));
    const num2 = Number(await ask("Enter second number: "));
    const operator =(await ask("Enter Operator: " ));
    if (operator === "+") {
    console.log(num1 + num2);
    } else if (operator === "-") {
    console.log(num1 - num2);
    } else if (operator === "*") {
    console.log(num1 * num2);
    } else if (operator === "/") {
    console.log(num1 / num2);
    } else {
    console.log("Invalid operator");
    }
    rl.close();
}
main();
