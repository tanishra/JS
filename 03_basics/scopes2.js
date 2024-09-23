function one(){
    const username = "Tanish";

    function two(){
        const website = "Youtube";
        console.log(username);
    }

    // console.log(website); This will give error

    two();
}

one();

if(true){
    const username = "Tanish";
    if(username == "Tanish"){
        const website = " Youtube";
        console.log(username + website);
    }
    // console.log(website); This will give error
}
// console.log(username); This will give error

addOne(3);// This is valid
function addOne(num){
    return num + 1;
}


// addTwo(3) This is not vao=lid
const addTwo = function(num){
    return num + 2;
}

addTwo(3);