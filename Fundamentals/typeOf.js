// Write a function that takes a value as argument. Return the type of the value.


function myFunction(a)
{
    return typeof(a); 
}

console.log(myFunction("amit"));
console.log(myFunction({}));
console.log(myFunction(""));
console.log(myFunction(null));
console.log(myFunction(1));

