const userEmail = "Tanish.ai";

if(userEmail){
    console.log("Got user email");
}else{
    console.log("Don't have user email");
}

// falsy values
// false , 0 ,-0, BigInt 0n , null , undefined, NAN , ""

// truthy values
// "0" , "false" , " " , [] , {} , function() {}

const arr = [];
if(arr.length == 0){
    console.log("array is empty");
}

const obj = {};
if(Object.keys(obj).length == 0){
    console.log("Object is empty");    
}


// Nullish Coalescing Operator (??) : null or undefined

let val1 ;
// val1 = 45 ?? 10;
// val1 = null ?? 34;
// val1 = undefined ?? 23;
val1 = undefined ?? 42 ?? 23;

console.log(val1);

// Terniary Operator
// condition ? true : false

const price =  100;
price >= 50 ? console.log("more than 50") : console.log("less than 50");

