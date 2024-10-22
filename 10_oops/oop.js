// Object Literal

const user = {
    username: "Tanish",
    loginCount: 4,
    signedIn: true,
    getUserDetails: () =>{
        // console.log("Got user details from the database");
        // console.log(`Username : ${this.username}`);
        console.log(this);
    }
}

console.log(user['username']);

// Constructor Function

// const promise1 = new Promise();
// const date1 = new Date();

function User(username,loginCount,loggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.loggedIn = loggedIn;
    return this;
}

// const userone = User("Tanish",2,true);
// const usertwo = User("Rajput",5,false); it will override all details
console.log(userone);

const userone = new User("Tanish",2,true);
const usertwo = new User("Rajput",5,false);
console.log(userone);
console.log(usertwo);
