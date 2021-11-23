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

function generatePassword(){

  var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numericArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var specialArray = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/",":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
  var passwordArray = [];

  var passwordLength;
  
  do {
    window.alert("First, please enter a valid length for your password");
    passwordLength = window.prompt("How many characters do you want?", "Choose between at least 8 characters or up to 128 characters");
  } while (passwordLength < 8 || passwordLength > 128 || !passwordLength || passwordLength.match(/[a-zA-Z]/) || passwordLength.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/));
    
  do {
    window.alert("Please select at least one character type from the following options:");
    var lowercase = window.confirm("Do you want to include lowercase characters?");
    var uppercase = window.confirm("Do you want to include uppercase characters?");
    var numeric = window.confirm("Do you want to include numeric characters?");
    var special = window.confirm("Do you want to include special characters?");
  } while (lowercase === false && uppercase === false && numeric === false && special === false);

  for (var i = 0; i < passwordLength; i++) {
    if (lowercase === true){
      var lowercaseRand = lowercaseArray[Math.floor(Math.random()*lowercaseArray.length)];
      passwordArray.push(lowercaseRand);
    } else {
      var lowercaseRand = "";
    }

    if (uppercase === true){
      var uppercaseRand = uppercaseArray[Math.floor(Math.random()*uppercaseArray.length)];
      passwordArray.push(uppercaseRand);
    } else {
      var uppercaseRand = "";
    }

    if (numeric === true){
      var numericRand = numericArray[Math.floor(Math.random()*numericArray.length)];
      passwordArray.push(numericRand);
    } else {
      var numericRand = "";
    }

    if (special === true){
      var specialRand = specialArray[Math.floor(Math.random()*specialArray.length)];
      passwordArray.push(specialRand);
    } else {
      var specialRand = "";
    }
    }

    var passwordSliced = passwordArray.slice(0,passwordLength);
    var passwordShuffle = passwordSliced.sort(() => Math.random() - 0.5);
    var password = passwordShuffle.join('');
    return password;

}