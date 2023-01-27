// Write a function that takes two strings (a and b) as arguments. Return the number of times a occurs in b.

function charOccurrences(a, b) {
    // let count=0;
    // for(let i =0 ; i <b.length ; i++){
    //     if(b.charAt(i)===a){
    //         count++;
    //     }
    // }
    // return count;
    return b.split(a).length - 1
}

console.log(charOccurrences('m', 'how many times does the character occur in this sentence?'));