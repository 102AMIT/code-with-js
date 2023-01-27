// Write a function that takes a string (a) as argument. Extract the first half a. Return the result

function firstHalf(str) {
    return str.substring(0, str.length/2) ; //a.slice(0, a.length / 2);
}

console.log(firstHalf("abchdgd"));
console.log(firstHalf("abchdgde"));