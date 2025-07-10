const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,

})

function ask(question){
    return new Promise((resolve)=> rl.question(question,resolve));
}
async function main(){
    const input1 = await ask("Enter First number: ");
    //take input from user first and last number.
    const number1 = Number(input1);
    const input2 = await ask("Enter Second number: ");
    //take input from user first and last number.
    const number2 = Number(input2);
    //printing number from first number to last number
    for(let num = number1 ; num <= number2 ; num++){
        console.log(num);
    }
    rl.close();

}
main();


