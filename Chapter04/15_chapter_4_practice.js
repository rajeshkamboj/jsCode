//Q.1 What will be the output of the following code? console.log("Har\"".length);
// console.log("Har\"".length);

//Q.2 Explore the includes, startwith, and endswith methods of strings.
const story = "Once upon a time, there was a brave knight who fought dragons and saved kingdoms.";
const character = "king";
console.log ( 
    `The character "${character}" ${
        story.includes(character) ? "is" : "is not"
    } in the story.`,
);

console.log(
    `The story ${
        story.startsWith("Once") ? "starts" : "does not start"
    } with "Once".`,
);
console.log(
    `The story ${
        story.endsWith("kingdoms.") ? "ends" : "does not end"
    } with "kingdoms.".`
);
//Q.3 Write a program to convert a given string to uppercase and lowercase.
const inputString = "Hello, World!";
const upperCaseString = inputString.toUpperCase();
const lowerCaseString = inputString.toLowerCase();
console.log(`Uppercase: ${upperCaseString}`);
console.log(`Lowercase: ${lowerCaseString}`);
//or
let ourCapital = "nEw deLHi";
console.log(ourCapital.toUpperCase()); // NEW DELHI
console.log(ourCapital.toLowerCase()); // new delhi

//Q.4 Extract the amount out of this string "Please give Rs.1000 for the project."
const amountString = "Please give Rs.1000 for the project.";
const amount = amountString.match(/Rs\.(\d+)/);
if (amount) {
    console.log(`Extracted amount: Rs.${amount[1]}`);
}
//or
const amountString2 = "Please give Rs.1000 for the project.";
const prefix = "Please give Rs.";
const suffix = " for the project.";
const amount2 = Number.parseInt(amountString2.slice(prefix.length, amountString2.length - suffix.length).trim());
console.log(`Extracted amount: ${amount2}`);
console.log(typeof amount2); // number
//or
const amountString3 = "Please give Rs.1000 for the project.";
const amount3 = amountString3.split("Rs.")[1].split(" ")[0];
console.log(`Extracted amount: Rs.${amount3}`);

//Explain match, slice, and split methods of strings.
// match: The match() method retrieves the matches when matching a string against a regular expression.
// slice: The slice() method extracts a section of a string and returns it as a new string.
// split: The split() method splits a string into an array of substrings based on a specified separator.

//Q.5 Try to change the 4th character of a string. What do you observe?
let mynation = "India";
mynation[4] = 'a'; // Attempting to change the 5th character
console.log("Modified string:", mynation);
// The string remains unchanged because strings in JavaScript are immutable.

//or 
const originalString = "Hello, World!";
try {
    originalString[3] = 'a'; // Attempting to change the 4th character
}
catch (error) {
    console.error("Error:", error.message);
}
console.log("Original string remains unchanged:", originalString);
// The string remains unchanged because strings in JavaScript are immutable.
