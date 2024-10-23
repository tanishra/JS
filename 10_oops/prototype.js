let myName = "Tanish     ";

// console.log(myName.length);
console.log(myName.truelength);

let hereos = ['thor','spiderman'];

let hereosPower = {
    thor : "hammer",
    spiderman : 'swing',
    getSpiderPower : function(){
        console.log(`Spider man power is ${this.spiderman}`);
        
    }
}

Object.prototype.tanish = function(){
    console.log(`Tanish is present in all objects`);
}

hereos.tanish();
myName.tanish();
hereosPower.tanish();

Array.prototype.heyTanish = function(){
    console.log(`Tanish says hello`);
}

hereos.heyTanish();
// myName.heyTanish();  
// hereosPower.heyTanish();

// Inheritance

const Teacher = {
    makeVideos : true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : "JS Assignment",
    fullTime : true,
    __proto__ : TeachingSupport
}

const User = {
    username : "user",
    email: "user@gmail.com"
}

Teacher.__proto__ = User;

// Modern Syntax
Object.setPrototypeOf(TeachingSupport,Teacher);

let username = "Tanish Rajput    ";

String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`True Length is : ${this.trim().length}`);   
}

username.truelength();