function setUserName(username){
    this.username = username;
    console.log("setUserName is called");
} 

function createUser(username,email,password){
    setUserName.call(this,username);
    this.email = email;
    this.password = password;
}

const tanish = new createUser("tanish","tanish@gmail.com",23423);

console.log(tanish);