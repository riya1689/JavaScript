const readline = require ('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output:process.stdout,
});

function ask(question){
    return new Promise((resolve) => rl.question(question,resolve));
}

async function main(){
    const input= await ask("Enter a number: ");
    const number = Number(input);
    console.log(number % 2 == 0 ? "Even" : "Odd");
    rl.close();
}
main();

