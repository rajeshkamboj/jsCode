for (let i=0; i < 500; i++) {
    console.log(i+1);
}

// Explain the output of above code
// The loop runs from 0 to 4 (5 times) and prints the value of i each time. The loop starts at 0 and increments by 1 each time until it reaches 4. The loop stops when i is no longer less than 5.

// What is the purpose of the loop?
// The loop is used to execute a block of code multiple times. In this case, it prints the value of i from 0 to 4.

//Q.1 Program to add first n natural numbers
let n = 100;
n = Number.parseInt(n);  // converts string to number   

let sum = 0;
for (let i=1; i <= n; i++) {
    sum += i;
}
console.log("Sum of first " + n + " natural numbers: " + sum);
// Explain the output of above code
// The loop runs from 1 to n (100 in this case) and adds each number to the sum. The final sum is printed at the end.

// What is the purpose of the loop?
// The loop is used to add the first n natural numbers together. It iterates through the numbers from 1 to n and accumulates the sum.

//Q.2 Program to find factorial of a number
let number = 5;

let factorial = 1;
for (let i=1; i <= number; i++) {
    factorial *= i;
} 
console.log("Factorial of " + number + ": " + factorial);
// Explain the output of above code
// The loop calculates the factorial of the number 5. It multiplies each number from 1 to 5 to calculate the factorial.

// What is the purpose of the loop?
// The loop is used to calculate the factorial of a number. It iterates through the numbers from 1 to the given number and multiplies them together to find the factorial.

//Q.3 Program to print a pattern
let rows = 15;

for (let i=1; i <= rows; i++) {
    let pattern = "";
    for (let j=1; j <= i; j++) {
        pattern += "* ";
    }
    console.log(pattern);
}

// Explain the output of above code
// The loop prints a pattern of stars in the shape of a right-angled triangle. The number of stars in each row increases from 1 to 5.

// What is the purpose of the loop?
// The loop is used to print a pattern of stars in the shape of a right-angled triangle. It iterates through the rows and columns to create the pattern.

//Q.4 Program to check if a number is prime
let num = 17;
let isPrime = true;

for (let i=2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
        isPrime = false;
        break;
    }
}

if (isPrime) {
    console.log(num + " is a prime number.");
}
else {
    console.log(num + " is not a prime number.");
}

// Explain the output of above code
// The loop checks if the number 17 is prime or not. It divides the number by all numbers from 2 to the square root of 17 to check for factors.

// What is the purpose of the loop?
// The loop is used to determine if a number is prime or not. It checks if the number is divisible by any number other than 1 and itself.


// let lakira = prompt("Enter the number of rows");
// lakira = Number.parseInt(lakira);  // converts string to number
// for (let i=1; i <= lakira; i++) {
//     let chhapa = "";
//     for (let j=1; j <= i; j++) {
//         chhapa += "+ ";
//     }
//     console.log(chhapa);
// }