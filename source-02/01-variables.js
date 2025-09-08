const accountId = 123;
let email = "abcd@mail.com";
var accountPassword = "0000";
accountCity = "Delhi"; // not a good practice
let accountState;

// accountId = 2; error: assignment to constant variable
accountEmail = "xyz@mail.com";
accountPassword = "1111";
accountCity = "Noida";

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);

/*
Key-takeaway: Prefer not to use var, because of issue in block and functional scope.
*/
