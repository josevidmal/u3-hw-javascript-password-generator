/* Pseudocode:
1 - User clicks button to initiate password criteria prompts
2 - User enters the number of characters for the password in prompt window
3 - User confirms if the password should have lowercase characters
4 - User confirms if the password should have uppercase characters
5 - User confirms if the password should have numeric characters
6 - User confirms if the password should have special characters
7 - User criteria choices are validated and password is generated with
random values of the selected character types
8 - Password is written to the page or in an alert window
*/

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

