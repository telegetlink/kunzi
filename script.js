


// Assignment Code
//We declare a gobal variable
var generateBtn = document.querySelector("#generate");

//We define the function to return integer in and create a new local variable 
function randomInt(min, max) {
  if (!max) {
    max = min;
    min = 0;
  }
  var any = Math.random();
  return Math.floor(min * (1 - any) + any * max);
}

//We create a function to get the random position from the list
function pickRandom(CharacterData) {
  return CharacterData[randomInt(0, CharacterData.length)];
}

//From the criteria : THEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria
//Initially, console returns error that generatePassword is not defined, so we need to create the function

function generatePassword() {

  //We use the window object to prompt for the length of the password
  
  //var Info = window.prompt("How many characters do you want your password to have?"); //It returns a string, but we need it to be a number, so we need the parseInt() function that turns string to a number
  
  var Info = 15;

  var numOfCharacters = parseInt(Info); 
  //The global NaN property is a value that is Not-A-Number
  if (isNaN(numOfCharacters)) {
    window.alert("Use only numbers please.");
    //We stop the function 
    return;
  }

  //We use a statement with a conditional if the number of characters is less than 8, there will be an alert
  if (numOfCharacters < 8 || numOfCharacters > 128) {
    window.alert("Password must contain from 8 up to 128 characters");
    //End of function
    return;
  }

  //Criteria: WHEN asked for character types to include in the password 
  //THEN I confirm whether or not to include lowercase,


  /***
  //User wants lowercase
  var lowerCase = window.confirm("Do you want to use lower case?");

  // User wants uppercase,
  var upperCase = window.confirm("Do you want to use uppercase ?");

  //User wants numeric, and/or
  var numeric = window.confirm("Do you want to use numbers?");

  //User wants  special characters 
  var specialCharacters = window.confirm("Do you want to use special characters?");


  */
  var lowerCase = true;
  var upperCase = true;
  var numeric = true;
  var specialCharacters = true;
  var meensCute = true;
  /////////////////////


  //Criteria :WHEN I answer each prompt THEN my input should be validated 
  //and at least one character type should be selected
  //After declaring the variables, we put them in an array and weclare a new variable to store the data
 
  var lowerCaseData = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
  var upperCaseData = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];
  var numericData = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialCharactersData = ["!", "%", "ñ", "$", "&", "@", "*", "+", "Ç", "#"];

  var meensCutez = ['😀','😃','😄','😁','😅','🧐','🤣','😍','😎','😲','😂','🤓','😳','😭','🙂','🤩','😛','🤥','👋','🥺','👨‍🦰','😷','💦','😰','🥳','🙃','🐋','😏','😴','💝','🗨','💫','👩‍🦰','🤠','😨','😉','😗','💪','💭','🥞','🦷','💖','🤘','👈','🤨','💬','💥','🤤','🤮','😥','😊','🍎','🥘','🦴','🍗','🌭','👁','🍲','🤐','🐔','🌼','🐢','🍄','👮‍','✋','☝','👦','🦶','🤙','👊','✌','😐','😸','🖖','🌽','🖐','🍖','😪','👁','🗨','👻','🤢','🤯','👶','👨‍🏭','🐬','🐛','👮','🐡','😘','😚','🐼','🍈','🐸','🍉','🤖','🦗','🐳','🎅','🦵','🙎‍','👀','😹','👏','👅','👩‍💻','🤞','😇','😙','👨‍💻','💩','🤬','☠','💢','🤔','😶','🤕','😱','😵','😝','🤗','👾','👺','💀','🤡','😡','🤫','😖','😩','🤒','🥵','🥴','🤑','🤭','😤','🥶','😣','🥰','😞','時','間','會','改','變','你','喜','歡','的','東','西','甚','至','改','變','你','喜','歡','的','人','卻','很','少','改','變','你','喜','歡','的','節','し','い','と','述','べ','た','政','策','に','は','子','ど','も','の','権','利','を','保','障','す','る','子','ど','も','基','本','法','の','制','定','や','省','庁','間','の','縦','割','り','を','排','し','て','子','ど','も','関','連','政','策','の','総','合','調','整','を','担','う','ต','อ','น','ห','ม','อ','ไม่','ได้อ','ยู่ด้วย','หร','าคะปก','ติแม่','ต้อ','งอยู่','กับน้','อง','ตลอ','ดรึป่า','วตอ','นตรว','จหรื','ออย่','างไรก','งสัยว่','าน้อ','งไปโ','ดนอ','ะไรต','อนให','นถ้า','แม่ไ','ด้อยุ่กั','บน้องต','ลอด','ตอน','หมอต','รวจน่','าจะเห็','นว่าห','มอทำ','อะไร','มือลู','กบ้า','งจะ'];

  //var with the options the user selected, it has to be an empty array
  var optionsSelected = [];

  //Conditionals that pushes  the data 
  if (lowerCase === true) {
    optionsSelected.push(lowerCaseData);
  }

  if (upperCase === true) {
    optionsSelected.push(upperCaseData);
  }

  if (numeric === true) {
    optionsSelected.push(numericData);
  }

  if (specialCharacters === true) {
    optionsSelected.push(specialCharactersData);
  }

  if (meensCute === true) {
    optionsSelected.push(meensCutez);
  }

  //Function to stop the prompts if user selects NO (Cancel) to everything
  if (!lowerCase && !upperCase && !numeric && !specialCharacters) {
    window.alert("Please select at least one.");
    return
  }

  //We need a variable that will store the string with the password with the added random character
  var password = "";
  for (var i = 0; i < numOfCharacters; i++) {

    //We will pick an item in a random position
    var randomCharacter = pickRandom(optionsSelected)
    var pickedCharacter = pickRandom(randomCharacter)
    password = password + pickedCharacter;
    //console.log(pickedCharacter)
  }
  return "@"+password+"#"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
