function User(email,passwod){
    this._email = email;
    this._password = passwod;

    Object.defineProperty(this,'email',{
        get: function(){
            return this._email;
        },
        set: function(email){
            this._email = email;
        }
    });

    Object.defineProperty(this,'password',{
        get: function(){
            return this._password;
        },
        set: function(passwod){
            this._password = passwod;
        }
    })
}


const user1 = new User("user1@gmail.com","abcd");
console.log(user1.email);