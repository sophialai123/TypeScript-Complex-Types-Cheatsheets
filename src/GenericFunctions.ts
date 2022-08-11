function getFilledArray<T>(value: T, n: number): T[] {
  return Array(n).fill(value);
}

let stringArray: string[];
let numberArray: number[];
let personArray: { name: string, age: number }[];
let coordinateArray: [number, number][];

/* Use the function getFilledArray<T>() to assign values to the variables stringArray, numberArray, personArray, and coordinateArray. */

stringArray = getFilledArray<string>('hi', 6);
numberArray = getFilledArray<number>(9, 6);
personArray = getFilledArray<{ name: string, age: number }>(
  { name: 'J. Dean', age: 24 }, 6
);
coordinateArray = getFilledArray<[number, number]>([3, 4], 6);

console.log(coordinateArray)

