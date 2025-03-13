function addNum (a,b) {
  return a+b;
}
a = 1;
b = 2;
console.log("Sum of Numbers is ",addNum(a,b));

//Q.1 Write a program to find average of two numbers using functions.
//Ans:
function avgNum (a,b) {
  return (a+b)/2;
}
a = 1;
b = 2;
console.log("Average of Numbers is ",avgNum(a,b));

//Q.2 Write a program to find average of three numbers using functions. After calculating average of the numbers return operation completed successfully. Also average should be rounded off to 2 decimal places.
//Ans:
function avgNum (a,b,c) {
  return ((a+b+c)/3).toFixed(2);
}
a = 1;
b = 2;
c = 3;
console.log("Average of Numbers is ",avgNum(a,b,c),"Operation Completed Successfully");

//Q.3 Can we write functions without parameters?
//Ans: Yes, we can write functions without parameters.  For example:
function namaste() {
  return "Hello World";
}
console.log(namaste());

//Q.4 Can we write functions with multiple parameters?
//Ans: Yes, we can write functions with multiple parameters.  For example:
function greet(name, age) {
  return "Hello "+name+" Your Age is "+age;
}
console.log(greet("John", 25));

//Q.5 Can we write functions with multiple return statements?
//Ans: Yes, we can write functions with multiple return statements.  For example:
function greetings(name, age) {
  if(age>18) {
    return "Hello "+name+" You are Adult";
  } else {
    return "Hello "+name+" You are Minor";
  }
}
console.log(greetings("John", 25));
console.log(greetings("John", 15));

//Q.6 Can we write functions without return statements?
//Ans: Yes, we can write functions without return statements.  For example:
function noRet (name, age) {
  console.log("Hello "+name+" Your Age is "+age);
}
noRet("Bhai", 45);

// Another Example

const hello = () => {
    console.log("Hello World");
    return "Hello Brahmand";
    }
let bello = hello();
console.log(bello); // Hello Brahmand

// Explain the above code
//Ans: In the above code, we have defined an arrow function hello() which prints "Hello World" on the console and returns "Hello Brahmand". We are calling this function and storing the returned value in a variable bello. Finally, we are printing the value of bello which is "Hello Brahmand".

// Why it is not printing "Hello World"?
//Ans: It is not printing "Hello World" because we are not printing the value returned by the function hello().
//If we want to print "Hello World", we need to call the function hello() as shown below:
hello();
//Output:
//Hello World
//Hello Brahmand 