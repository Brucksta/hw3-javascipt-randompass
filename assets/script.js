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
var passwordString = []


function generatePassword() {

 //setting up character amount
 var charAmount = Number(window.prompt("How many characters would you like between 8-128?", "Character Amount?"));
  console.log(charAmount)
  if (Number.isNaN(charAmount))
  {
    console.log("hello")
    while ((charAmount < 8 || charAmount > 128) && Number.isNaN(charAmount)) {
      confirm("Password must contain 8-128 characters")
      charAmount = Number(window.prompt("How many characters would you like?"))
      console.log(charAmount)
    }
  }
  // setting up prompts
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

  //setting up password generation
  var myPassword = '';
  for (var i = 0; i < charAmount; i++)
  {
    var randNum = Math.floor(Math.random() * final.length);
    myPassword += final[randNum];
  }
  return myPassword;
}
