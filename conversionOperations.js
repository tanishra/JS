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

// ********************** Operations *************************

let value = 2;
let negValue = -value;

console.log(negValue);

console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 ** 2);
console.log(2 / 2);
console.log(2 % 2);

let str1 = "hellow";
let str2 = " tanish";
let str3 = str1 + str2;

console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2  + 2);
console.log(1 + 2  + "2");

console.log(true);
console.log(+true);
// console.log(true+);  

console.log(+""); 

let num1 , num2 , num3;
num1 = num2 = num3 = 2 + 2;

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);