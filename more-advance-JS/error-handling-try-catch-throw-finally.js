function checkAge(){
    //console.log('button click');
    const ageField =document.getElementById('age');
    const ageText = ageField.value;
    const errorTag = document.getElementById('error');
    try{
        //console.log(bbor);
        const age = parseInt(ageText);
        if(isNaN(age)){
            //console.log('age not found',age, ageText)
            throw "Please enter a number";
        }
        else if(age <18){
            throw "babies not allowed";
        }
        errorTag.innerHTML ='';
    }
    //throw --> define custom error.we can throw an expection(sstring, number,boolean,Object)
    catch(error){
        console.log('Error:',error)
        errorTag.innerHTML = 'Something wrong' //to show in UI
        errorTag.innerHTML = 'ERROR:' + error;
    }   
    //finally last must execute
    finally{
        console.log('All done try catch ');
    }
    console.log(404);
}