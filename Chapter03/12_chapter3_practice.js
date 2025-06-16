//Q.1 Write a program to print marks of a student in object using for loop. Gukesh 90, Praggna 87, Vidit 85, and Arjun 91.
let marks = {
    Gukesh: 90,
    Praggna: 87,
    Vidit: 85,
    Arjun: 91
};
// Using for loop
for (let i = 0; i < Object.keys(marks).length; i++) {
    let key = Object.keys(marks)[i];
    console.log("Marks of " + Object.keys(marks)[i] + " are: " + marks[key]);
}

// explain line by line of above code
// The code initializes an object 'marks' with student names as keys and their respective marks as values.
// It then uses a for loop to iterate over the keys of the object.
// Inside the loop, it retrieves each key using Object.keys(marks)[i] and logs the student's name along with their marks.   

//Q2 Write the program in question 1 using for in loop.
for (let key in marks) {
    console.log("Marks of " + key + " are: " + marks[key]);
}
// The code uses a for-in loop to iterate over the keys of the 'marks' object.
// Inside the loop, it logs each student's name along with their marks.


//Q.3 Write a program to print try again if user enters wrong password. Password is "password123".
// let correctPassword = "123";
// let userPassword = prompt("Enter your password:");
// while (userPassword !== correctPassword) {
//     console.log("Try again");
//     userPassword = prompt("Enter your password:");
// }
// The code initializes a variable 'correctPassword' with the value "123".
// It then prompts the user to enter their password and stores it in 'userPassword'.
// A while loop checks if the entered password is not equal to the correct password.
// If the passwords do not match, it logs "Try again" and prompts the user to enter their password again.
// The loop continues until the user enters the correct password.

//Q4 Write a function to find mean of 5 numbers = 20,21,30, 43.

// function findMean(numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }
//     return sum / numbers.length;
// }
// let numbers = [20, 21, 30, 43];
// let mean = findMean(numbers);
// console.log("Mean of the numbers is: " + mean);

//or

const mean = (a, b, c, d) => {
    return (a + b + c + d) / 4;
}
let result = mean(20, 21, 30, 43);
console.log("Mean of the numbers is: " + result);


// The function 'findMean' takes an array of numbers as input.
// It initializes a variable 'sum' to 0 and uses a for loop to iterate over the numbers, adding each number to 'sum'.
// Finally, it returns the mean by dividing the sum by the length of the array.
// The second method uses an arrow function to calculate the mean of four numbers passed as arguments.
// The code initializes an array 'numbers' with the values 20, 21, 30, and 43.
// It then calls the 'findMean' function with this array and logs the result.
// The second method calls the arrow function with the same numbers and logs the result.

