let passInput = document.querySelector('.container .password-box input');
let copyBtn = document.querySelector('.container .password-box .fa-copy');
let passLengthSlider = document.querySelector('.container .pass-length input');
let lengthText = document.querySelector('.container .pass-length span');
let generateBtn = document.querySelector('.container .generate-btn');

let generatePassword =()=>{
 let chars = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^*()ABCDEFGHIJKLMNOPQRSTUVWXYZ';
 let password = '';
 let passLength = passLengthSlider.value;
 for(let i=0;i<passLength;i++){
 var randomNumber = Math.floor(Math.random() * chars.length);
 password += chars.substring(randomNumber, randomNumber + 1);
 }
 passInput.value = password;
}

passLengthSlider.addEventListener('input',()=>{
  lengthText.innerHTML = passLengthSlider.value;     
})

copyBtn.addEventListener('click',()=>{
   navigator.clipboard.writeText(passInput.value);

        
        
})

generatePassword();
generateBtn.addEventListener('click',generatePassword)
