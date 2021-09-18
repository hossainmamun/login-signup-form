// element selection
const loginOption = document.getElementById('login-option');
const signUpOption = document.getElementById('signUp-option');
const signUpPart = document.getElementById('signUp-part');
const loginPart = document.getElementById('login-part');

loginOption.addEventListener('click', () => {
    signUpPart.style.display = 'none';
    loginPart.style.display = 'block'
})

signUpOption.addEventListener('click', () => {
    loginPart.style.display = 'none'
    signUpPart.style.display = 'block'
})
