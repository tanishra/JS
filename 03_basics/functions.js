function sayMyName(){
    console.log("T");
    console.log("A");
    console.log("N");
    console.log("I");
    console.log("S");
    console.log("H");
}

sayMyName();

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// addTwoNumbers();
// addTwoNumbers(2 , 6);
// addTwoNumbers(2 , "6");
// addTwoNumbers(2 , "a");
// addTwoNumbers(2 , null);

const result = addTwoNumbers(6,3);
console.log("Result " , result); // because function does not return anything

function addTwoNumbers(number1, number2){
    return (number1 + number2);
    // console.log("Tanish"); unreachable code
}

function loginUserMessage(username = "user"){ // default value
    if(!username){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}

console.log(loginUserMessage("Tanish"));
console.log(loginUserMessage()); // undefined

