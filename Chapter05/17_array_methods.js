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