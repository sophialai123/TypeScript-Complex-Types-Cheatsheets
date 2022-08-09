"use strict";
let customersArray = ['Custy Stomer', 'C. Oostomar', 'C.U.S. Tomer', 3432434, 'Custo Mer', 'Custopher Ustomer', 3432435, 'Kasti Yastimeur'];
//Write Your Code here:
function checkCustomersArray() {
    customersArray.forEach((el) => {
        if (typeof (el) !== "string")
            console.log(`Type error: ${el} should be a string!`);
    });
}
checkCustomersArray();
// Arrays:
let bestNumbers = [7, 77, 4];
//An alternative method is to use the Array<T> syntax, where T stands for the type.
let bestLunches = ['chicken soup', 'non-chicken soup'];
console.log(bestLunches);
let bestBreakfasts = ['scrambled eggs', 'oatmeal', 'tamago kake gohan', 'any kind of soup'];
console.log(bestBreakfasts);
let bestBooleans = [true, false];
console.log(bestBooleans);
// Multidimensional Arrays:
let bestMealPlan = [bestLunches, bestBreakfasts, ['baked potato', 'mashed potato']];
console.log(bestMealPlan);
let bestBooleansTwice = [bestBooleans, bestBooleans];
let numbersMulti = [[[1], [2, 3]], [[7], bestNumbers]];
console.log(numbersMulti);
let numbersTuple = [1, 2, 3, 4]; // Type Error! numbersTuple should only have three elements.
console.log(numbersTuple);
let dogTup = ['dog', 'brown fur', 'curly tail', 'sad eyes'];
// Your code goes here:
let myArr = dogTup.concat(dogTup);
console.log(myArr);
//Rest Parameters
function smush(firstString, ...otherStrings) {
    let output = firstString;
    for (let i = 0; i < otherStrings.length; i++) {
        output = output.concat(otherStrings[i]);
    }
    return output;
}
console.log(smush('a', 'h', 'h', 'H', 'H', 'H', '!', '!')); // Returns: 'ahhHHH!!'.
//Spread Syntax
function performDanceMove(moveName, moveReps, hasFlair) {
    console.log(`I do the ${moveName} ${moveReps} times !`);
    if (hasFlair) {
        console.log('I do it with flair!');
    }
}
let danceMoves = [
    ['chicken beak', 4, false],
    ['wing flap', 4, false],
    ['tail feather shake', 4, false],
    ['clap', 4, false],
    ['chicken beak', 4, true],
    ['wing flap', 4, true],
    ['tail feather shake', 4, true],
    ['clap', 4, true],
];
danceMoves.forEach(move => performDanceMove(...move));
