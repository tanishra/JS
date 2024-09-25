// if

const isUserLoggedIn = true;

if(isUserLoggedIn){

}

// > , < , <= , >= . != . == , === , !==

if(2 == "2"){
    console.log("Executed");
}

if(2 === "2"){
    console.log("executed");
}

const temperature = 40;

if(temperature < 50){
    console.log("Temperature is less than 50");
}else{
    console.log("Temperature is greater than 50");
}

console.log("Executed");

const score = 100;

if(score > 50){
    const power = "fly";
    console.log(`User power : ${power} `);
}
// console.log(`User power : ${power}`);

const balance = 1000;
if(balance > 500){
    console.log("test");
}

// if(balance > 500) console.log("teset");
// if(balance > 500) console.log("teset") , 
// console.log("test2");

if(balance < 500){
    console.log("less than 500");
}else if(balance < 750){
    console.log("less than 750");
}else if(balance < 900){
    console.log("less than 900");
}else{
    console.log("executed");
}

const isUserLoggedIn2 = true;
const debitCard = true;

if(isUserLoggedIn2 && debitCard){
    console.log("allowed to buy course");
}

const loggedInFromGoogle = false;
const loggedInFromPhone = true;

if(loggedInFromGoogle || loggedInFromPhone){
    console.log("user logged in");
}