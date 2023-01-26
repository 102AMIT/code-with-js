// Write a function that takes two values, say a and b, as arguments. Return true if the two values are equal and of the same type
// (number, string, boolean, array, object, null).

function myFunction(a, b)
{
    return a===b ? true : false ;
}

console.log(myFunction(1,2));
console.log(myFunction(1,"2"));
console.log(myFunction(1,"1"));
console.log(myFunction(1,1));