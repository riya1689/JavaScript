//* Grouping and Aggregating Data

// Scenario: Count every survey and group by response

//? input
const surveyResponses = [
  "A",
  "C",
  "B",
  "A",
  "B",
  "B",
  "C",
  "A",
  "B",
  "D",
  "A",
  "C",
  "B",
  "A",
];

//TODO initiate empty object
//TODO check if the response already exit or not
//TODO If it exists then increment the count
//TODO If not then initialize it with 1

const count = surveyResponses.reduce((table, response) =>{
    //* readable
    // console.log(table, ":" ,response);
    // if(table[response]){
    //     table[response] = table[response] + 1;
    // }else{
    //     table[response] =1;
    // }
    // return table;
    //*shortcut
    table[response] = (table[response] || 0) + 1; //table response jodi pay othoba jodi na paay uvoy khetre 1 jog hbe
}, {})
console.log(count);
//? Output
// { A: 5, C: 3, B: 5, D: 1 } 