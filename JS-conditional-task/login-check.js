const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output: process.stdout,
});

function ask(question){
    return new Promise((resolve) => rl.question(question,resolve));
}

async function main(){
    // const input = await ask("Usename: ");
    // const username = String(input);
    // const input2 = await ask("Password: ");
    // const password = String(input2);
    const username = String(await ask("Username: "));
    const password = String(await ask("Password: "));
    const correctUsername ="Riya";
    const correctedPassword ="123";
    if(username === correctUsername && password === correctedPassword){
        console.log("Login successful");
    }
    else{
        console.log("Invalid credentials");
    }
    rl.close();
}

main();