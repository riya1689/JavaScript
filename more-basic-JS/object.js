const student ={
    name:'Sakib Khan',
    id : 121,
    address: 'movie cinema',
    isSingle:true,
    friends:['Apu','Raaz','Salman','Amir'],
    movies:[{name: 'no. 1',year : 2015},{name:'king khan,year:2018'}],
    act : function(){
        console.log("acting like Sakib Khan");
    },
    car:{
        brand:'tesla',
        price: 50000000,
        made:2024,
        manufracture:{
            name:'tesla',
            ceo:'Elon Mask',
            country:'USA'

        }
    }
}
console.log(student);
console.log(student.friends);
console.log(student.car);
console.log(student.act);
nayok.act();
