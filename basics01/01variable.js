const accountId=21332
let accountEmail="dks@gmail.com"
var accountPassword="23432"
accountCity="jaipur"
let accountState

/*
Prefer not to use var because of issue in block scope and functional scope
*/
accountEmail="dsfgh@gmail.com"
accountPassword="32432"
accountCity="Bihar"
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])