let frand = "Romu";
console.log(frand.substring(0,2)); // Output: "Ro"
console.log(frand.substring(0,1)); // Output: "R"
console.log(frand.substring(0,3)); // Output: "Rom"
console.log(frand.substring(3));    // Output: "u"

let newFrand = frand.substring(0, 2) + 's' + frand.substring(3);
console.log(newFrand); // Output: "Rosu"

// let frand = "Romu";
// let frandArray = frand.split('');
// frandArray[2] = 's';
// let newFrand = frandArray.join('');
// console.log(newFrand); // Output: "Rosu"
