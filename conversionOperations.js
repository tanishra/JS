let score = "33";

console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber);

let score2 = "33abc";

console.log(typeof score2);
let valueInNumber2 = Number(score2);

console.log(typeof valueInNumber2);
console.log( valueInNumber2);

// "33" => 33
// "33ab" => NaN
// true => 1 false => 0
// null => NaN
// undefined => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(booleanIsLoggedIn);

// 1 => true 0 => false
// "" => false
// "Tanish" = true

let number = 332

let stringNumber = String(number);

console.log(stringNumber);
console.log(typeof stringNumber);

