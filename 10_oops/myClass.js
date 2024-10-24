 // ES6

class User{
    constructor(username,email,pass){
        this.username = username;
        this.email = email;
        this.pass = pass;
    }

    encryptedPassword(){
        return `${this.pass}abc`;
    }

    UpperUser(){
        return `${this.username.toUpperCase()}`;
    }
}

const user1 = new User('user1','user1@gmail.com',123);
console.log(user1.encryptedPassword());
console.log(user1.UpperUser());

// Behind the scene

// function User(username,email,pass){
//     this.username = username;
//     this.email = email;
//     this.pass = pass;
// }

// User.prototype.encryptedPassword = function(){
//     return `${this.pass}abc`;
// }

// User.prototype.UpperUser = function(){
//     return `${this.username.toUpperCase()}`;
// }

// const user2 = new User("user2",'user2@gmail.com',343);
// console.log(user2.encryptedPassword());
// console.log(user2.UpperUser());