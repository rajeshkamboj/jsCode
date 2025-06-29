//Array Methods

// 1. toString Method
// The toString method converts an array to a string representation.
// It joins the elements of the array into a single string, separated by commas.
let num = [1, 2, 3, 4, 5];
let bleck = num.toString();
console.log(bleck)
console.log(typeof bleck); // Output: string

// 2.Join Method
// The join method joins all elements of an array into a string.
let tony = ['Tony', 'Stark'];
let fullName = tony.join(' ');
console.log(fullName); // Output: Tony Stark
let sepName = tony.join('-');
console.log(sepName); // Output: Tony-Stark

//3. Pop Method
// The pop method removes the last element from an array and returns it.
let fruits = ['Apple', 'Banana', 'Cherry'];
let lastFruit = fruits.pop();
console.log(lastFruit); // Output: Cherry
console.log(fruits); // Output: ['Apple', 'Banana']
let remFruit = fruits.pop('Banana');
console.log(remFruit); // Output: Banana
console.log(fruits); // Output: ['Apple']

// 4. Push Method
// The push method adds one or more elements to the end of an array and returns the new length of the array.
let numbers = [1, 2, 3];
let newLength = numbers.push(7, 9, 13);
console.log("Our array has now elements " + numbers + " which are total " + newLength + " in count"); // Output: [1, 2, 3, 7, 9, 13] 6

//5. Shift Method
// The shift method removes the first element from an array and returns it.
let colors = ['Red', 'Green', 'Blue'];
let firstColor = colors.shift();
console.log(firstColor + " is first color in array and now the remaining colors are " + colors); // Output: Red is first color in array and now the remaining colors are Green,Blue 

// 6. Unshift Method
// The unshift method adds one or more elements to the beginning of an array and returns the new length of the array.
let animals = ['Dog', 'Cat'];
let newLengthAnimals = animals.unshift('Lion', 'Tiger');
console.log("Our array has now elements " + animals + " which are total " + newLengthAnimals + " in count"); // Output: [Lion, Tiger, Dog, Cat]

// -- Video No. 18 Continue with Array Methods --

// 7. Delete Method
// The delete operator removes an element from an array but does not change the length of the array.
let arr = ['A', 'B', 'C', 'D'];
delete arr[1];
console.log(arr); // Output: ['A', <1 empty item>, 'C', 'D']
console.log(arr.length); // Output: 4 (length remains unchanged)

//8. Concat Method
// The concat method merges two or more arrays and returns a new array.
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let combinedArray = array1.concat(array2);
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

//9. Sort Method
// The sort method sorts the elements of an array in place and returns the sorted array.
let unsortedArray = [5, 3, 8, 31];
unsortedArray.sort();
console.log(unsortedArray); // Output: [3, 31, 5, 8] (sorted as strings)

// Note: The sort method sorts elements as strings by default. For numerical sorting, use a compare function.
let numericArray = [5, 13, 81, 12, 1, 3, 8];
numericArray.sort((a, b) => a - b);
console.log(numericArray); // Output: [1, 3, 5, 8, 12, 13, 81]
console.log(typeof numericArray); // Output: object (arrays are objects in JavaScript)

// 10. Reverse Method
// The reverse method reverses the elements of an array in place and returns the reversed array.
let reversedArray = [1, 2, 3, 4, 5];
reversedArray.reverse();
console.log(reversedArray); // Output: [5, 4, 3, 2, 1]

// 11. Splice Method
// The splice method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
let spliceArray = ['A', 'B', 'C', 'D'];
spliceArray.splice(1, 2, 'X', 'Y'); // Removes 2 elements starting from index 1 and adds 'X' and 'Y'
console.log(spliceArray); // Output: ['A', 'X', 'Y', 'D']

// 12. Slice Method
// The slice method returns a shallow copy of a portion of an array into a new array object.
let sliceArray = ['A', 'B', 'C', 'D'];
let slicedPart = sliceArray.slice(1, 3); // Extracts elements from index 1 to 2 (not including index 3)
console.log(slicedPart); // Output: ['B', 'C']
console.log(sliceArray); // Original array remains unchanged: ['A', 'B', 'C', 'D']
console.log(sliceArray.slice(1)); // Output: ['B', 'C', 'D'] (slicing from index 1 to the end)

// 13. Find Method
// The find method returns the value of the first element in the array that satisfies the provided testing function.
let numbersArray = [5, 12, 8, 130, 44];
let foundNumber = numbersArray.find(num => num > 10);
console.log(foundNumber); // Output: 12 (first number greater than 10)  

// 14. FindIndex Method
// The findIndex method returns the index of the first element in the array that satisfies the provided testing function.
let indexOfNumber = numbersArray.findIndex(num => num > 10);
console.log(indexOfNumber); // Output: 1 (index of the first number greater than 10)

// 15. Every Method
// The every method tests whether all elements in the array pass the test implemented by the provided function.
let allGreaterThanZero = numbersArray.every(num => num > 0);
console.log(allGreaterThanZero); //  Output: true (all numbers are greater than 0)

// 16. Some Method
// The some method tests whether at least one element in the array passes the test implemented by the provided function.
let someGreaterThanTen = numbersArray.some(num => num > 10);
console.log(someGreaterThanTen); // Output: true (there are numbers greater than 10)

// 17. Fill Method
// The fill method fills all elements of an array from a start index to an end index with a static value.
let fillArray = [1, 2, 3, 4, 5];
fillArray.fill(X, 1, 4); // Fills elements from index 1 to 4 with the value X
console.log(fillArray); // Output: [1, 'X', 'X', 'X', 5]

// 18. CopyWithin Method   
// The copyWithin method shallow copies part of an array to another location in the same array and returns it.
let copyArray = [1, 2, 3, 4, 5];
copyArray.copyWithin(0, 3); // Copies elements from index 3 to the beginning
console.log(copyArray); // Output: [4, 5, 3, 4, 5] (elements from index 3 and onward are copied to the start)

// 19. Flat Method
// The flat method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
let nestedArray = [1, [2, [3, 4]]];
let flattenedArray = nestedArray.flat(2); // Flattens the array to depth 2
console.log(flattenedArray); // Output: [1, 2, 3, 4]

// 20. FlatMap Method
// The flatMap method first maps each element using a mapping function, then flattens the result into a new array.
let flatMappedArray = nestedArray.flatMap(x => x + 1);
console.log(flatMappedArray); // Output: [2, 3, 4]