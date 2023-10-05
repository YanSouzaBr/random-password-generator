const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

btnEl = document.querySelector("#btn-el")

let pass1 = document.querySelector("#pass-1");
let pass2 = document.querySelector("#pass-2");

passLength = document.querySelector("#pass-length");


btnEl.addEventListener('click', function(){
    let password1 = ""
    let password2 = ""

    for (let i = 0; i < passLength.value; i++) {
        password1 += characters[Math.floor(Math.random()*characters.length)]
    }
    for (let j = 0; j < passLength.value; j++) {
        password2 += characters[Math.floor(Math.random()*characters.length)]
    }

    pass1.textContent = password1
    pass2.textContent = password2


})

const pass1Button = document.querySelector("#pass-1");
const pass2Button = document.querySelector("#pass-2");

pass1Button.addEventListener('click', function(){
    navigator.clipboard.writeText(pass1.textContent);
    
    pass1Button.classList.add("copied");
    pass1Button.textContent = "Copied!";
    
    setTimeout(function(){
        pass1Button.classList.remove("copied");
        pass1Button.textContent = password1;
    }, 2000);
}); 

pass2Button.addEventListener('click', function(){
    navigator.clipboard.writeText(pass2.textContent);
    
    pass2Button.classList.add("copied");
    pass2Button.textContent = "Copied!";
    
    setTimeout(function(){
        pass2Button.classList.remove("copied");
        pass2Button.textContent = password2;
    }, 2000);
});
