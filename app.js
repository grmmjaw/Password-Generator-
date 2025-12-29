

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

function copyPassword(){
      const copyBtn = document.getElementById("copyBtn")
    if (!display.value 
){alert("Error Password Not Generated")}

else {const cb = navigator.clipboard;
    cb.writeText(display.value);
copyBtn.textContent ="Copied :]"
}
setTimeout(() => {
    copyBtn.textContent = "Copy"
}, 1500

)

}

function deletePassword(){
    display.value = ""
};
const generateBtn = document.getElementById("generateBtn");
const deleteBtn = document.getElementById("deleteBtn");
const copyBtn = document.getElementById("copyBtn");
const display = document.getElementById("display");
generateBtn.addEventListener("click",generatePassword);
deleteBtn.addEventListener("click",deletePassword);


