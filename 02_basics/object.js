// singleton from Constructor
// Object.create

// Object Literals
const mySym  = new Object("Key1");
const JsUser = {
    name: "Tanish",
    age: 21,
    email: "tanish@google.com",
    location: "Greater Noida",
    isLoggedIn: false,
    lastLoggedInDays: ["Monday","Saturday"],
    "full Name" : "Tanish Rajput", // you cannot access this by using dot
    [mySym]: "my key"
}

console.log(JsUser.email);
console.log(JsUser["email"]);

// console.log(JsUser.fullName); This will give error
console.log(JsUser["full Name"]);

console.log(JsUser[mySym]);

JsUser.email = "tanish@chatgpt.com";
// Object.freeze(JsUser);
JsUser.email = 'tanish@microsoft.com';
console.log(JsUser);

JsUser.greetings = function(){
    console.log("Hello JS user");   
}

console.log(JsUser.greetings); 
console.log(JsUser.greetings());

JsUser.greetingTwo = function(){
    console.log(`Hello Js User ${this.name}`);
}

console.log(greetingTwo());