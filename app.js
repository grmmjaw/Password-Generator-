

function generatePassword(){
    for(let i = 0; i < 88; i++){
   let input = Math.floor(Math.random()*88)
   let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?"
   characters.charAt(input)
   console.log(characters.charAt(input))}
};



function deletePassword(){
    console.log("password deleted")
};
const generateBtn = document.getElementById("generateBtn");
const deleteBtn = document.getElementById("deleteBtn");

generateBtn.addEventListener("click",generatePassword);
deleteBtn.addEventListener("click",deletePassword)