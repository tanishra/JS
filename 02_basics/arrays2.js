const marvel_heros = ["Ironman","Thor","Spiderman"];
const dc_heros = ["Superman","Flash","Batman"];

marvel_heros.push(dc_heros);

console.log(marvel_heros);

const newarr = marvel_heros.concat(dc_heros);

console.log(newarr);

// spread operator
const allHero = [...marvel_heros,...dc_heros];
console.log(allHero);

// flat method
const another_array = [1,2,3,[4,5,6],7,8,[1,2,3,[4,5,6]]];
const useable_array = another_array.flat(Infinity);
console.log(useable_array);

console.log(Array.isArray("Tanish"));
console.log(Array.from("Tanish")); // convert anything into array
console.log(Array.from({name : "Tanish"})); // return an empty object

const score1 = 100;
const score2 = 200;
const score3 = 300;
console.log(Array.of(score1,score2,score3));