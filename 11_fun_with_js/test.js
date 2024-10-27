const myArr = []
// %DebugPrint(myArr);

// continous, Holey

// SMI (small integer)
// Packed element
// Double (float, string, function)

// PACKED_SMI_ELEMENTS - Most optimized
const arr = [1,2,3,4,5];

// HOLEY_SMI_ELEMENTS
const arr2 = [1,2, ,4,5];

arr.push(6.0);
// Now it becomes PACKED_DOUBLE_ELEMENTS

arr.push('23');
// Now it becomes PACKED_ELEMENTS

arr[10] = 34;
// Now it becomes HOLEY_Elements

console.log(arr);
console.log(arr.length);
console.log(arr[9]);

// bound check
// hasOwnProperty(arr,9)
// hasOwnProperty(arr.prototype,9)
// hasOwnProperty(Object.prototype,9)
// hasOwnProperty - one of the most expensive check in javascript

// That's why Holes are very expensive in js

// SMI > DOUBLE < PACKED   Optimization order
// H_SMI > H_DOUBLE > H_PACKED

const arr3 = new Array(3);
// Just 3 holes - HOLEY_SMI_ELEMENTS
arr3[0] = "2"; // HOLEY_ElEMENTS
arr3[1] = "4"; // HOLEY_ELEMENTS
arr3[2] = "6"; // HOLEY_ELEMENTS


const arr4 = []
arr4.push ('1') // PACKED_ELEMENTS 
arr4.push ('2') // PACKED_ELEMENTS
arr4.push ('3') // PACKED_ELEMENTS

const arr5 = [1,2,3,4,5]; // SMI_PACKED_ELEMENTS
arr5.push(NaN); // DOUBLE_PACKED_ELEMENTS
arr5.push(Infinity); // DOUBLE_PACKED_ELEMENTS
