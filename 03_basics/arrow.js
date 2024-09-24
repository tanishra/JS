const user = {
    username: "Tanish",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website `);
        // console.log(this);
    }
}

user.welcomeMessage();
user.username = "Tanish Rajput";
user.welcomeMessage();
// console.log(this);

function one(){
    // console.log(this);
    const username = "Tanish";
    console.log(this.username); // undefined
}
one();

const two = () => { // arrow function
    const username = "Tanish";
    console.log(ths.username); // undefined
}

const addTwo = (num1,num2) => {
    return num1 + num2;
}
console.log(addTwo(2,5));

const addTwo2 = (num1,num2) => num1 + num2; // implicit return (if your function has only one return statement)
console.log(addTwo2(4,1));

const three = () => ({username: "tanish"});
console.log(three());

// {} if you use curly braces then , you have to write the return statement
// () if you use parentheses then , you don't have to write the return statement

