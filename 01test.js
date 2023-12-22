const accountID=144553 //can't change further
let accountemail="kishan@gamil.com"
var accountpassword="123545"
accountcity="mau"
// accountID =2
console.log(accountID);
console.log(accountcity);   
accountemail="hccs@gamil.com"
accountpassword="123244667"
accountcity="bengaluru"
console.table([accountID,accountemail,accountcity]);
let n=5;
let string = "";
for(let i = 0; i < n; i++) {
  // external loop
  for(let j = 0; j < n; j++) {
    // internal loop
    string += "*";
  }
  // newline after each row
  string += "\n";
}
// printing the string
console.log(string);