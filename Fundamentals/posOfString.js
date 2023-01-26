// Write a function that takes a string as argument. The string contains the substring 'is'. Return the index of 'is'.

function myFunction(a){

    // if(a.includes("is")){
    //     return a.indexOf("i");
    // }
    // return -1;
    return a.indexOf('is'); //we can use directly
}

console.log(myFunction("abainc")); //return -2
console.log(myFunction("abaisnc"));//return 3

