const name = "tanish";
const age = 21;

// console.log(name + " " + age);

console.log(`Hello , my name is ${name} and my age is ${age}`);

console.log(typeof name);

const gameName = new String('harry potter');

console.log(typeof gameName);

console.log(gameName);

console.log(gameName[0]);
console.log(gameName[1]);
console.log(gameName[2]);
console.log(gameName[3]);
console.log(gameName[4]);

console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(3));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,5);
console.log(newString); 

const anotherString = gameName.slice(-6,1);
console.log(anotherString);

const one = "     Tanish     ";
console.log(one);
console.log(one.trim());

const url = "https://tanish.com/tanish%20rajput";
console.log(url.replace("%20","-"));

console.log(url.includes('tanish')); 

const two = "tanish-rajput-21";
console.log(two.split('-'));

const three = "tanish rajput";
console.log(three.split(" "));