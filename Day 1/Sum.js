// Sum of two numbers (I know this basic but we have to do it 😒)

let a = 10;
let b = 20;

console.log(a+b);

// Now see what is the difference between the number and string let's see 10 is a number and if "10" now this is not a number this is a string

//Now time to talk about concatenation yehhhhhhh....

let c = 10;
let d = "10";

// I you don't about this you say it gonna be 20 but one is string and the other is a number. So, JS gonna do concatenation there.

console.log(c+d);

// So it just combine the string and the number "10" + 10 is 1010. Now what's the type of this

console.log(typeof(c+d)); // It's a string

// It's means if the "+" sign is used it's not always addition it can be concatenated too

let i = 10;
let j = 20;

console.log(`The sum of ${i} and ${j} is: ` + i + j);

// Now sum of this is not gonna 30 coz the first on is string and the others are number but js is from left to right

console.log(`The sum of ${i} and ${j} is: ` + (i + j)); //This is correct the bracket give the prioity 

console.log( i + j + ` is sum of ${i} and ${j}`); // The left to right scene :)