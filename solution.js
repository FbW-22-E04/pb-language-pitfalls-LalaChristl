// Question 1 - NaN
// NaN - Not-a-Number
// By definition, NaN is the return value from operations which have an undefined numerical result. Hence why, in JavaScript, aside from being part of the global object, it is also part of the Number object: Number. NaN. It is still a numeric data type , but it is undefined as a real number .

// 1.1 - 1.3

const input = "hello";
console.log("1.1", "Input is not a number", isNaN(input));

const inputNumber = "3";
console.log("1.2", "3 a NaN", isNaN(inputNumber));
console.log("1.3", inputNumber, typeof NaN);

// 2. - Rounding

console.log('2.1', (0.1 * 0.2));
console.log('2.2', "total is", (0.1 * 0.2).toFixed(2));

// 3. - Infinity

console.log('3.1', Infinity / 0);
console.log('3.2', Infinity / Infinity);
console.log('3.3', 1 / 0);




