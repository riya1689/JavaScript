const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output: process.stdout,
});

function ask(question){
    return new Promise((resolve)=> rl.question(question,resolve));

}

async function main() {
    const input = await ask("Enter your mark: ");
    const mark = Number(input);
    if(mark >= 80){
        console.log("A+");
    }
    else if(mark <=79 && mark >=70){
        console.log("A");
    }
    else if(mark <=69 && mark >=60){
        console.log("A-");
    }
    else if(mark <=59 && mark >=50){
        console.log("B");
    }
    else if(mark <=49 && mark >=40){
        console.log("B");
    }
    else if(mark <=39 && mark >=30){
        console.log("C");
    }
    else if(mark <=29 && mark >=20){
        console.log("D");
    }
    else console.log("Fail");
    rl.close();
}
main();