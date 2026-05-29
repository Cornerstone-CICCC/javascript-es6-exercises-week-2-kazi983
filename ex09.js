/*
In this exercise, we will be converting a normal string into camelCase text.

Case Maker
We will receive a normal string of words separated with spaces as the input. Our job is to convert these strings into camel cased strings.

Instruction
Create a function named camelCase that will convert a string to camel case, and return the result.
*/

const camelCase = function (input) {
  let convertEnabled = false;
  return [...input].reduce((camelArray, letter) => {
    if (convertEnabled) {
      convertEnabled = false;
      return camelArray + letter.toUpperCase();
    } else if (letter === ' ') {
      convertEnabled = true;
      return camelArray;
    } else {
      return camelArray + letter;
    }
  }, '');
};

console.log(camelCase('this is a string')); // thisIsAString
console.log(camelCase('loopy cornerstone')); //loopyCornerstone
console.log(camelCase('supercalifragalisticexpialidocious')); // supercalifragalisticexpialidocious

module.exports = camelCase;
