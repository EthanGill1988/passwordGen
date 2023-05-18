// Assignment Code
var generateBtn = document.querySelector("#generate");
// created function
function generatePassword() {

  //added prompts for the User Selection
let text;
let input0 = prompt("Select between 8 and 128", "Enter Here");
if (input0 < 8) {
    alert("Please Select a Number Higher than Eight");
    return "Please Try Again";
}
if (input0 > 128) {
    alert("Please Select a Number Lower than 128");
    return "Please Try Again";
}
if (isNaN(input0)) {
    alert("Must be a Number!");
    return "Please Try Again";
}
// defined the charset
let charset = ""
let input1 = confirm("Do you wish to include lowercase letters?");
if (input1 === true) {
    charset += "abcdefghijklmnopqrstuvwxyz";
}

let input2 = confirm("Do you wish to include uppercase letters?");
if (input2 === true) {
    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}
let input3 = confirm("Do you wish to include special figures?");
if (input3 === true) {
    charset += "!@#$%^&*()_-=?/";
}
 let input4 = confirm("Do you wish to include numbers?");
 if (input4 === true) {
    charset += "0123456789";
 }

console.log(charset);
// designated the var length to be as specified by user.
var length = input0,
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
