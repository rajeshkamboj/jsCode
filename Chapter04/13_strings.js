//String

let bhai = "bhagwan"
console.log(bhai.length); // 7

//Template Literals
let friend1 = "Rohan"
let friend2 = "Shivam"
console.log(`My friends are ${friend1} and ${friend2}`); // My friends are Rohan and Shivam

//Escape Sequences
let str = "bhai \"bhagwan\" hai"
console.log(str); // bhai "bhagwan" hai

let newStr = "bhai \n bhagwan \t hai"
console.log(newStr); // bhai 
                      // bhagwan 	 hai
// Carriage Return
let crStr = "bhai \r bhagwan"
console.log(crStr); // bhagwan
// Backslash
let backslashStr = "bhai \\ bhagwan"
console.log(backslashStr); // bhai \ bhagwan
// Single Quote
let singleQuoteStr = "bhai 'bhagwan' hai"
console.log(singleQuoteStr); // bhai 'bhagwan' hai
// Double Quote
let doubleQuoteStr = 'bhai "bhagwan" hai'
console.log(doubleQuoteStr); // bhai "bhagwan" hai
// Backspace
let backspaceStr = "bhai \b bhagwan"
console.log(backspaceStr); // bhai  bhagwan
// Form Feed
let formFeedStr = "bhai \f bhagwan"
console.log(formFeedStr); // bhai  bhagwan

// explaination
// \n - New line
// \t - Tab
// \r - Carriage return
// \\ - Backslash
// \' - Single quote
// \" - Double quote
// \b - Backspace
// \f - Form feed
// \v - Vertical tab
// \0 - Null character
// \u - Unicode character
// \x - Hexadecimal character
// \0 - Null character
// \v - Vertical tab

