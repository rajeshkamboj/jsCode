// 1. Undefined
let a;
console.log(a); // Output: undefined

// 2. Null
let b = null;
console.log(b); // Output: null

// 3. Boolean
let c = true;
console.log(c); // Output: true

// 4. Number
let d = 42;
console.log(d); // Output: 42

// 5. String
let e = "Hello, World!";
console.log(e); // Output: Hello, World!

// 6. BigInt
let f = BigInt(9007199254740991);
console.log(f); // Output: 9007199254740991n

// 7. Symbol
let g = Symbol("symbol");
console.log(g); // Output: Symbol(symbol)

console.log(typeof a); // Output: undefined
console.log(typeof b); // Output: object
console.log(typeof c); // Output: boolean
console.log(typeof d); // Output: number
console.log(typeof e); // Output: string
console.log(typeof f); // Output: bigint
console.log(typeof g); // Output: symbol

// Creating an object with various items
const item = {
    name: "Laptop",
    price: 1200,
    brand: "Dell",
    isAvailable: true
};

// Accessing properties of the object
console.log(item.name); // Output: Laptop
console.log(item.price); // Output: 1200
console.log(item.brand); // Output: Dell
console.log(item.isAvailable); // Output: true

// You can also use bracket notation to access properties
console.log(item["name"]); // Output: Laptop
console.log(item["price"]); // Output: 1200
console.log(item["brand"]); // Output: Dell
console.log(item["isAvailable"]); // Output: true