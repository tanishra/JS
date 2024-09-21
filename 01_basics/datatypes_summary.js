//  Primitive datatypes - call by value

// 7 types - String, Number , Boolean , null, undefined , Symbol , BigInt

const score = 100;
const scorevalue = 100.3;
const isLoggedIn = false;
const outTemp = null;
let userEmail;

let id = Symbol('123');
let anotherId = Symbol('123');

console.log(id === anotherId);

let bigNumber = 23234234234234234n;


// Symbol is used to make something unique -- will be discussed later

// Non - Primmitive  (Reference type) -- call by reference

// Arrays , Objects, Functions

const myarr = ['ben10' , 'shaktiman' , 'alien'];

const myobj = {
    name : "tanish",
    age : 20
};

const myfunction = function(){
    console.log("hellow world");
    
}
// Javascript is a dynamically typed language

