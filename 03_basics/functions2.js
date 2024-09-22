function calculateCartPrice(...num){ // ...rest operator (spread)
    return num;
}

function calculateCartPrice2(val1,val2,...num){
    return num;
}

console.log(calculateCartPrice(100,200,300,400));
console.log(calculateCartPrice2(100,200,300,400,500,600));

const obj = {
    username: "Tanish",
    price: 999
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}

handleObject(obj);
handleObject({
    username: "utkarsh",
    price: 400
});

const newArray = [100,200,300,400];

function returnSecondValue(arr){
    return arr[1];
}

console.log(returnSecondValue(newArray));
console.log(returnSecondValue([100,200,300,400]));