//Check whether a string contains all the vowels a, e, i, o, u
const str ="azgar ali";
const str2 ="a girl was eating oreuo";
const newStr = str.toLowerCase();
const newStr2 = str2.toLowerCase();
let flagA = 0,flagE=0,flagI=0,flagO=0,flagU=0,count=0;
for(let i=0;i<newStr2.length;i++)
{
    if(newStr2[i] === 'a'){
        flagA=1;
    }
    else if(newStr2[i]==='e'){
        flagE =1;
    }else if(newStr2[i]==='i'){
        flagI =1;
    }else if(newStr2[i]==='o'){
        flagO =1;
    }else if(newStr2[i]==='u'){
        flagU=1;
    }
}
if(flagA && flagE && flagI && flagO && flagU){
    console.log("your string contain all the vowel");
}
else{
    console.log("doesn't contain all string");
}