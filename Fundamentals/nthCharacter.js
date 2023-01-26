// Write a function that takes a string (a) and a number (n) as argument. Return the nth character of 'a'.

function myFunction(a, n){
    if(n > a.length) return "Inavlid input";

    return a.charAt(n-1);
}

console.log(myFunction("azhbc", 2));