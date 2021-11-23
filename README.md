# u3-hw-javascript-password-generator
ITESM Coding Bootcamp - Unit 3 Homework - JavaScript: Password Generator

This was an on-the-job ticket activity where I was given a complete HTML and CSS code, as well as a JavaScript file with some code already in it. The goal was to complement the JavaScript file with additional code to transform the website into a functional Password Generator. In order to generate the password the user should click a button to be asked a series of questions to choose the password criteria, like the length (at least 8 characters and no more than 128) and the character types (lowercase, uppercase, numeric and special characters) for the password. Once the user had made all the selections the webiste would show the password written in a textarea element.

First of all, under the function called generatePassword(), I set some variables for different arrays like lowercase, uppercase, numeric and special characters, as well as an empty array for the generated password (this in order to use the .push() method later on, adding the selected character types to this array). After that, I wrote some code for the different alert, prompt and confirm windows that the user would be shown during the process. Since there were some conditions for the length (at least 8 characters and no more than 128), as well as for the character types (at least one character type should be selected), I wrapped the alert, prompt and confirm windows code inside a do loop with while conditionals to force the user to enter valid input for the length, and choose at least one character type. For the lenght I used some regex (Regular Expressions) to avoid the user from typing letters or special characters.

For the next part I used a for loop to generate iterations for 4 if conditional statements (one if for each character type). The number of iterations would be equal to the password lenght selected by the user. The puprose here was to push elements of the selected character types into the empty array for the password. In some cases the iterations would push 2, 3 or 4 times the lenght of the array, so, to fix this I used some methods on the new password array. Starting with the .slice() method, to cut the new array exactly into the length selected by the user. After this, I used the .sort method along with a Math.random expression to shuffle the elements of the array. Next, I used the .join() method to put the sliced and shuffled elements of the array into a string without commas and spaces. Finally, I instructed the generatePassword() function to return the variable named "password" with the sliced, shuffled and joined elements.

The final website looks like this image:

![Password-Generator]()

The link for the deployed application is this:

