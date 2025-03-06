//Q.1 Use logical operators to find whether the age of a person lies between 10 and 20?

let age = 10; // You can change this value to test with different ages

if (age > 10 && age < 20) {
    console.log("The age is between 10 and 20.");
} else {
    console.log("The age is not between 10 and 20.");
}

//Q.2 Demonstrate the use of switch case statements in JavaScript by creating a program that takes a number as input and prints the corresponding month name.

// let monthNumber = 5; // You can change this value to test with different month numbers
let month = prompt("Enter a number (1-12) to get the month name:");
month = Number.parseInt(month);  // converts string to number
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Invalid month number");
        break;
}


//Q.3 Write a program to find if a number is divisible by 2 and 3. The number should be greater than 40.

let num = 42; // You can change this value to test with different numbers

if (num > 40 && num % 2 === 0 && num % 3 === 0) {
    console.log("The number is greater than 40 and divisible by both 2 and 3.");
} else {
    console.log("The number does not meet the conditions.");
}

//Q.4 Write a program to find whether a number is either divisible by 2 or 3.

//let number = 9; // You can change this value to test with different numbers
let number = prompt("Enter a number to check if it is divisible by 2 or 3:");

if (number % 2 === 0 || number % 3 === 0) {
    console.log("The number is divisible by 2 or 3.");
} else {
    console.log("The number is not divisible by 2 or 3.");
}


//Q.5 Print 'you can drive' or 'you cannot drive' based on the age of the person. The legal driving age in India is 18 years.

//let age = 18; // You can change this value to test with different ages
let age = prompt("Enter your age:");
if (age >= 18) {
    console.log("You can drive.");
} else {
    console.log("You cannot drive.");
}

//Q.6 Write a program to check if a student is pass or fail when he enters his marks out of 500. The passing percentage is 33%.

//let marks = 350; // You can change this value to test with different marks
let marks = prompt("Enter your marks out of 500:");
marks = Number.parseInt(marks);  // converts string to number
if (marks >= 165) {
    console.log("Pass");
} else {
    console.log("Fail");
}

//Q.6 Write a program to calculate the percentage of a student based on his marks out of 500.

//let totalMarks = 500; // Total marks for the exam
//let obtainedMarks = 450; // You can change this value to test with different marks 
//let totalMarks = 500;
let totalMarks = prompt("Enter total marks:");
totalMarks = Number.parseInt(totalMarks);  // converts string to number
let obtainedMarks = prompt("Enter marks obtained:");
obtainedMarks = Number.parseInt(obtainedMarks);  // converts string to number
let percentage = (obtainedMarks / totalMarks) * 100;
console.log(`Percentage: ${percentage}%`);

// Q.7 Write a program to check if a number is positive, negative, or zero.

//let number = 0; // You can change this value to test with different numbers
let number = prompt("Enter a number to check if it is positive, negative, or zero:");
number = Number.parseInt(number);  // converts string to number
if (number > 0) {
    console.log("Positive");
} else if (number < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

//Q.8 Write a program to find the largest of three numbers entered by the user.

//let num1 = 10, num2 = 20, num3 = 30; // You can change these values to test with different numbers
let num1 = prompt("Enter first number:"); // converts string to number  
num1 = Number.parseInt(num1);
let num2 = prompt("Enter second number:"); // converts string to number
num2 = Number.parseInt(num2);
let num3 = prompt("Enter third number:"); // converts string to number
num3 = Number.parseInt(num3);

if (num1 >= num2 && num1 >= num3) {
    console.log(`The largest number is: ${num1}`);
}
else if (num2 >= num1 && num2 >= num3) {
    console.log(`The largest number is: ${num2}`);
}
else {
    console.log(`The largest number is: ${num3}`);
}

// Or Simply I have written this like

let a = 100;
let b = 50;
let c = 15;

if (a > b && a > c) { 
    console.log(`Largest number is: ${a}`);
} else if (b > a && b > c) {
    console.log(`Largest number is: ${b}`);
} else {
    console.log(`Largest number is: ${c}`);
}


// What if I enters value of a and b equal, then which number will be largest?

let a = 100;
let b = 100;
let c = 15;

if (a === b && b === c) {
    console.log("All numbers are equal");
} else if (a === b && a > c) {
    console.log(`a and b are equal and largest: ${a}`);
} else if (a === c && a > b) {
    console.log(`a and c are equal and largest: ${a}`);
} else if (b === c && b > a) {
    console.log(`b and c are equal and largest: ${b}`);
} else if (a > b && a > c) {
    console.log(`Largest number is: ${a}`);
} else if (b > a && b > c) {
    console.log(`Largest number is: ${b}`);
} else {
    console.log(`Largest number is: ${c}`);
}

