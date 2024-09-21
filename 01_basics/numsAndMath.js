const score = 100;
console.log(score);

const balance = new Number(400);
console.log(balance);

const one = balance.toString();
console.log(one);
console.log(typeof one);

console.log(one.length);

const fixed = balance.toFixed(2);
console.log(fixed); 

const otherNumber = 23.896;
console.log(otherNumber.toPrecision(3));

const hundreds = 1000000;
console.log(hundreds.toLocaleString()); // US standards
console.log(hundreds.toLocaleString('en-IN')); // Indian standards


console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

// ++++++++++++++++++++++  Maths  ++++++++++++++++++++++++++

console.log(Math);

console.log(Math.abs(-6));

console.log(Math.round(6.4));

console.log(Math.ceil(5.3));
console.log(Math.floor(5.3));

console.log(Math.max(1,2,3,4,5));
console.log(Math.min(1,2,3,4,5));

console.log(Math.random()); // Values between 0 and 1
console.log(( Math.randome() * 10) + 1);  
console.log(Math.floor(( Math.randome() * 10)) + 1);  

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);