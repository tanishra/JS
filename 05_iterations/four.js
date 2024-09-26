// for in

const myobj = {
    JS : "Javascript",
    CPP : "C++",
    rb : "Ruby",
    swift : "Swift by apple"
}

for(const key in myobj){
    console.log(`${key} shortcut is for ${myobj[key]}`);
}

const myarr = [1,2,3,4,5];
for(const i in myarr){ 
    // console.log(i); //  it will give the index by default
    console.log(myarr[i]);
}

const map = new Map();
map.set("IN","India");
map.set("USA","United States of America");
map.set("FR","France");
map.set("IN","India");

// for(const key in map){
//     console.log(key); // It will do nothing
// }