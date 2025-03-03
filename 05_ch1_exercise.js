// Q.1. Create a string variable and a number variable. Concatenate the two variables and store the result in a new variable. Print the new variable to the console.
// Expected Output: "Hello, this is a string 42"
//
// Answer:

let myString = "Hello, this is a string";
let myNumber = 42;
let result = myString + " " + myNumber;

console.log(result); // Output: "Hello, this is a string 42"


// Q.2 Use type of operator to find the datatype of the string in last question.
// Expected Output: string
//
// Answer: 

console.log(typeof result); // Output: string

//Q.3 Create a const object in javascript. Can you change it to hold a number later?
// Expected Output: Error
//
// Answer: 

const myObject = {
    name: "Laptop",
    price: 1200,
    brand: "Dell",
    isAvailable: true
};

myObject.price = 1500; // No error
console.log(myObject.price); // Output: 1500

// Explanation: The object is declared using the const keyword, which means the reference to the object cannot be changed. However, the properties of the object can be modified.


// Q.4 Try to add a new key-value pair to the object in the last question.
// Expected Output: Error
//
// Answer: 

myObject.color = "Silver"; // No error
console.log(myObject.color); // Output: Silver

// Explanation: The object properties can be modified even if the object is declared using the const keyword. Adding a new key-value pair to the object does not change the reference to the object.

//Q.5 Write a JS Program to create a word-meaning dictionary of 5 words. Print all the words and their meanings in the console.
// Expected Output: 
// Word: Apple, Meaning: A fruit
// Word: Book, Meaning: A written or printed work consisting of pages glued or sewn together along one side and bound in covers.
// Word: Cat, Meaning: A small domesticated carnivorous mammal with soft fur, a short snout, and retractile claws.
// Word: Dog, Meaning: A domesticated carnivorous mammal that typically has a long snout, an acute sense of smell, and a barking, howling, or whining voice.
// Word: Elephant, Meaning: A very large animal with thick grey skin, large ears, and a long trunk.
//
// Answer:

const dictionary = {
    Apple: "A fruit",
    Book: "A written or printed work consisting of pages glued or sewn together along one side and bound in covers.",
    Cat: "A small domesticated carnivorous mammal with soft fur, a short snout, and retractile claws.",
    Dog: "A domesticated carnivorous mammal that typically has a long snout, an acute sense of smell, and a barking, howling, or whining voice.",
    Elephant: "A very large animal with thick grey skin, large ears, and a long trunk."
};

for (const shabda in dictionary) {
    console.log(`Shabd: ${shabda}, Arth: ${dictionary[shabda]}`);
}

// Explanation: The dictionary object contains key-value pairs where the key is the word and the value is the meaning. Using a for...in loop, we can iterate over the object and print each word and its meaning to the console.