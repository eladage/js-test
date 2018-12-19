// arrow functions - more modern syntax for function declaration

// function     arguments            logic to return
let getId = (prefix, suffix) => prefix + 123 + suffix;

// OR // with curly braces it needs to have a return statement
// let getId = (prefix, suffix) => {
//   return prefix + 123 + suffix;
// }

console.log(getId('ID: ', '!'));

// note - Arrow functions do not have 'this' value.