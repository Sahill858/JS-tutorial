const accountId = 4566
let accoundEmail = "sahilmusic@gmail.com"
var accountPassword = "123456"
accountCity = "Jaipur"
let accountState;

console.log(accountId);
console.log(accoundEmail);
console.log(accountPassword);
console.log(accountCity);


console.table([accoundEmail,accountId,accountPassword,accountCity,accountState])
/*
Prefer not to use var because of issue in block scope and functional scope
*/