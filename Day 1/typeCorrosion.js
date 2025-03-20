// So, if we add the string with number, the JS will convert it into a string. 

console.log("1" + 1);

// But if we use the string and number with other operators , it will do the calculation. It just do concatenation if there is used "+" operator

console.log("1" - 1);
console.log("1" * 1);
console.log("1" / 1);
console.log("1" % 1);

// What is the type of ans ?

console.log(typeof("1" % 1));

// So it is number

// JS do that coz it think the programmer mistakenly do that and it do type corrosion

// Remember is proBtype corrosion".