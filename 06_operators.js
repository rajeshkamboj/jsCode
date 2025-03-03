// Arithmetic Operators
let a = 10;
let b = 5;

console.log("Addition: " + (a + b)); // 15
console.log("Subtraction: " + (a - b)); // 5
console.log("Multiplication: " + (a * b)); // 50
console.log("Division: " + (a / b)); // 2
console.log("Modulus: " + (a % b)); // 0

// Explain modulus operator
// 10 / 5 = 2
// 10 % 5 = 0
// 10 / 3 = 3
// 10 % 3 = 1

// Increment and Decrement Operators
let c = 10;
console.log("Increment: " + (++c)); // 11
console.log("Decrement: " + (--c)); // 10
// The value of c was incremented to 11 in the previous line
// Therefore, when we decrement it, it goes back to 10, not 9


// Assignment Operators
let d = 20;
d += 10; // d = d + 10
console.log("Assignment (+=): " + d); // 30
d -= 10; // d = d - 10
console.log("Assignment (-=): " + d); // 20
d *= 10; // d = d * 10
console.log("Assignment (*=): " + d); // 200
d /= 10; // d = d / 10
console.log("Assignment (/=): " + d); // 20
d %= 10; // d = d % 10
console.log("Assignment (%=): " + d); // 0


// Comparison Operators
let e = 10;
let f = 20;
console.log("Equal: " + (e == f)); // false
console.log("Not Equal: " + (e != f)); // true
console.log("Strict Equal: " + (e === f)); // false
console.log("Strict Not Equal: " + (e !== f)); // true
console.log("Greater Than: " + (e > f)); // false
console.log("Less Than: " + (e < f)); // true

// Logical Operators
let g = true;
let h = false;
console.log("Logical AND: " + (g && h)); // false
console.log("Logical OR: " + (g || h)); // true
console.log("Logical NOT: " + (!g)); // false

// Ternary Operator
let i = 10;
let j = 20;
let result = (i > j) ? "i is greater" : "j is greater";
console.log("Ternary Operator: " + result); // j is greater

//Explain the ternary operator
// if (i > j) {
//     result = "i is greater";
// } else {
//     result = "j is greater";
// }

// Type Operators
let k = 10;
let l = "10";
console.log("Typeof k: " + typeof k); // number
console.log("Typeof l: " + typeof l); // string

// Bitwise Operators
let m = 2; // 10
let n = 3; // 11
console.log("Bitwise AND: " + (m & n)); // 2
console.log("Bitwise OR: " + (m | n)); // 3
console.log("Bitwise XOR: " + (m ^ n)); // 1
console.log("Bitwise NOT: " + (~m)); // -3
console.log("Bitwise Left Shift: " + (m << n)); // 16
console.log("Bitwise Right Shift: " + (m >> n)); // 0
console.log("Bitwise Zero Fill Right Shift: " + (m >>> n)); // 0

// Explain bitwise operators
// 2 = 10
// 3 = 11
// 2 & 3 = 10 & 11 = 10 = 2
// 2 | 3 = 10 | 11 = 11 = 3
// 2 ^ 3 = 10 ^ 11 = 01 = 1
// ~2 = ~10 = -11 = -3
// 2 << 3 = 10 << 3 = 10000 = 16
// 2 >> 3 = 10 >> 3 = 0
// 2 >>> 3 = 10 >>> 3 = 0
