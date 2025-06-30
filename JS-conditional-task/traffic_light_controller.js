const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout, 

});

function ask(question){
    return new Promise((resolve) => rl.question(question,resolve));
}

async function main(){
    const color =String(await ask("Enter color of traffic light: "));
    const emergency =(await ask("Is it an emergency?(yes/no) "));

    if(color === "red"){
        if(emergeny === "yes"){
            console.log("You may go.");
        }
        else{
            console.log("Stop.");
        }
    }
    else if(color === "yellow"){
        if(emergency ==="yes"){
            console.log("Go carefully.");
        }
        else{
            console.log("Slow down.");
        }
    }
    else if(color === "green"){
        console.log("You may go");
    }else{
        console.log("Invalid color.")
    }
    rl.close();
    
}
main();