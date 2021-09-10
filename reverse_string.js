// const greetings= 'Hello world, How are you?';

// function reverseString(text){
// let reverse = '';

//     for(const letter of text){
//         reverse = letter + reverse;
//     }
//     return reverse;
// }

// const reverseed = reverseString(greetings);
// console.log(reverseed);












// Reverse a strings 

const greetings = 'Hello world! How are you?';

function reverseStrings(text){
    let reverse = '';
    for(const letter of text){
        reverse = letter + reverse;
    }
    return reverse;
}

const reversed = reverseStrings(greetings);
console.log(reversed);