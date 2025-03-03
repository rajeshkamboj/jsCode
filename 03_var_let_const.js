// var example
function varExample() {
    var x = 10;
    if (true) {
        var x = 20; // same variable
        console.log(x); // 20
    }
    console.log(x); // 20
}

// let example
function letExample() {
    let y = 10;
    if (true) {
        let y = 20; // different variable
        console.log(y); // 20
    }
    console.log(y); // 10
}

// const example
function constExample() {
    const z = 10;
    console.log(z); // 10
    // z = 20; // Error: Assignment to constant variable.
}

// Call the functions to see the output
varExample();
letExample();
constExample();