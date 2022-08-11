"use strict";
function getFilledArray(value, n) {
    return Array(n).fill(value);
}
let stringArray;
let numberArray;
let personArray;
let coordinateArray;
/* Use the function getFilledArray<T>() to assign values to the variables stringArray, numberArray, personArray, and coordinateArray. */

//Each value should be an array of 6 elements
stringArray = getFilledArray('hi', 6);
console.log(stringArray)
numberArray = getFilledArray(9, 6);
console.log(numberArray)
personArray = getFilledArray({ name: 'J. Dean', age: 24 }, 6);
console.log(personArray)
coordinateArray = getFilledArray([3, 4], 6);
console.log(coordinateArray);
