const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function ask(question){
    return new Promise((resolve) => rl.question(question,resolve));
}

async function main(){
    const input = await ask("Which number of multiplication table you want: ");
    const num =Number(input);
    let i=0;
    console.log("Multiplication table of ",num);
    while(i<=10){
        console.log(num ,'*',i,'=',num*i);
        i++;

    }
    rl.close();
}
main();