const arr = [1,2,3,4,5,6];
console.log(arr[0]);

// In javascript , arrays are resizeable.
// copy method on arrays make shallow copies
// shallow copy share the same reference
// deep copy share different reference

const myHeros = ['Iron man',"Spider man", 'Hulk', 'Doctor Strange'];
const myarr = new Array(1,2,3,4);
console.log(myHeros);
console.log(myarr);

// Array Methods
arr.push(7);
arr.push(8);
console.log(arr);

arr.pop();
console.log(arr);

arr.unshift(9);
console.log(arr);
arr.shift();
console.log(arr);

console.log(arr.includes(3));
console.log(arr.indexOf(4));

const newArr = arr.join(); // converts into string
console.log(newArr);
console.log(typeof newArr);

console.log("A ", arr);

const myn1 = arr.slice(1,4);
console.log(myn1);

console.log("B " ,arr)

const myn2 = arr.splice(1,4);
console.log(myn2);

console.log("C ",arr);