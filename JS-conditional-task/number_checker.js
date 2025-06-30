const readline = require("readline");
const rl =readline.createInterface({
    input : process.stdin,
    output :process.stdout,
});
function ask(question){
    return new Promise((resolve) => rl.question(question,resolve));
}
async function main(){
    const input = await ask("Enter a number: ");
    const number = Number(input);
    console.log(number >0 ? "Positive" :
            number < 0 ? "Negative" : "0"
    );
    rl.close();
}
main();