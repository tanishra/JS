// Stack (Primitive datatypes) and Heap (Non - Primitive datatypes)

let name = "tanish";
let anotherName = name;

anotherName = "raja";

console.log(name);
console.log(anotherName);


let objOne = {
    email : "email@gmail.com",
    upi : "user@ybl"
}

let objTwo = objOne;

objTwo.email  = "user2@gmail.com";

console.log(objOne);
console.log(objTwo);

