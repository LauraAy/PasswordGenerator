let length = +prompt('Choose a password length between 8 and 128 characters.')

  if (length > 8 && length < 128) {
    alert('You have chosen a password of ' + length + ' characters.')
  }
  else {
    alert('Your password must be greater than 8 or less than 128 characters.')

  }

  var charChoice = ['abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', '1234567890', '{}()[]#:;^,.?!|&+-=*~_%@$']


  let prompt1 = prompt(`Do you want to use lower case letters? Type "yes" or "no."`)

  let choice1 = ''

    if (prompt1 === 'yes') {
       choice1 = charChoice[0]
    }
    else {
      choice1 = '\0'
    }

  let prompt2 = prompt(`Do you want to use Upper case letters? Type "yes" or "no."`)

  let choice2 = ''

  if (prompt2 === 'yes') {
    choice2 = charChoice[1]
  }
  else {
    choice2 = '\0'
  }

  char = choice1 + choice2

  console.log(char)

  let password = '';

  for (var i = 0; i < length; i++){
    password += char.charAt(Math.floor(Math.random() * length))
  }

  console.log(password)


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
