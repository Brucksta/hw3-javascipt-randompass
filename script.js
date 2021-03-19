  // Assignment Code
 

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var lowerLetters = "abcdefghijklmonpqrstuvwxyz".split("")
var upperLetters = "abcdefghijklmonpqrstuvwxyz".toUpperCase().split("")
var numbers = "1234567890".split("")
var specialCharacters = "!@#$%^&*()".split("")
var final = []

function generatePassword() {

 //setting up prompts/confirms 
 var charAmount = Number(window.prompt("How many characters would you like?", "Character Amount?"));
 
 if (charAmount < 8 || charAmount > 128) {
confirm("Password must contain 8-128 characters")
charAmount = Number(window.prompt("How many characters would you like?"))
 }
// **TODO**add loop
var hasLowercase = window.confirm("Would you like Lowercase letters?", "Lowercase?"); 
 if (hasLowercase) {
 final = final.concat(lowerLetters)
 }

var hasUpperCase = window.confirm("Would you like Uppercase letters", "Uppercase?");
 if (hasUpperCase) {
  final =  final.concat(upperLetters)
 }
var hasNumbers = window.confirm("Would you like Numbers?", "Numbers?");
 if (hasNumbers) {
  final =  final.concat(numbers)
 }
var specCharacters = window.confirm("Would you like special characters?", "Special Characters?");
if (specCharacters) {
  final =  final.concat(specialCharacters)
}

//all variables are concat'd into final array



}

// //loop
// for (var i = 0; i < charAmount; i++) {
//   generatePassword(i + ".");

