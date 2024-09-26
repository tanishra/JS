// for of 

// ["" , "" , "" , ""]
// [{},{},{},{}]

const arr = [1,2,3,4,5];
for(const i of arr){
    console.log(i);
}

const greetins = "Hello world!";
for(const greet of greetins){
    console.log(greet);
}

// Map
const map = new Map();
map.set("IN","India");
map.set("USA","United States of America");
map.set("FR","France");
map.set("IN","India");

console.log(map);

for(const key of map){
    console.log(key);
}

for(const [key,value] of map){
    console.log(key, ":- " , value);
}

const myobj = {
    game1 : "NFS",
    game2 : "GTA"
}

// for(const [key,value] of myobj){
//     console.log(key, ":- " ,value);
// } This will give error