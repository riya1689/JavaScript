function greeting(person){
    console.log(person);
}

//greeting('Halima apu');

// const name ='Halima apu';

// const number =45;
// const numbers =[45,54,78];

//const laptop ={price:34000, brand:'lenovo',memory:'8gb'}

// function greeting(greetingHandler){
//     console.log(greetingHandler());
// }

/*main function er parameter hisebe jokhn onno ekti function k neoa hoy ebong main function er kaj sesh 
houar por 2nd function (parameter hisebe jeti neoa hoyeche) seti call kore execute hoy
tokhn 2nd ti ke callback function bole.*/
function greetingHandler(){
    console.log('Good Morning');
}
greeting(greetingHandler);

function orderFood(foodName, callback) {
  console.log(`Ordering ${foodName}...`);
  // খাবার তৈরি শেষ হলে callback ডাকা হবে
  callback();
}

function serveFood() {
  console.log("Food is served!");
}

orderFood("Burger", serveFood);

/**
 * serveFood হলো callback function

orderFood হলো main function

Main function কাজ শেষ করে পরে callback execute করছে
 */