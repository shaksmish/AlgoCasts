// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Solution 1
// function reverse(str) {
//     const arr = str.split('');
//     arr.reverse();
//     return arr.join('');

//     }

// Solution 2
// function reverse(str) {
//     let newStr = "";
//     for (let i = str.length - 1; i >= 0;i--) {
//         newStr += str[i];        
//     }
//     return newStr;
// }

// Solution 3
// function reverse(str) {
//     return str.split('').reverse().join('');
// }

// Solution 4
function reverse(str) {
    let newStr ="";

    for (let character of str) {
        newStr = character + newStr;
    }

    return newStr;
}

module.exports = reverse;
