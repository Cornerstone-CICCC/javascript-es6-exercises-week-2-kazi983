const camelCase = require('./ex09');

/*Caze Maker II
We will still be given an input string to convert. However, this time, we'll also be given a casing style to work with. The following code block will describe all the casing styles to support. We may also receive an array of casing styles, and each of these should be applied.

Instruction
Create a function named makeCaze that will receive an input string and one or more casing options. Return a new string that is formatted based on casing options:

Precedence of each of the casing styles are as follows, values higher in the list should be processed first:

camel, pascal, snake, kebab, title
vowel, consonant
upper, lower
Our function should be able to handle all of these cases.

For more information on casing styles, read Wikipedia's Special Case Styles for a list of various casing examples.

*/

const vowels = ['a', 'e', 'i', 'o', 'u'];

const toCamelCase = camelCase;

const toPascalCase = (input) => {
  const camel = camelCase(input);
  return camel[0].toUpperCase() + camel.slice(1);
};

const toSnakeCase = (input) => input.split(' ').join('_');

const toKebabCase = (input) => input.split(' ').join('-');

const toTitleCase = (input) =>
  input
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ');

const toVowelCase = (input) =>
  [...input]
    .map((letter) => (vowels.includes(letter) ? letter.toUpperCase() : letter))
    .join('');

const toConsonantCase = (input) =>
  [...input]
    .map((letter) => (vowels.includes(letter) ? letter : letter.toUpperCase()))
    .join('');

const makeCaze = function (input, caze) {
  let cazes = Array.isArray(caze) ? caze : [caze];

  cazes.forEach((caze) => {
    switch (caze) {
      case 'camel':
        input = toCamelCase(input);
        break;
      case 'pascal':
        input = toPascalCase(input);
        break;
      case 'snake':
        input = toSnakeCase(input);
        break;
      case 'kebab':
        input = toKebabCase(input);
        break;
      case 'title':
        input = toTitleCase(input);
        break;
      case 'vowel':
        input = toVowelCase(input);
        break;
      case 'consonant':
        input = toConsonantCase(input);
        break;
      case 'upper':
        input = input.toUpperCase();
        break;
      case 'lower':
        input = input.toLowerCase();
        break;
      default:
    }
  });
  return input;
};

console.log(makeCaze('this is a string', 'camel')); // thisIsAString
console.log(makeCaze('this is a string', 'pascal')); // ThisIsAString
console.log(makeCaze('this is a string', 'snake')); // this_is_a_string
console.log(makeCaze('this is a string', 'kebab')); // this-is-a-string
console.log(makeCaze('this is a string', 'title')); // This Is A String
console.log(makeCaze('this is a string', 'vowel')); // thIs Is A strIng
console.log(makeCaze('this is a string', 'consonant')); // THiS iS a STRiNG
console.log(makeCaze('this is a string', ['upper', 'snake'])); // THIS_IS_A_STRING

module.exports = makeCaze;
