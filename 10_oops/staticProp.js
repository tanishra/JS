class User{
    constructor(username){
        this.username = username;
    }

    PrintMe(){
        console.log(`Username is : ${this.username}`);
    }

    static createID(){
        return `123`;
    }
}

const user1 = new User('user1');
// console.log(user1.createID());  It will give error

class Teacher extends User{
    constructor(username,email){
        super(username);
        this.email = email;
    }
}

const user2 = new Teacher('user2','user2@gmail.com');
// console.log(user2.createID()); This will give error
user2.PrintMe();