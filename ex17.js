/*In this exercise, we will be given a url encoded string of key-value pairs, and we will have to turn it into a JavaScript object.

URL Encoded Strings
To safely send data in a URL, the data first has to be encoded to convert any special characters to URL safe characters. For this assignment we will only focus on the following URL encoding rules:

%20 represents a space character.
Key-value pairs are represented using an = character: key=value
Multiple key-value pairs are separated using a & character: key1=value1&key2=value2
So the following URL encoded string:

city=Vancouver&weather=lots%20of%20rain
Could be converted to the following JavaScript object:

{
  city: "Vancouver",
  weather: "lots of rain"
}

Instruction
Create a function named urlDecode that will receive a URL encoded string, and return the a JavaScript object that represents that data.

*/

const urlDecode = function (text) {
  text = text.split('%20').join(' ');

  let paramStartIndex = 0;
  let nextParamIndex = 0;
  let equalSignIndex = 0;
  const param = {};

  while (nextParamIndex >= 0) {
    equalSignIndex =
      equalSignIndex === 0
        ? text.indexOf('=', paramStartIndex)
        : text.indexOf('=', nextParamIndex);

    nextParamIndex = text.indexOf('&', paramStartIndex);

    let value = '';

    if (nextParamIndex < 0) {
      value = text.slice(equalSignIndex + 1);
    } else {
      value = text.slice(equalSignIndex + 1, nextParamIndex);
    }

    param[text.slice(paramStartIndex, equalSignIndex)] = value;

    paramStartIndex = nextParamIndex + 1;
  }

  return param;
};

console.log(urlDecode('duck=rubber')); //{duck: "rubber"}
console.log(urlDecode('city=Vancouver&weather=lots%20of%20rain')); // {city: "Vancouver", weather: "lots of rain"}
console.log(urlDecode('city=Vancouver&weather=lots%20of%20rain').weather); // "lots of rain"

module.exports = urlDecode;
