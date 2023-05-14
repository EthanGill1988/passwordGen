// Assignment Code
var generateBtn = document.querySelector("#generate");
// created function
function generatePassword() {

  
let text;
let input0 = prompt("Select between 8 and 128", "Enter Here");
let input1 = prompt("Do you wish to include lowercase letters?");
let input2 = prompt

var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
  
  return "Generated Password"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
