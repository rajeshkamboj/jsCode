//String Methods
// String Methods
// let str = "bhai bhagwan hai";
// console.log(str.length); // 15
// console.log(str.toUpperCase()); // BHAI BHAGWAN HAI
// console.log(str.toLowerCase()); // bhai bhagwan hai
// console.log(str.indexOf("bhai")); // 0
// console.log(str.lastIndexOf("bhai")); // 0
// console.log(str.includes("bhai")); // true
// console.log(str.startsWith("bhai")); // true
// console.log(str.endsWith("hai")); // true
// console.log(str.charAt(0)); // b
// console.log(str.charCodeAt(0)); // 98 (ASCII value of 'b')
// console.log(str.split(" ")); // [ 'bhai', 'bhagwan', 'hai' ]
// console.log(str.replace("bhai", "dost")); // dost bhagwan hai
// console.log(str.trim()); // bhai bhagwan hai (removes whitespace from both ends)
// console.log(str.trimStart()); // bhai bhagwan hai (removes whitespace from the start)
// console.log(str.trimEnd()); // bhai bhagwan hai (removes whitespace from the end)
// console.log(str.slice(0, 6)); // bhai
// console.log(str.substring(0, 7)); // bhai
// console.log(str.substr(0, 4)); // bhai (deprecated, use slice or substring instead)
// console.log(str.repeat(2)); // bhai bhagwan haibhai bhagwan hai
// console.log(str.concat(" aur sab kuch hai")); // bhai bhagwan hai aur sab kuch hai
// console.log(str.search("bhai")); // 0 (returns index of first occurrence)
// console.log(str.match(/bhai/g)); // [ 'bhai' ] (returns an array of matches)
// console.log(str.localeCompare("bhai bhagwan hai")); // 0 (returns 0 if strings are equal)
// console.log(str.localeCompare("bhai bhagwan")); // 1 (returns 1 if str > compared string)
// console.log(str.localeCompare("bhai bhagwan hai aur sab kuch hai")); // -1 (returns -1 if str < compared string)
// console.log(str.padStart(20, "*")); // *****bhai bhagwan hai (pads the start with '*')
// console.log(str.padEnd(20, "*")); // bhai bhagwan hai***** (pads the end with '*')
// console.log(str.normalize()); // bhai bhagwan hai (normalizes the string)
// console.log(str.valueOf()); // bhai bhagwan hai (returns the primitive value of the string)
// console.log(str.toString()); // bhai bhagwan hai (returns the string itself)
// console.log(str.split(" ", 2)); // [ 'bhai', 'bhagwan' ] (splits into an array with a limit of 2)

let fri = "Billu";
console.log(fri[3])
// console.log(fri[5]); // undefined (no error, just returns undefined for out-of-bounds index)
// console.log(fri.charAt(3)); // l (returns character at index 3)
// console.log(fri.charAt(5)); // '' (returns empty string for out-of-bounds index)

let bro = "Harry" + " Potter";
console.log(bro); // Harry Potter

