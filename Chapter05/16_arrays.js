// What is array in Javascript?
// An array is a special variable, which can hold more than one value at a time.

// How to create an array in Javascript?
let fruits = ['apple', 'banana', 'orange'];
console.log(fruits); // Output: ['apple', 'banana', 'orange']

// How to access elements in an array?
console.log(fruits[0]); // Output: 'apple'
console.log(fruits[1]); // Output: 'banana'
console.log(fruits[2]); // Output: 'orange'

// How to change elements in an array?
fruits[1] = 'mango';
console.log(fruits); // Output: ['apple', 'mango', 'orange']

// How to add elements to an array?
fruits.push('grape');
console.log(fruits); // Output: ['apple', 'mango', 'orange', 'grape']

// How to remove elements from an array?
fruits.pop('mango');
console.log(fruits); // Output: ['apple', 'mango', 'orange']

// How to find the length of an array?
console.log(fruits.length); // Output: 3

// How to loop through an array?
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// Output:
// apple
// mango
// orange

// How to check if a variable is an array?
console.log(Array.isArray(fruits)); // Output: true

// How to convert an array to a string?
console.log(fruits.toString()); // Output: 'apple,mango,orange'

// How to join elements of an array into a string?
console.log(fruits.join(' - ')); // Output: 'apple - mango - orange'

// How to sort an array?
fruits.sort();
console.log(fruits); // Output: ['apple', 'mango', 'orange']

// How to reverse an array?
fruits.reverse();
console.log(fruits); // Output: ['orange', 'mango', 'apple']

// How to find the index of an element in an array?
console.log(fruits.indexOf('mango')); // Output: 1

// How to check if an element exists in an array?
console.log(fruits.includes('banana')); // Output: false
console.log(fruits.includes('mango')); // Output: true

// How to slice an array?
console.log(fruits.slice(1, 3)); // Output: ['mango', 'orange']

// How to splice an array?
fruits.splice(1, 1, 'kiwi'); // Removes 'mango' and adds 'kiwi'
console.log(fruits); // Output: ['orange', 'kiwi', 'apple']

// How to concatenate two arrays?
let vegetables = ['carrot', 'broccoli'];
let combined = fruits.concat(vegetables);
console.log(combined); // Output: ['orange', 'kiwi', 'apple', 'carrot', 'broccoli']

// How to find the maximum value in an array of numbers?
let numbers = [5, 3, 8, 1, 4];
let maxNumber = Math.max(...numbers);
console.log(maxNumber); // Output: 8

// How to find the minimum value in an array of numbers?
let minNumber = Math.min(...numbers);
console.log(minNumber); // Output: 1

// How to filter elements in an array?
let filteredFruits = fruits.filter(fruit => fruit.startsWith('a'));
console.log(filteredFruits); // Output: ['apple']

