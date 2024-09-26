// reduce

const arr = [1,2,3];

const total = arr.reduce(function (accumulator , currentvalue ) {
    console.log(`Accumulator : ${accumulator} , CurrentValue : ${currentvalue}`);
    return accumulator + currentvalue;
},0);
console.log(total);

const total2 = arr.reduce((acc,curr) => acc + curr,0);
console.log(total2);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const price = shoppingCart.reduce((acc,item) => acc + item.price , 0);
console.log(price);