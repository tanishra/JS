const amazonUser = new Object(); // singleton object
const user = {}; // non-singleton object

amazonUser.id = "123";
amazonUser.name = "Tanish Rajput";
amazonUser.idLoggedIn = false;

console.log(amazonUser);

const regularUser = {
    email: "tanish@google.com",
    fullName : {
        userFullName:{
            firstName: "Tanish",
            lastName: "Rajput"
        }
    }
}

console.log(regularUser.fullName.userFullName.firstName);
// fullName? optional chaining

const obj1 = {1: "a",2: "b"};
const obj2 = {3: "c",4: "d"};

// const obj3 = {obj1,obj2};
// const obj3 = Object.assign(obj1,obj2);
// const obj3 = Object.assign({},obj1,obj2); 
// {}  act as a target and other objects act as a source
const obj3 = {...obj1,...obj2};
console.log(obj3);

const newUser = [
    {
        username: 'a',
        email: "a@gmail.com"
    }
    ,
    {
        username: 'b',
        email: "b@gmail.com"
    }
    ,
    {
        username: 'c',
        email: "c@gmail.com"
    }
]
console.log(newUser[0].email);

console.log(Object.keys(amazonUser));
console.log(Object.values(amazonUser));
console.log(Object.entries(amazonUser)); // convert every key-value pair into array

console.log(amazonUser.hasOwnProperty('isLoggedIn')); // to check if it has this property or not