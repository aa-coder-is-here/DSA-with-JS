// Swap means exchange the data,value or information between two variables.

// we gonna see the swapping with 3 methods (❁´◡`❁)

// Method 1: Using a temporary variable

let a = 5;
let b = 10;
let c;

console.log(`The value of a is ${a} and b is ${b}`)

c = a; // c = 5
a = b; // a = 10
b = c; // b = 5

console.log(`The value of a is ${a} and b is ${b}`)

// Method 2: Using the arithmetic operations

let d = 10;
let e = 20;

console.log(`The value of D is ${d} and E is ${e}`)

e = e + d; // e = 30 ,  d = 10
d = e - d; // 30 - 10 , d = 20 
e = e - d; // 30 - 20 , e = 10

console.log(`The value of D is ${d} and E is ${e}`)

// Method 3: Desturcting 

let ab = 10;
let bc = 20;

console.log(`The value of ab is ${ab} and bc is ${bc}`);
[ab, bc] = [bc, ab];
console.log(`The value of ab is ${ab} and bc is ${bc}`);
