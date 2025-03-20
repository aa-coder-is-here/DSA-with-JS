// So in this file we accept and print the value on the screen 

// Step 1: If you are using the command line environment So do this ins node js.

var age = process.argv[2];

console.log(`Your age is: ${age}`);
console.log(typeof(age));

// Step 2: if you are on browser then 

let age2 = prompt("Please Enter your age");

console.log(`Your age is: ${age2}`);
console.log(typeof(age2));

// So there type is string

// Now let's convert this into Number 

// Method 1:

var age = Number(process.argv[2]);

// By putting in the number

// Method 2: 

var age = parseInt(process.argv[2]);

// By using parseInt

// Method 3:

let input = process.argv[2];
var age = Number(input);

// By dividing

// This is process is called "Type Casting"/"Type Conversion".