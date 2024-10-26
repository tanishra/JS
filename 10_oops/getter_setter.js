class User{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }

    set password(password){
        this._password = password;
    }

    get password(){
        return this._password.toUpperCase();
    }

    set email(email){
        this._email = email;
    }

    get email(){
        return this._email;
    }

}

const Tanish = new User("Tanish@gmail.com","abc");
console.log(Tanish.password);
console.log(Tanish.email);
