const promise1 = new Promise((resolve,reject) => {
    // Do an async task
    // DB call , Cryptography , Network calls

    setTimeout(() => {
        console.log("Async Task");
        resolve();
    }, 2000);
})

promise1.then(() =>{
    console.log("Promise is consumed");
})

new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log("Async Task 2");
        resolve();
    },2000);
}).then(() => {
    console.log("Promise 2 resolved");
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            user: "Tanish",
            email: "tanish@gmail.com"
        })
    },1000)
})

promise3.then((user) => {
    console.log(user);
    
})

const promise4 = new Promise((resolve,reject) => {
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username : "Tanish" , Age: 22});
        }else{
            reject("ERROR: Something went wrong");
        }
    })
})

promise4.then((user)=>{
    console.log(user);
    return user.username;
}).then((username) =>{
    console.log(username);
}).catch((error)=> {
    console.log(error);
}).finally(()=> {
    console.log("The promise is either resolved or rejected");
});

const promise5 = new Promise((resolve,reject) => {
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username : "Javascript" , Age: 22});
        }else{
            reject("ERROR: JS went wrong");
        }
    })
})

async function consumePromise5(){
    const response = await promise5;
    console.log(response);
}

consumePromise5(); // async and await can't handle errors

// for handling error , do this

// async function consumePromise5(){
//    try {
//     const response = await promise5;
//     console.log(response);
//    } catch (error) {
//     console.log(error);
//    }
// }


async function getAllUsers() {
    try {
    const response = fetch('https://jsonplaceholder.typicode.com');
    const data = await response.json();
    console.log(data);
    } catch (error) {
        console.log(error);    
    }
}

getAllUsers();

fetch('https://jsonplaceholder.typicode.com')
.then((response) =>{
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) =>{
    console.log(error);
})
