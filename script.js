 //setting up prompts/confirms 
 var hasNumbers = prompt("How many characters would you like?", "Character Amount?");
 var specCharacters = confirm("Would you like special characters?", "Special Characters?");
 var confNumbers = confirm("Would you like Numbers?", "Numbers?");
 var confLowercase = confirm("Would you like Lowercase letters?", "Lowercase?"); 
 var confUpperCase = confirm("Would you like Uppercase letters", "Uppercase?");
 // setting up arrays
 var lowerLetters = "abcdefghijklmonpqrstuvwxyz".split("")
 var upperLetters = "abcdefghijklmonpqrstuvwxyz".toUpperCase().split("")
 var numbers = "1234567890".split("")
 var specialCharacters = "!@#$%^&*()".split("")
 var final = []


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

generatePassword(){
  
}


