const today = new Date();
//string theke date ber kora
const date = new Date('2068-10-09') //yy-mm-dd
//get return index
console.log(date.getMonth() +1); 
console.log(date.getDay()); //return day of the week(koto tomo week)
console.log(date.getFullYear());
console.log(date.getDate());
//in specific we give index ,get value
const specificDate = new Date(2091, 0 , 26)
console.log(specificDate);//exect date
specificDate.setMonth(10);
console.log(specificDate);
console.log(specificDate.toDateString());
console.log(specificDate.toLocaleDateString());
console.log(specificDate.toLocaleString('en-GB'));
console.log(specificDate.toLocaleTimeString());
//convert date into second 1970 jan 1
//unix epoc
//UTC
//day light saving
//moment.js date convert format
