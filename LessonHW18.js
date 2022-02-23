// EMAIL
const emailVal = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const email = document.getElementById('emailId');
function validateEmail(value) {
      return emailVal.test(value);
    }
function updateInputEmail() {
      try{
  if (validateEmail(email.value)){
      email.style.borderColor = 'green'; 
      email.style.backgroundColor = 'lightgreen';
  } else {
      email.style.borderColor = 'red';
      email.style.backgroundColor = '#ef5350';
  } 
}catch(e){
      console.log(e)
      alert('Error')
}
}
email.addEventListener('input', updateInputEmail);

// NAME
const nameVal = /[A-Za-zA-Яа-яЁё]{1,20}/;
const name = document.getElementById('nameId');
function validateName(value) {
      return nameVal.test(value);
    }
function updateInputName() {
      try{
       if (validateName(name.value)){ 
             name.style.borderColor = 'green';  
             name.style.backgroundColor = 'lightgreen'; 
         } else { 
             name.style.borderColor = 'red'; 
             name.style.backgroundColor = '#ef5350'; 
         }  
      }catch(e){
         console.log(e)
         alert('Error')
      }
}
name.addEventListener('input', updateInputName);

// TELEPHONE
const telVal = /^\+380\d{3}\d{2}\d{2}\d{2}$/;
const tel = document.getElementById('telId');
function validateTel(value) {
      return telVal.test(value);
    }
function updateInputTel() {
      try{
      if (validateTel(tel.value)){
            tel.style.borderColor = 'green'; 
            tel.style.backgroundColor = 'lightgreen';
        } else {
            tel.style.borderColor = 'red';
            tel.style.backgroundColor = '#ef5350';
        } 
      }catch(e){
            console.log(e)
            alert('Error')
      }
}
tel.addEventListener('input', updateInputTel);

// PASSWORD
const beginNotDigit = /^\D.*$/
const withoutSpecialChars = /^[^-() ]*$/
const minimum5Chars = /^.{5,}$/
const atLeastOneDigit = /(?=.*[0-9])/
const pass = document.getElementById('passId');
function validatePass(value) {
      return beginNotDigit.test(value) && 
      withoutSpecialChars.test(value) &&       
      minimum5Chars.test(value) && 
      atLeastOneDigit.test(value)
    }
function updateInputPass() {
      try{
      if (validatePass(pass.value)){
            pass.style.borderColor = 'green'; 
            pass.style.backgroundColor = 'lightgreen';
        } else {
            pass.style.borderColor = 'red';
            pass.style.backgroundColor = '#ef5350';
        } 
      }catch(e){
            console.log(e)
            alert('Error')
      }
}
pass.addEventListener('input', updateInputPass);