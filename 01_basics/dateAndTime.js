const mydate = new Date();
console.log(mydate);
console.log(typeof mydate);

console.log(mydate.toString());
console.log(mydate.toLocaleString());
console.log(mydate.toISOString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleDateString());
console.log(mydate.toJSON());

const myCreatedDate = new Date(2024,0,24);
console.log(myCreatedDate);
console.log(myCreatedDate.toDateString());

const myCreatedDate2 = new Date(2024,0,1,10,10);
console.log(myCreatedDate2);
console.log(myCreatedDate2.toDateString());
console.log(myCreatedDate2.toLocaleString());

const myCreatedDate3 = new Date("2024-11-26");
console.log(myCreatedDate3);
console.log(myCreatedDate3.toLocaleString());

const myCreatedDate4 = new Date("11-26-2024");
console.log(myCreatedDate4);
console.log(myCreatedDate4.toLocaleString());

const myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

console.log(Date.now()); // miliseconds
console.log(Math.floor(Date.now())); // seconds

const newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:'long',
})