function generatePassword(){
    console.log("password was generated")
};
function deletePassword(){
    console.log("password deleted")
};
const generateBtn = document.getElementById("generateBtn");
const deleteBtn = document.getElementById("deleteBtn");

generateBtn.addEventListener("click",generatePassword);
deleteBtn.addEventListener("click",deletePassword)