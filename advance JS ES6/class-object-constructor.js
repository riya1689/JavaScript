const products =[
    {id : 1, name: 'lenevo', price : 87000},
    {id : 2, name: 'dell', price : 47000},
    {id : 3, name: 'hp', price : 67000},
    {id : 4, name: 'mac', price : 187000},

]

//similar
//class is a template for making Objects(blue print)
//has some properties ,method

class Product{
    country ='Banglaseh';
    constructor(name){
        this.name =name
    }
    speak(talk){
        console.log(`talking about ${talk}`)
    }
}
const lenovo = new Product('lenovo laptop')
// console.log(lenovo);
// lenovo.speak('hi,whats up');

class Teacher{
    constructor(name,subject){
        this.name =name;
        this.subject =subject;
    }
    lecture(){
        console.log('Sir is teaching Math')
    }
}
//must use new keyword.its called constructor  function
const tapan  = new Teacher ('Tapan sir',physics);
console.log(tapan);

const rashid = new Teacher('Rashid','English');