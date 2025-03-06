// Below is a if-else statement
let a = prompt("Hey What's your age?");
a = Number.parseInt(a)  //converts string to number
if (a >= 18) {
    console.log("You are eligible to vote");
} else {
    console.log("You are not eligible to vote");
}
// Explain the output of above code
// If the age is 18 or more, the user is eligible to vote, otherwise, they are not eligible to vote.

//below is a else if statement
let score = prompt("Enter your score:");
score = Number.parseInt(score);  // converts string to number

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}
// Explain the output of above code
// Depending on the score, the user is assigned a grade from A to F. Higher scores get better grades.

//switch statement
let day = prompt("Enter a number (0-6) to get the day of the week:");
day = Number.parseInt(day);  // converts string to number

switch (day) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid input! Please enter a number between 0 and 6.");
}
// Explain the output of above code
// Based on the number entered (0-6), the corresponding day of the week is displayed. If the number is not between 0 and 6, an invalid input message is shown.

// Ternary operator example
let number = prompt("Enter a number:");
number = Number.parseInt(number);  // converts string to number

let result = (number % 2 === 0) ? "Even" : "Odd";
console.log(`The number is ${result}`);

// Explain the output of above code
// If the number is divisible by 2, then it is even, otherwise it is odd.
// The ternary operator checks if the number is divisible by 2 or not.
// If it is divisible by 2, then it returns "Even", otherwise it returns "Odd".
// The result is then printed to the console using string interpolation.