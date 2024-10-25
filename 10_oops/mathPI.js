console.log(Math.PI);
Math.PI = 5;
console.log(Math.PI);

const descriptor = Object.getOwnPropertyDescriptor(Math,"PI");
console.log(descriptor);

const book = {
    name: "Harry Potter",
    price: 2000,
    isAvailable: true,

    orderBook: function(){
        console.log("Book ordered");
        
    }
}

console.log(Object.getOwnPropertyDescriptor(book,'name'));

// Object.defineProperty(book,"name",{
//     writable: false,
//     enumerable: false
// })

console.log(Object.getOwnPropertyDescriptor(book,'name'));

for(let [key,value] of Object.entries(book)){
    if(typeof value !== 'function'){
        console.log(`${key}: ${value}`);
    }
}