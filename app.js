

function generatePassword(){
let text = ""
 for(let i = 0; i < 16; i++){
let randomCharacters
   let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?"
   let input = Math.floor(Math.random()* characters.length)
   characters.charAt(input) 
    randomCharacters = characters.charAt(input)
text += randomCharacters}
    display.value = text
};




function deletePassword(){
    display.value = ""
};
const generateBtn = document.getElementById("generateBtn");
const deleteBtn = document.getElementById("deleteBtn");
const display = document.getElementById("display");
generateBtn.addEventListener("click",generatePassword);
deleteBtn.addEventListener("click",deletePassword);