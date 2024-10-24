class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username is : ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,pass){
        super(username);
        this.email = email;
        this.pass = pass;
    }

    addCourse(){
        console.log(`A new course is added by ${this.username}`);
    }
}

const user1 = new Teacher('user1','user1@gmail.com',2343);
user1.addCourse();
user1.logMe();

const user2 = new User('user2');
user2.logMe();
// user2.addCourse(); It will give error

console.log(user1 === user2);
console.log(user1 instanceof Teacher);
console.log(user1 instanceof User );

console.log(user2 instanceof Teacher );
console.log(user2 instanceof User );
