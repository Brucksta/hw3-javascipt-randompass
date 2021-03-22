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

 //setting up prompts/confirms
 var charAmount = Number(window.prompt("How many characters would you like between 8-128?", "Character Amount?"));

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


var arr = [];
while(arr.length < charAmount){
    var r = Math.floor(Math.random() * final.length) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
}
console.log(arr);
passwordString += final[Math.floor(Math.random()*final.length)]
 
for (var i = 0; i < charAmount + 1; i++) {
    console.log(passwordString[i])
}

console.log(passwordString[i])
console.log(final[arr])
}

console.log(final)


//all variables are concat'd into final array

// function randLoop() {
//   var index = Math.floor(Math.random() * final.length);
//   for (var i = 0; i < charAmount; i++)
//   index = final[i]
// }

// for (var i = 0; i < charAmount; i++) {
//   var random = Math.floor(Math.random() * final.length);
// }
//    console.log(random)
//    console.log(final[i])


  // function getRandom (min, max) {
//   return Math.random() * (max - min) + min;
// }
//   var rand = final[Math.floor(Math.random() * charAmount.length)];
//   console.log(rand)


  // var index = Math.floor(Math.random() * options.length);
  // var computerChoice = options[index];






// //loop
// for (var i = 0; i < charAmount; i++) {
//   generatePassword(i + ".");

// var randomGenerate = function(final, charAmount) {
//   // var randResult = [];
//   for (var i = 0; i = charAmount; i++) {
//     randResult.push(final[Math.floor(math.random()*final.length)]);
//   }
//   return randResult;
// }
// randomGenerate