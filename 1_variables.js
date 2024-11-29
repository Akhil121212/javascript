const accountId = 124424
let accountEmail = "akhilesh@gmail.com"
var accountPassword = "12312"
accountCity = "Bangaluru"
let accountState;

//prefere not to use var
//because of issue in block scope and function scope

accountEmail = "akhil2gmail.com"
accountPassword ="124243"
accountCity = "Mandya"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword,accountCity,accountState]);
