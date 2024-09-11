const accountID = 342343;
let accountEmail = "tanishrajput9@gmail.com";
var accountPass = "3443";
accountCity = "Najibabad";

let accountState; // undefined

// accountID = 5; 
// TypeError: Assignment to constant variable.

console.log(accountID);

accountEmail = "tanish@gmail.com";
accountPass = "3423";
accountCity = "Bijnor";

/*
Prefer not to use var
because of issue in block scope and functional scope 
*/

console.table([accountID , accountEmail,accountPass , accountCity, accountState]);
