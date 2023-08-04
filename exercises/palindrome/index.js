// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


// Solution 1
// function palindrome(str) {
//     let newStr = "";
//     newStr = str.split('').reverse().join('');

//     if (str === newStr) {
//         return true;
//     } 
// }

//Solution 2 using array.prototype.every() method, we check each character in the array to see if it matches the character in the opposite position in the array.
// this method can be run till the middle of the string/array, and accordingly declared if the string is palindrome or not
// not ideal solution

// function palindrome(str) {
//     return str.split('').every((character, i) => {
//     return character === str[str.length - i - 1];
//  });

// }



module.exports = palindrome;
