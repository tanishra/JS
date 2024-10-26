const User = {
    _email: "user@gmail.com",
    _password: "user1",

    get email(){
        return this.email;
    },

    set email(email){
        this.email = email;
    }
}

const user1 = Object.create(User);
console.log(user1.email);
