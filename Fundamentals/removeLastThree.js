// Write a function that takes a string (a) as argument. Remove the last 3 characters of a. Return the result

function removeLastThree(str) {
    return str.slice(0,-3);
}

console.log(removeLastThree("abhasj"));